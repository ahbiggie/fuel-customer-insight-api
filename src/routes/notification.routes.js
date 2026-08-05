import { Router } from 'express';
import { body } from 'express-validator';
import { sendSmsNotification } from '../controllers/notification.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
    '/sms',
    [body('phoneNumber').notEmpty().withMessage('phoneNumber is required'), body('message').notEmpty().withMessage('message is required')],
    validate,
    sendSmsNotification
);

export default router;
