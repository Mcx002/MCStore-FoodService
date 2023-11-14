// package: privilege
// file: privilege.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_descriptor_pb from "google-protobuf/google/protobuf/descriptor_pb";

export class Privilege extends jspb.Message { 

    hasAnonymousCustomer(): boolean;
    clearAnonymousCustomer(): void;
    getAnonymousCustomer(): string | undefined;
    setAnonymousCustomer(value: string): Privilege;

    hasAnonymousSeller(): boolean;
    clearAnonymousSeller(): void;
    getAnonymousSeller(): string | undefined;
    setAnonymousSeller(value: string): Privilege;

    hasAnonymousAdmin(): boolean;
    clearAnonymousAdmin(): void;
    getAnonymousAdmin(): string | undefined;
    setAnonymousAdmin(value: string): Privilege;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Privilege.AsObject;
    static toObject(includeInstance: boolean, msg: Privilege): Privilege.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Privilege, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Privilege;
    static deserializeBinaryFromReader(message: Privilege, reader: jspb.BinaryReader): Privilege;
}

export namespace Privilege {
    export type AsObject = {
        anonymousCustomer?: string,
        anonymousSeller?: string,
        anonymousAdmin?: string,
    }
}

export const name: jspb.ExtensionFieldInfo<string>;
