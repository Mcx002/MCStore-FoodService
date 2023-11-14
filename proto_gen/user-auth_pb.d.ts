// package: userAuth
// file: user-auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as auth_pb from "./auth_pb";

export class UserAuthDto extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): UserAuthDto;
    getCreatedAt(): number;
    setCreatedAt(value: number): UserAuthDto;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): UserAuthDto;
    getVersion(): number;
    setVersion(value: number): UserAuthDto;
    getPassword(): string;
    setPassword(value: string): UserAuthDto;
    getUserId(): string;
    setUserId(value: string): UserAuthDto;
    getSubjectType(): auth_pb.SubjectType;
    setSubjectType(value: auth_pb.SubjectType): UserAuthDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserAuthDto.AsObject;
    static toObject(includeInstance: boolean, msg: UserAuthDto): UserAuthDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserAuthDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserAuthDto;
    static deserializeBinaryFromReader(message: UserAuthDto, reader: jspb.BinaryReader): UserAuthDto;
}

export namespace UserAuthDto {
    export type AsObject = {
        email: string,
        createdAt: number,
        updatedAt: number,
        version: number,
        password: string,
        userId: string,
        subjectType: auth_pb.SubjectType,
    }
}

export class RegisterDto extends jspb.Message { 

    hasUserAuth(): boolean;
    clearUserAuth(): void;
    getUserAuth(): UserAuthDto | undefined;
    setUserAuth(value?: UserAuthDto): RegisterDto;

    hasSubject(): boolean;
    clearSubject(): void;
    getSubject(): auth_pb.Subject | undefined;
    setSubject(value?: auth_pb.Subject): RegisterDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterDto.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterDto): RegisterDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterDto;
    static deserializeBinaryFromReader(message: RegisterDto, reader: jspb.BinaryReader): RegisterDto;
}

export namespace RegisterDto {
    export type AsObject = {
        userAuth?: UserAuthDto.AsObject,
        subject?: auth_pb.Subject.AsObject,
    }
}

export class SendEmailVerificationDto extends jspb.Message { 
    getDeviceid(): string;
    setDeviceid(value: string): SendEmailVerificationDto;
    getEmail(): string;
    setEmail(value: string): SendEmailVerificationDto;
    getSubjectType(): auth_pb.SubjectType;
    setSubjectType(value: auth_pb.SubjectType): SendEmailVerificationDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendEmailVerificationDto.AsObject;
    static toObject(includeInstance: boolean, msg: SendEmailVerificationDto): SendEmailVerificationDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendEmailVerificationDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendEmailVerificationDto;
    static deserializeBinaryFromReader(message: SendEmailVerificationDto, reader: jspb.BinaryReader): SendEmailVerificationDto;
}

export namespace SendEmailVerificationDto {
    export type AsObject = {
        deviceid: string,
        email: string,
        subjectType: auth_pb.SubjectType,
    }
}

export class EditPasswordDto extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): EditPasswordDto;
    getOldPassword(): string;
    setOldPassword(value: string): EditPasswordDto;
    getNewPassword(): string;
    setNewPassword(value: string): EditPasswordDto;
    getSubjectType(): auth_pb.SubjectType;
    setSubjectType(value: auth_pb.SubjectType): EditPasswordDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EditPasswordDto.AsObject;
    static toObject(includeInstance: boolean, msg: EditPasswordDto): EditPasswordDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: EditPasswordDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EditPasswordDto;
    static deserializeBinaryFromReader(message: EditPasswordDto, reader: jspb.BinaryReader): EditPasswordDto;
}

export namespace EditPasswordDto {
    export type AsObject = {
        email: string,
        oldPassword: string,
        newPassword: string,
        subjectType: auth_pb.SubjectType,
    }
}
