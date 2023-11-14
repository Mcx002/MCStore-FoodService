// package: customer
// file: customer.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'

export class CustomerDto extends jspb.Message {
    getXid(): string
    setXid(value: string): CustomerDto
    getFirstname(): string
    setFirstname(value: string): CustomerDto
    getLastname(): string
    setLastname(value: string): CustomerDto
    getPhone(): string
    setPhone(value: string): CustomerDto
    getEmail(): string
    setEmail(value: string): CustomerDto
    getPhoto(): string
    setPhoto(value: string): CustomerDto

    serializeBinary(): Uint8Array
    toObject(includeInstance?: boolean): CustomerDto.AsObject
    static toObject(
        includeInstance: boolean,
        msg: CustomerDto
    ): CustomerDto.AsObject
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
    }
    static serializeBinaryToWriter(
        message: CustomerDto,
        writer: jspb.BinaryWriter
    ): void
    static deserializeBinary(bytes: Uint8Array): CustomerDto
    static deserializeBinaryFromReader(
        message: CustomerDto,
        reader: jspb.BinaryReader
    ): CustomerDto
}

export namespace CustomerDto {
    export type AsObject = {
        xid: string
        firstname: string
        lastname: string
        phone: string
        email: string
        photo: string
    }
}
