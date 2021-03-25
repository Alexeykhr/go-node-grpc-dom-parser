// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var parser_pb = require('./parser_pb.js');

function serialize_parser_HtmlRequest(arg) {
  if (!(arg instanceof parser_pb.HtmlRequest)) {
    throw new Error('Expected argument of type parser.HtmlRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parser_HtmlRequest(buffer_arg) {
  return parser_pb.HtmlRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parser_HtmlResponse(arg) {
  if (!(arg instanceof parser_pb.HtmlResponse)) {
    throw new Error('Expected argument of type parser.HtmlResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parser_HtmlResponse(buffer_arg) {
  return parser_pb.HtmlResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parser_ImageRequest(arg) {
  if (!(arg instanceof parser_pb.ImageRequest)) {
    throw new Error('Expected argument of type parser.ImageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parser_ImageRequest(buffer_arg) {
  return parser_pb.ImageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_parser_ImageResponse(arg) {
  if (!(arg instanceof parser_pb.ImageResponse)) {
    throw new Error('Expected argument of type parser.ImageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_parser_ImageResponse(buffer_arg) {
  return parser_pb.ImageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ParserSvcService = exports.ParserSvcService = {
  html: {
    path: '/parser.ParserSvc/Html',
    requestStream: false,
    responseStream: false,
    requestType: parser_pb.HtmlRequest,
    responseType: parser_pb.HtmlResponse,
    requestSerialize: serialize_parser_HtmlRequest,
    requestDeserialize: deserialize_parser_HtmlRequest,
    responseSerialize: serialize_parser_HtmlResponse,
    responseDeserialize: deserialize_parser_HtmlResponse,
  },
  image: {
    path: '/parser.ParserSvc/Image',
    requestStream: false,
    responseStream: false,
    requestType: parser_pb.ImageRequest,
    responseType: parser_pb.ImageResponse,
    requestSerialize: serialize_parser_ImageRequest,
    requestDeserialize: deserialize_parser_ImageRequest,
    responseSerialize: serialize_parser_ImageResponse,
    responseDeserialize: deserialize_parser_ImageResponse,
  },
};

exports.ParserSvcClient = grpc.makeGenericClientConstructor(ParserSvcService);
