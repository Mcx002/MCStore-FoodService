// package: filestoreSvc
// file: filestore-svc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as filestore_svc_pb from "./filestore-svc_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_pb from "./common_pb";
import * as filestore_pb from "./filestore_pb";

interface IFilestoreService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IFilestoreService_IGetHealth;
    getUploadUrl: IFilestoreService_IGetUploadUrl;
    getImageUrl: IFilestoreService_IGetImageUrl;
}

interface IFilestoreService_IGetHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, common_pb.Health> {
    path: "/filestoreSvc.Filestore/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<common_pb.Health>;
    responseDeserialize: grpc.deserialize<common_pb.Health>;
}
interface IFilestoreService_IGetUploadUrl extends grpc.MethodDefinition<filestore_pb.FileDto, filestore_pb.FileDto> {
    path: "/filestoreSvc.Filestore/GetUploadUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<filestore_pb.FileDto>;
    requestDeserialize: grpc.deserialize<filestore_pb.FileDto>;
    responseSerialize: grpc.serialize<filestore_pb.FileDto>;
    responseDeserialize: grpc.deserialize<filestore_pb.FileDto>;
}
interface IFilestoreService_IGetImageUrl extends grpc.MethodDefinition<filestore_pb.FileDto, filestore_pb.FileDto> {
    path: "/filestoreSvc.Filestore/GetImageUrl";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<filestore_pb.FileDto>;
    requestDeserialize: grpc.deserialize<filestore_pb.FileDto>;
    responseSerialize: grpc.serialize<filestore_pb.FileDto>;
    responseDeserialize: grpc.deserialize<filestore_pb.FileDto>;
}

export const FilestoreService: IFilestoreService;

export interface IFilestoreServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, common_pb.Health>;
    getUploadUrl: grpc.handleUnaryCall<filestore_pb.FileDto, filestore_pb.FileDto>;
    getImageUrl: grpc.handleUnaryCall<filestore_pb.FileDto, filestore_pb.FileDto>;
}

export interface IFilestoreClient {
    getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getUploadUrl(request: filestore_pb.FileDto, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    getUploadUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    getUploadUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    getImageUrl(request: filestore_pb.FileDto, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    getImageUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    getImageUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
}

export class FilestoreClient extends grpc.Client implements IFilestoreClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getUploadUrl(request: filestore_pb.FileDto, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    public getUploadUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    public getUploadUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    public getImageUrl(request: filestore_pb.FileDto, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    public getImageUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
    public getImageUrl(request: filestore_pb.FileDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: filestore_pb.FileDto) => void): grpc.ClientUnaryCall;
}
