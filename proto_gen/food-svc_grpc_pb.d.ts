// package: foodSvc
// file: food-svc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as food_svc_pb from "./food-svc_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as common_pb from "./common_pb";
import * as food_pb from "./food_pb";

interface IFoodService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IFoodService_IGetHealth;
    createFood: IFoodService_ICreateFood;
    getFoodById: IFoodService_IGetFoodById;
    listFood: IFoodService_IListFood;
}

interface IFoodService_IGetHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, common_pb.Health> {
    path: "/foodSvc.Food/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<common_pb.Health>;
    responseDeserialize: grpc.deserialize<common_pb.Health>;
}
interface IFoodService_ICreateFood extends grpc.MethodDefinition<food_pb.FoodDto, food_pb.FoodDto> {
    path: "/foodSvc.Food/CreateFood";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<food_pb.FoodDto>;
    requestDeserialize: grpc.deserialize<food_pb.FoodDto>;
    responseSerialize: grpc.serialize<food_pb.FoodDto>;
    responseDeserialize: grpc.deserialize<food_pb.FoodDto>;
}
interface IFoodService_IGetFoodById extends grpc.MethodDefinition<common_pb.PayloadIdString, food_pb.FoodDto> {
    path: "/foodSvc.Food/GetFoodById";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.PayloadIdString>;
    requestDeserialize: grpc.deserialize<common_pb.PayloadIdString>;
    responseSerialize: grpc.serialize<food_pb.FoodDto>;
    responseDeserialize: grpc.deserialize<food_pb.FoodDto>;
}
interface IFoodService_IListFood extends grpc.MethodDefinition<common_pb.ListOptions, food_pb.ListFoodDto> {
    path: "/foodSvc.Food/ListFood";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.ListOptions>;
    requestDeserialize: grpc.deserialize<common_pb.ListOptions>;
    responseSerialize: grpc.serialize<food_pb.ListFoodDto>;
    responseDeserialize: grpc.deserialize<food_pb.ListFoodDto>;
}

export const FoodService: IFoodService;

export interface IFoodServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, common_pb.Health>;
    createFood: grpc.handleUnaryCall<food_pb.FoodDto, food_pb.FoodDto>;
    getFoodById: grpc.handleUnaryCall<common_pb.PayloadIdString, food_pb.FoodDto>;
    listFood: grpc.handleUnaryCall<common_pb.ListOptions, food_pb.ListFoodDto>;
}

export interface IFoodClient {
    getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    createFood(request: food_pb.FoodDto, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    createFood(request: food_pb.FoodDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    createFood(request: food_pb.FoodDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    getFoodById(request: common_pb.PayloadIdString, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    getFoodById(request: common_pb.PayloadIdString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    getFoodById(request: common_pb.PayloadIdString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    listFood(request: common_pb.ListOptions, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
    listFood(request: common_pb.ListOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
    listFood(request: common_pb.ListOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
}

export class FoodClient extends grpc.Client implements IFoodClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public createFood(request: food_pb.FoodDto, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public createFood(request: food_pb.FoodDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public createFood(request: food_pb.FoodDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public getFoodById(request: common_pb.PayloadIdString, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public getFoodById(request: common_pb.PayloadIdString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public getFoodById(request: common_pb.PayloadIdString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.FoodDto) => void): grpc.ClientUnaryCall;
    public listFood(request: common_pb.ListOptions, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
    public listFood(request: common_pb.ListOptions, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
    public listFood(request: common_pb.ListOptions, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: food_pb.ListFoodDto) => void): grpc.ClientUnaryCall;
}
