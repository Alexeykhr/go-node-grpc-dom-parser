// package: parser
// file: parser.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class HtmlRequest extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): HtmlRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HtmlRequest.AsObject;
    static toObject(includeInstance: boolean, msg: HtmlRequest): HtmlRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HtmlRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HtmlRequest;
    static deserializeBinaryFromReader(message: HtmlRequest, reader: jspb.BinaryReader): HtmlRequest;
}

export namespace HtmlRequest {
    export type AsObject = {
        url: string,
    }
}

export class HtmlResponse extends jspb.Message { 
    getContent(): string;
    setContent(value: string): HtmlResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): HtmlResponse.AsObject;
    static toObject(includeInstance: boolean, msg: HtmlResponse): HtmlResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: HtmlResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): HtmlResponse;
    static deserializeBinaryFromReader(message: HtmlResponse, reader: jspb.BinaryReader): HtmlResponse;
}

export namespace HtmlResponse {
    export type AsObject = {
        content: string,
    }
}

export class ImageRequest extends jspb.Message { 
    getUrl(): string;
    setUrl(value: string): ImageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ImageRequest): ImageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageRequest;
    static deserializeBinaryFromReader(message: ImageRequest, reader: jspb.BinaryReader): ImageRequest;
}

export namespace ImageRequest {
    export type AsObject = {
        url: string,
    }
}

export class ImageResponse extends jspb.Message { 
    getContent(): Uint8Array | string;
    getContent_asU8(): Uint8Array;
    getContent_asB64(): string;
    setContent(value: Uint8Array | string): ImageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ImageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ImageResponse): ImageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ImageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ImageResponse;
    static deserializeBinaryFromReader(message: ImageResponse, reader: jspb.BinaryReader): ImageResponse;
}

export namespace ImageResponse {
    export type AsObject = {
        content: Uint8Array | string,
    }
}
