import { Customer } from '../models/index.js';

export const createCustomer = async (req, res) => {
    const customer = await Customer.create(req.body);
    res.status(201).json({ success: true, data: customer });
};

export const getCustomers = async (req, res) => {
    const where = {};
    if (req.query.tier) where.tier = req.query.tier;

    const customers = await Customer.findAll({ where, order: [['createdAt', 'DESC']] });
    res.status(200).json({ success: true, count: customers.length, data: customers });
};

export const getCustomerById = async (req, res) => {
    const customer = await Customer.findByPk(req.params.id);
    if (!customer) {
        return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.status(200).json({ success: true, data: customer });
};
