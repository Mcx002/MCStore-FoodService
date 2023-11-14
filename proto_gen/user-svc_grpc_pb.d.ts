// package: userSvc
// file: user-svc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as user_svc_pb from "./user-svc_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_pb from "./common_pb";
import * as user_pb from "./user_pb";

interface IUserService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IUserService_IGetHealth;
    getUser: IUserService_IGetUser;
    createUser: IUserService_ICreateUser;
    updateUser: IUserService_IUpdateUser;
}

interface IUserService_IGetHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, common_pb.Health> {
    path: "/userSvc.User/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<common_pb.Health>;
    responseDeserialize: grpc.deserialize<common_pb.Health>;
}
interface IUserService_IGetUser extends grpc.MethodDefinition<common_pb.PayloadIdString, user_pb.UserDto> {
    path: "/userSvc.User/GetUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.PayloadIdString>;
    requestDeserialize: grpc.deserialize<common_pb.PayloadIdString>;
    responseSerialize: grpc.serialize<user_pb.UserDto>;
    responseDeserialize: grpc.deserialize<user_pb.UserDto>;
}
interface IUserService_ICreateUser extends grpc.MethodDefinition<user_pb.UserDto, user_pb.UserDto> {
    path: "/userSvc.User/CreateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserDto>;
    requestDeserialize: grpc.deserialize<user_pb.UserDto>;
    responseSerialize: grpc.serialize<user_pb.UserDto>;
    responseDeserialize: grpc.deserialize<user_pb.UserDto>;
}
interface IUserService_IUpdateUser extends grpc.MethodDefinition<user_pb.UserDto, user_pb.UserDto> {
    path: "/userSvc.User/UpdateUser";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_pb.UserDto>;
    requestDeserialize: grpc.deserialize<user_pb.UserDto>;
    responseSerialize: grpc.serialize<user_pb.UserDto>;
    responseDeserialize: grpc.deserialize<user_pb.UserDto>;
}

export const UserService: IUserService;

export interface IUserServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, common_pb.Health>;
    getUser: grpc.handleUnaryCall<common_pb.PayloadIdString, user_pb.UserDto>;
    createUser: grpc.handleUnaryCall<user_pb.UserDto, user_pb.UserDto>;
    updateUser: grpc.handleUnaryCall<user_pb.UserDto, user_pb.UserDto>;
}

export interface IUserClient {
    getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getUser(request: common_pb.PayloadIdString, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    getUser(request: common_pb.PayloadIdString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    getUser(request: common_pb.PayloadIdString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.UserDto, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.UserDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    createUser(request: user_pb.UserDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UserDto, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UserDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    updateUser(request: user_pb.UserDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
}

export class UserClient extends grpc.Client implements IUserClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getUser(request: common_pb.PayloadIdString, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public getUser(request: common_pb.PayloadIdString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public getUser(request: common_pb.PayloadIdString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.UserDto, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.UserDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public createUser(request: user_pb.UserDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UserDto, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UserDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
    public updateUser(request: user_pb.UserDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: user_pb.UserDto) => void): grpc.ClientUnaryCall;
}
