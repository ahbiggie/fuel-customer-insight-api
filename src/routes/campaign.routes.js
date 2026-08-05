import { Router } from 'express';
import { body } from 'express-validator';
import { createCampaign, getCampaigns } from '../controllers/campaign.controller.js';
import { validate } from '../middlewares/validate.js';

const router = Router();

router.post(
    '/',
    [
        body('name').notEmpty().withMessage('name is required'),
        body('rewardType').notEmpty().withMessage('rewardType is required'),
        body('rewardValue').notEmpty().withMessage('rewardValue is required').isFloat({ gt: 0 }).withMessage('rewardValue must be a positive number'),
        body('startDate').notEmpty().withMessage('startDate is required').isISO8601().withMessage('startDate must be a valid date'),
        body('endDate').notEmpty().withMessage('endDate is required').isISO8601().withMessage('endDate must be a valid date'),
    ],
    validate,
    createCampaign
);

router.get('/', getCampaigns);

export default router;
