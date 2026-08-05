import { Router } from 'express';
import { body } from 'express-validator';
import { createCustomer, getCustomers, getCustomerById } from '../controllers/customer.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
    '/',
    [body('fullName').notEmpty().withMessage('fullName is required'), body('phoneNumber').notEmpty().withMessage('phoneNumber is required')],
    validate,
    createCustomer
);

router.get('/', getCustomers);
router.get('/:id', getCustomerById);

export default router;
