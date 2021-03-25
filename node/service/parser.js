const messages = require('./proto/parser_pb');

module.exports = class Parser {
  constructor(grpc) {
    this.grpc = grpc;
  }

  html = (call, callback) => {
    const resp = new messages.HtmlResponse();
    const url = call.request.getUrl();

    resp.setContent(url);
    callback(null, resp);
  };
};
