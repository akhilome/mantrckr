import express from 'express';
import userRequests from '../data/index';

const router = express.Router();

// Get all requests
router.get('/requests', (req, res) => {
  res.status(200).json({ userRequests });
});


export default router;
