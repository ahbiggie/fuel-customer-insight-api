import { Router } from 'express';
import customerRoutes from './customer.routes.js';
import purchaseRoutes from './purchase.routes.js';
import analyticsRoutes from './analytics.routes.js';
import campaignRoutes from './campaign.routes.js';
import notificationRoutes from './notification.routes.js';

const router = Router();

router.use('/customers', customerRoutes);
router.use('/purchases', purchaseRoutes);
router.use('/analytics', analyticsRoutes);
router.use('/campaigns', campaignRoutes);
router.use('/notifications', notificationRoutes);

export default router;
