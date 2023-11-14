// package: auth
// file: auth.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Subject extends jspb.Message { 
    getXid(): string;
    setXid(value: string): Subject;
    getName(): string;
    setName(value: string): Subject;
    getPhotoProfile(): string;
    setPhotoProfile(value: string): Subject;
    getSubjectType(): SubjectType;
    setSubjectType(value: SubjectType): Subject;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subject.AsObject;
    static toObject(includeInstance: boolean, msg: Subject): Subject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subject;
    static deserializeBinaryFromReader(message: Subject, reader: jspb.BinaryReader): Subject;
}

export namespace Subject {
    export type AsObject = {
        xid: string,
        name: string,
        photoProfile: string,
        subjectType: SubjectType,
    }
}

export class AnonymousDto extends jspb.Message { 
    getXid(): string;
    setXid(value: string): AnonymousDto;
    getUsername(): string;
    setUsername(value: string): AnonymousDto;
    getPassword(): string;
    setPassword(value: string): AnonymousDto;
    getLevel(): AnonymousDto.AnonymousLevel;
    setLevel(value: AnonymousDto.AnonymousLevel): AnonymousDto;
    getCreatedat(): number;
    setCreatedat(value: number): AnonymousDto;
    getUpdatedat(): number;
    setUpdatedat(value: number): AnonymousDto;
    getVersion(): number;
    setVersion(value: number): AnonymousDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AnonymousDto.AsObject;
    static toObject(includeInstance: boolean, msg: AnonymousDto): AnonymousDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AnonymousDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AnonymousDto;
    static deserializeBinaryFromReader(message: AnonymousDto, reader: jspb.BinaryReader): AnonymousDto;
}

export namespace AnonymousDto {
    export type AsObject = {
        xid: string,
        username: string,
        password: string,
        level: AnonymousDto.AnonymousLevel,
        createdat: number,
        updatedat: number,
        version: number,
    }

    export enum AnonymousLevel {
    UNKNOWN = 0,
    CUSTOMER = 1,
    SELLER = 2,
    ADMIN = 3,
    }

}

export class AuthResultDto extends jspb.Message { 
    getToken(): string;
    setToken(value: string): AuthResultDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuthResultDto.AsObject;
    static toObject(includeInstance: boolean, msg: AuthResultDto): AuthResultDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AuthResultDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuthResultDto;
    static deserializeBinaryFromReader(message: AuthResultDto, reader: jspb.BinaryReader): AuthResultDto;
}

export namespace AuthResultDto {
    export type AsObject = {
        token: string,
    }
}

export class ValidateTokenDto extends jspb.Message { 
    getToken(): string;
    setToken(value: string): ValidateTokenDto;
    clearAudienceList(): void;
    getAudienceList(): Array<string>;
    setAudienceList(value: Array<string>): ValidateTokenDto;
    addAudience(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidateTokenDto.AsObject;
    static toObject(includeInstance: boolean, msg: ValidateTokenDto): ValidateTokenDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ValidateTokenDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidateTokenDto;
    static deserializeBinaryFromReader(message: ValidateTokenDto, reader: jspb.BinaryReader): ValidateTokenDto;
}

export namespace ValidateTokenDto {
    export type AsObject = {
        token: string,
        audienceList: Array<string>,
    }
}

export enum SubjectType {
    UNKNOWN = 0,
    CUSTOMER = 1,
    SELLER = 2,
    ADMIN = 3,
    ANON_CUSTOMER = 4,
    ANON_SELLER = 5,
    ANON_ADMIN = 6,
}
