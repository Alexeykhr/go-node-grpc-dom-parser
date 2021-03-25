'use strict';

const grpc = require('grpc');
const parserGrpc = require('./service/proto/parser_grpc_pb');
const Parser = require('./service/parser');

const api = new Parser(grpc);

const server = new grpc.Server();
server.addService(parserGrpc.ParserSvcService, {
  html: api.html,
});

const address = '0.0.0.0:8080';
server.bindAsync(address, grpc.ServerCredentials.createInsecure(), () => {
  server.start();
  console.log(`Server running at ${address}`);
});
