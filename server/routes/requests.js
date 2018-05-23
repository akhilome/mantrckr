import express from 'express';
import userRequests from '../data/index';

const router = express.Router();

// Get all requests
router.get('/requests', (req, res) => {
  res.status(200).json({ userRequests });
});

// Get single request
router.get('/requests/:requestId', (req, res) => {
  let reqId = req.params.requestId;
  reqId = Number(reqId);
  if (Number.isNaN(reqId)) {
    return res.status(400).json({ message: 'Request ID must be a number' });
  }
  const result = userRequests.find(request => request.requestId === reqId);

  if (!result) {
    return res.status(404).json({ message: 'No request with that Id exists' });
  }
  return res.status(200).json({ result });
});

export default router;
