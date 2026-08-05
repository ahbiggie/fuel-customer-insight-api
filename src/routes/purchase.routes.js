import { Router } from 'express';
import { body } from 'express-validator';
import { createPurchase, getPurchasesByCustomer } from '../controllers/purchase.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
    '/',
    [
        body('customerId').notEmpty().withMessage('customerId is required').isInt().withMessage('customerId must be an integer'),
        body('totalAmount').notEmpty().withMessage('totalAmount is required').isFloat({ gt: 0 }).withMessage('totalAmount must be a positive number'),
        body('fuelVolume').notEmpty().withMessage('fuelVolume is required').isFloat({ gt: 0 }).withMessage('fuelVolume must be a positive number'),
    ],
    validate,
    createPurchase
);

router.get('/customer/:id', getPurchasesByCustomer);

export default router;
