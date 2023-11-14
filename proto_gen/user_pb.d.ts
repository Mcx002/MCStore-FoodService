// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as filestore_pb from "./filestore_pb";

export class UserDto extends jspb.Message { 
    getId(): string;
    setId(value: string): UserDto;
    getFirstName(): string;
    setFirstName(value: string): UserDto;
    getLastName(): string;
    setLastName(value: string): UserDto;
    getCreatedAt(): number;
    setCreatedAt(value: number): UserDto;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): UserDto;
    getEmail(): string;
    setEmail(value: string): UserDto;
    getBirthday(): number;
    setBirthday(value: number): UserDto;
    getGender(): UserDto.Gender;
    setGender(value: UserDto.Gender): UserDto;
    getPhone(): string;
    setPhone(value: string): UserDto;
    getAddress(): string;
    setAddress(value: string): UserDto;
    getVersion(): number;
    setVersion(value: number): UserDto;

    hasPhotoProfile(): boolean;
    clearPhotoProfile(): void;
    getPhotoProfile(): filestore_pb.FileDto | undefined;
    setPhotoProfile(value?: filestore_pb.FileDto): UserDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserDto.AsObject;
    static toObject(includeInstance: boolean, msg: UserDto): UserDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserDto;
    static deserializeBinaryFromReader(message: UserDto, reader: jspb.BinaryReader): UserDto;
}

export namespace UserDto {
    export type AsObject = {
        id: string,
        firstName: string,
        lastName: string,
        createdAt: number,
        updatedAt: number,
        email: string,
        birthday: number,
        gender: UserDto.Gender,
        phone: string,
        address: string,
        version: number,
        photoProfile?: filestore_pb.FileDto.AsObject,
    }

    export enum Gender {
    UNKNOWN = 0,
    MALE = 1,
    FEMALE = 2,
    }

}
