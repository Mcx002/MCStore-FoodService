// package: filestore
// file: filestore.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class FileDto extends jspb.Message { 
    getId(): string;
    setId(value: string): FileDto;
    getUrl(): string;
    setUrl(value: string): FileDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileDto.AsObject;
    static toObject(includeInstance: boolean, msg: FileDto): FileDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileDto;
    static deserializeBinaryFromReader(message: FileDto, reader: jspb.BinaryReader): FileDto;
}

export namespace FileDto {
    export type AsObject = {
        id: string,
        url: string,
    }
}
