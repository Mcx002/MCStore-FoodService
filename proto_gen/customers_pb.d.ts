// package: customers
// file: customers.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from 'google-protobuf'
import * as common_pb from './common_pb'

export class Customer extends jspb.Message {
    getId(): number
    setId(value: number): Customer
    getFirstname(): string
    setFirstname(value: string): Customer
    getLastname(): string
    setLastname(value: string): Customer
    getEmail(): string
    setEmail(value: string): Customer
    getBirthday(): number
    setBirthday(value: number): Customer
    getGender(): common_pb.Gender
    setGender(value: common_pb.Gender): Customer
    getPhone(): string
    setPhone(value: string): Customer
    getAddress(): string
    setAddress(value: string): Customer
    getCreatedat(): number
    setCreatedat(value: number): Customer
    getUpdatedat(): number
    setUpdatedat(value: number): Customer
    getVersion(): number
    setVersion(value: number): Customer

    serializeBinary(): Uint8Array
    toObject(includeInstance?: boolean): Customer.AsObject
    static toObject(includeInstance: boolean, msg: Customer): Customer.AsObject
    static extensions: { [key: number]: jspb.ExtensionFieldInfo<jspb.Message> }
    static extensionsBinary: {
        [key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>
    }
    static serializeBinaryToWriter(
        message: Customer,
        writer: jspb.BinaryWriter
    ): void
    static deserializeBinary(bytes: Uint8Array): Customer
    static deserializeBinaryFromReader(
        message: Customer,
        reader: jspb.BinaryReader
    ): Customer
}

export namespace Customer {
    export type AsObject = {
        id: number
        firstname: string
        lastname: string
        email: string
        birthday: number
        gender: common_pb.Gender
        phone: string
        address: string
        createdat: number
        updatedat: number
        version: number
    }
}

export enum EmailStatus {
    UNKNOWN = 0,
    VERIFIED = 1,
    UNVERIFIED = 2,
}
