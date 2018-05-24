import express from 'express';
import RequestController from '../controllers/index';

const router = express.Router();

// Get all requests
router.get('/requests', RequestController.getRequests);

// Get single request
router.get('/requests/:requestId', RequestController.getARequest);

// Create a new request
router.post('/requests', RequestController.createRequest);

// Modify an existing Request
router.put('/requests/:requestId', RequestController.modifyRequest);

export default router;
