import { Campaign } from '../models/index.js';

export const createCampaign = async (req, res) => {
    const { startDate, endDate } = req.body;

    if (new Date(endDate) < new Date(startDate)) {
        return res.status(400).json({ success: false, message: 'endDate cannot be before startDate' });
    }

    const campaign = await Campaign.create(req.body);
    res.status(201).json({ success: true, data: campaign });
};

export const getCampaigns = async (req, res) => {
    const where = {};
    if (req.query.isActive !== undefined) {
        where.isActive = req.query.isActive === 'true';
    }

    const campaigns = await Campaign.findAll({ where, order: [['startDate', 'DESC']] });
    res.status(200).json({ success: true, count: campaigns.length, data: campaigns });
};
