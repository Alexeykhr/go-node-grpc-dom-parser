// package: parser
// file: parser.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as parser_pb from "./parser_pb";

interface IParserSvcService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    html: IParserSvcService_IHtml;
    image: IParserSvcService_IImage;
}

interface IParserSvcService_IHtml extends grpc.MethodDefinition<parser_pb.HtmlRequest, parser_pb.HtmlResponse> {
    path: "/parser.ParserSvc/Html";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<parser_pb.HtmlRequest>;
    requestDeserialize: grpc.deserialize<parser_pb.HtmlRequest>;
    responseSerialize: grpc.serialize<parser_pb.HtmlResponse>;
    responseDeserialize: grpc.deserialize<parser_pb.HtmlResponse>;
}
interface IParserSvcService_IImage extends grpc.MethodDefinition<parser_pb.ImageRequest, parser_pb.ImageResponse> {
    path: "/parser.ParserSvc/Image";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<parser_pb.ImageRequest>;
    requestDeserialize: grpc.deserialize<parser_pb.ImageRequest>;
    responseSerialize: grpc.serialize<parser_pb.ImageResponse>;
    responseDeserialize: grpc.deserialize<parser_pb.ImageResponse>;
}

export const ParserSvcService: IParserSvcService;

export interface IParserSvcServer {
    html: grpc.handleUnaryCall<parser_pb.HtmlRequest, parser_pb.HtmlResponse>;
    image: grpc.handleUnaryCall<parser_pb.ImageRequest, parser_pb.ImageResponse>;
}

export interface IParserSvcClient {
    html(request: parser_pb.HtmlRequest, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    html(request: parser_pb.HtmlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    html(request: parser_pb.HtmlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    image(request: parser_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
    image(request: parser_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
    image(request: parser_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
}

export class ParserSvcClient extends grpc.Client implements IParserSvcClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public html(request: parser_pb.HtmlRequest, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    public html(request: parser_pb.HtmlRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    public html(request: parser_pb.HtmlRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parser_pb.HtmlResponse) => void): grpc.ClientUnaryCall;
    public image(request: parser_pb.ImageRequest, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
    public image(request: parser_pb.ImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
    public image(request: parser_pb.ImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: parser_pb.ImageResponse) => void): grpc.ClientUnaryCall;
}
