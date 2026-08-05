import { fn, col } from 'sequelize';
import { Customer, Purchase } from '../models/index.js';

const computeTier = (totalSpend) => {
    if (totalSpend >= 100000) return 'gold';
    if (totalSpend >= 30000) return 'silver';
    return 'bronze';
};

export const getCustomerValue = async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    const [stats] = await Purchase.findAll({
        where: { customerId: req.params.id },
        attributes: [
            [fn('COUNT', col('id')), 'visitCount'],
            [fn('SUM', col('totalAmount')), 'totalSpend'],
            [fn('AVG', col('totalAmount')), 'averageSpend'],
            [fn('MIN', col('purchaseDate')), 'firstPurchaseDate'],
            [fn('MAX', col('purchaseDate')), 'lastPurchaseDate'],
        ],
        raw: true,
    });

    const visitCount = Number(stats.visitCount) || 0;
    const totalSpend = Number(stats.totalSpend) || 0;
    const averageSpend = stats.averageSpend ? Number(stats.averageSpend) : 0;

    let visitFrequencyPerMonth = 0;
    if (visitCount > 0 && stats.firstPurchaseDate && stats.lastPurchaseDate) {
        const spanDays = (new Date(stats.lastPurchaseDate) - new Date(stats.firstPurchaseDate)) / (1000 * 60 * 60 * 24);
        const spanMonths = Math.max(spanDays / 30, 1);
        visitFrequencyPerMonth = Number((visitCount / spanMonths).toFixed(2));
    }

    const tier = computeTier(totalSpend);
    customer.totalSpend = totalSpend;
    customer.tier = tier;
    await customer.save();

    res.status(200).json({
        success: true,
        data: {
            customerId: customer.id,
            fullName: customer.fullName,
            visitCount,
            totalSpend,
            averageSpend: Number(averageSpend.toFixed(2)),
            visitFrequencyPerMonth,
            tier,
            firstPurchaseDate: stats.firstPurchaseDate,
            lastPurchaseDate: stats.lastPurchaseDate,
        },
    });
};

export const getVisitPatterns = async (req, res) => {
    const where = {};
    if (req.query.tier) where.tier = req.query.tier;

    const customers = await Customer.findAll({ where });
    const now = new Date();

    let patterns = customers.map((customer) => {
        let status = 'new';
        let daysSinceLastVisit = null;

        if (customer.lastVisitAt) {
            daysSinceLastVisit = Math.floor((now - new Date(customer.lastVisitAt)) / (1000 * 60 * 60 * 24));
            if (daysSinceLastVisit <= 30) status = 'active';
            else if (daysSinceLastVisit <= 90) status = 'at_risk';
            else status = 'churned';
        }

        return {
            customerId: customer.id,
            fullName: customer.fullName,
            tier: customer.tier,
            lastVisitAt: customer.lastVisitAt,
            daysSinceLastVisit,
            status,
        };
    });

    if (req.query.riskOnly === 'true') {
        patterns = patterns.filter((p) => p.status === 'at_risk' || p.status === 'churned');
    }

    res.status(200).json({ success: true, count: patterns.length, data: patterns });
};
