import { Customer, Purchase } from '../models/index.js';
import { sendSMS } from '../utils/termii.js';

const computeTier = (totalSpend) => {
    if (totalSpend >= 100000) return 'gold';
    if (totalSpend >= 30000) return 'silver';
    return 'bronze';
};

export const createPurchase = async (req, res) => {
    const customer = await Customer.findByPk(req.body.customerId);
    if (!customer) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    const purchase = await Purchase.create(req.body);

    const newTotalSpend = Number(customer.totalSpend) + Number(purchase.totalAmount);
    customer.totalSpend = newTotalSpend;
    customer.tier = computeTier(newTotalSpend);
    customer.lastVisitAt = purchase.purchaseDate;
    await customer.save();

    try {
        await sendSMS(
            customer.phoneNumber,
            `Hi ${customer.fullName}, thank you for your purchase of ${purchase.fuelVolume}L ${purchase.productType}. Amount: NGN ${purchase.totalAmount}. Visit us again!`
        );
    } catch (err) {
        console.error('Failed to send receipt SMS:', err.message);
    }

    res.status(201).json({ success: true, data: purchase });
};

export const getPurchasesByCustomer = async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
    }

    const purchases = await Purchase.findAll({
        where: { customerId: req.params.id },
        order: [['purchaseDate', 'DESC']],
    });

    res.status(200).json({ success: true, count: purchases.length, data: purchases });
};
