import express from 'express';
import userRequests from '../data/index';
import Request from '../models/request';

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

// Create a new request
router.post('/requests', (req, res) => {
  const { requestTitle, requestDetails } = req.body;
  if (!requestTitle || !requestDetails) return res.status(400).json({ message: 'Please fill out all fields' });
  const requestId = userRequests.length + 1;
  const newRquest = new Request(requestId, requestTitle, requestDetails);

  userRequests.push(newRquest);

  return res.status(201).json({ newRquest });
});

// Modify an existing Request
router.put('/requests/:requestId', (req, res) => {
  let reqId = req.params.requestId;
  const { requestTitle, requestDetails } = req.body;

  reqId = Number(reqId);
  if (Number.isNaN(reqId)) return res.status(400).json({ message: 'Request ID must be a number' });

  const result = userRequests.find(request => request.requestId === reqId);

  if (!result) return res.status(404).json({ message: 'No request with that Id exists' });

  result.requestTitle = requestTitle;
  result.requestDetails = requestDetails;
  return res.status(200).json({
    message: 'Request Modified Successfully',
    result,
  });
});

export default router;
