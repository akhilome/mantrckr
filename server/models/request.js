// Request Generator

class Request {
  constructor(requestId, requestTitle, requestDetails) {
    this.requestId = requestId;
    this.requestTitle = requestTitle;
    this.requestDetails = requestDetails;
    this.status = 'pending';
  }
}

export default Request;
