import userRequests from '../data/index';
import Request from '../models/request';

/**
 * @class RequestController
 */
class RequestController {
  static getRequests(req, res) {
    res.status(200).json({ userRequests });
  }

  static getARequest(req, res) {
    let reqId = req.params.requestId;
    reqId = Number(reqId);
    if (Number.isNaN(reqId)) return res.status(400).json({ message: 'Request ID must be a number' });

    const result = userRequests.find(request => request.requestId === reqId);

    if (!result) return res.status(404).json({ message: 'No request with that Id exists' });
    return res.status(200).json({ result });
  }

  static createRequest(req, res) {
    const { requestTitle, requestDetails } = req.body;
    if (!requestTitle || !requestDetails) return res.status(400).json({ message: 'Please fill out all fields' });
    const requestId = userRequests.length + 1;
    const newRequest = new Request(requestId, requestTitle, requestDetails);

    userRequests.push(newRequest);

    return res.status(201).json({ newRequest });
  }

  static modifyRequest(req, res) {
    const { requestTitle, requestDetails } = req.body;

    let reqId = req.params.requestId;
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
  }
}

export default RequestController;
