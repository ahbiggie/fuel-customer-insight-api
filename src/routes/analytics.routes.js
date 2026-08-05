import { Router } from 'express';
import { getCustomerValue, getVisitPatterns } from '../controllers/analytics.controller.js';

const router = Router();

router.get('/customer-value/:id', getCustomerValue);
router.get('/visit-patterns', getVisitPatterns);

export default router;
