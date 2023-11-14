// package: authSvc
// file: auth-svc.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as auth_svc_pb from "./auth-svc_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as common_pb from "./common_pb";
import * as auth_pb from "./auth_pb";
import * as user_auth_pb from "./user-auth_pb";

interface IAuthService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getHealth: IAuthService_IGetHealth;
    createCustomerAnonymousToken: IAuthService_ICreateCustomerAnonymousToken;
    createSellerAnonymousToken: IAuthService_ICreateSellerAnonymousToken;
    createAdminAnonymousToken: IAuthService_ICreateAdminAnonymousToken;
    validateToken: IAuthService_IValidateToken;
    registerUserAuth: IAuthService_IRegisterUserAuth;
    isUserEmailExists: IAuthService_IIsUserEmailExists;
    validateUserAccount: IAuthService_IValidateUserAccount;
    emailVerificationRequest: IAuthService_IEmailVerificationRequest;
    sendUserEmailVerificationMail: IAuthService_ISendUserEmailVerificationMail;
    validateUserEmailVerification: IAuthService_IValidateUserEmailVerification;
    editUserPassword: IAuthService_IEditUserPassword;
}

interface IAuthService_IGetHealth extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, common_pb.Health> {
    path: "/authSvc.Auth/GetHealth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<common_pb.Health>;
    responseDeserialize: grpc.deserialize<common_pb.Health>;
}
interface IAuthService_ICreateCustomerAnonymousToken extends grpc.MethodDefinition<auth_pb.AnonymousDto, auth_pb.AuthResultDto> {
    path: "/authSvc.Auth/CreateCustomerAnonymousToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AnonymousDto>;
    requestDeserialize: grpc.deserialize<auth_pb.AnonymousDto>;
    responseSerialize: grpc.serialize<auth_pb.AuthResultDto>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResultDto>;
}
interface IAuthService_ICreateSellerAnonymousToken extends grpc.MethodDefinition<auth_pb.AnonymousDto, auth_pb.AuthResultDto> {
    path: "/authSvc.Auth/CreateSellerAnonymousToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AnonymousDto>;
    requestDeserialize: grpc.deserialize<auth_pb.AnonymousDto>;
    responseSerialize: grpc.serialize<auth_pb.AuthResultDto>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResultDto>;
}
interface IAuthService_ICreateAdminAnonymousToken extends grpc.MethodDefinition<auth_pb.AnonymousDto, auth_pb.AuthResultDto> {
    path: "/authSvc.Auth/CreateAdminAnonymousToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.AnonymousDto>;
    requestDeserialize: grpc.deserialize<auth_pb.AnonymousDto>;
    responseSerialize: grpc.serialize<auth_pb.AuthResultDto>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResultDto>;
}
interface IAuthService_IValidateToken extends grpc.MethodDefinition<auth_pb.ValidateTokenDto, auth_pb.Subject> {
    path: "/authSvc.Auth/ValidateToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<auth_pb.ValidateTokenDto>;
    requestDeserialize: grpc.deserialize<auth_pb.ValidateTokenDto>;
    responseSerialize: grpc.serialize<auth_pb.Subject>;
    responseDeserialize: grpc.deserialize<auth_pb.Subject>;
}
interface IAuthService_IRegisterUserAuth extends grpc.MethodDefinition<user_auth_pb.RegisterDto, auth_pb.AuthResultDto> {
    path: "/authSvc.Auth/RegisterUserAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_auth_pb.RegisterDto>;
    requestDeserialize: grpc.deserialize<user_auth_pb.RegisterDto>;
    responseSerialize: grpc.serialize<auth_pb.AuthResultDto>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResultDto>;
}
interface IAuthService_IIsUserEmailExists extends grpc.MethodDefinition<user_auth_pb.UserAuthDto, google_protobuf_wrappers_pb.BoolValue> {
    path: "/authSvc.Auth/IsUserEmailExists";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_auth_pb.UserAuthDto>;
    requestDeserialize: grpc.deserialize<user_auth_pb.UserAuthDto>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.BoolValue>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.BoolValue>;
}
interface IAuthService_IValidateUserAccount extends grpc.MethodDefinition<user_auth_pb.RegisterDto, auth_pb.AuthResultDto> {
    path: "/authSvc.Auth/ValidateUserAccount";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_auth_pb.RegisterDto>;
    requestDeserialize: grpc.deserialize<user_auth_pb.RegisterDto>;
    responseSerialize: grpc.serialize<auth_pb.AuthResultDto>;
    responseDeserialize: grpc.deserialize<auth_pb.AuthResultDto>;
}
interface IAuthService_IEmailVerificationRequest extends grpc.MethodDefinition<google_protobuf_wrappers_pb.StringValue, google_protobuf_wrappers_pb.BoolValue> {
    path: "/authSvc.Auth/EmailVerificationRequest";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_wrappers_pb.StringValue>;
    requestDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.StringValue>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.BoolValue>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.BoolValue>;
}
interface IAuthService_ISendUserEmailVerificationMail extends grpc.MethodDefinition<user_auth_pb.SendEmailVerificationDto, google_protobuf_wrappers_pb.BoolValue> {
    path: "/authSvc.Auth/SendUserEmailVerificationMail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_auth_pb.SendEmailVerificationDto>;
    requestDeserialize: grpc.deserialize<user_auth_pb.SendEmailVerificationDto>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.BoolValue>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.BoolValue>;
}
interface IAuthService_IValidateUserEmailVerification extends grpc.MethodDefinition<common_pb.TokenDto, google_protobuf_wrappers_pb.BoolValue> {
    path: "/authSvc.Auth/ValidateUserEmailVerification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_pb.TokenDto>;
    requestDeserialize: grpc.deserialize<common_pb.TokenDto>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.BoolValue>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.BoolValue>;
}
interface IAuthService_IEditUserPassword extends grpc.MethodDefinition<user_auth_pb.EditPasswordDto, google_protobuf_wrappers_pb.BoolValue> {
    path: "/authSvc.Auth/EditUserPassword";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<user_auth_pb.EditPasswordDto>;
    requestDeserialize: grpc.deserialize<user_auth_pb.EditPasswordDto>;
    responseSerialize: grpc.serialize<google_protobuf_wrappers_pb.BoolValue>;
    responseDeserialize: grpc.deserialize<google_protobuf_wrappers_pb.BoolValue>;
}

export const AuthService: IAuthService;

export interface IAuthServer extends grpc.UntypedServiceImplementation {
    getHealth: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, common_pb.Health>;
    createCustomerAnonymousToken: grpc.handleUnaryCall<auth_pb.AnonymousDto, auth_pb.AuthResultDto>;
    createSellerAnonymousToken: grpc.handleUnaryCall<auth_pb.AnonymousDto, auth_pb.AuthResultDto>;
    createAdminAnonymousToken: grpc.handleUnaryCall<auth_pb.AnonymousDto, auth_pb.AuthResultDto>;
    validateToken: grpc.handleUnaryCall<auth_pb.ValidateTokenDto, auth_pb.Subject>;
    registerUserAuth: grpc.handleUnaryCall<user_auth_pb.RegisterDto, auth_pb.AuthResultDto>;
    isUserEmailExists: grpc.handleUnaryCall<user_auth_pb.UserAuthDto, google_protobuf_wrappers_pb.BoolValue>;
    validateUserAccount: grpc.handleUnaryCall<user_auth_pb.RegisterDto, auth_pb.AuthResultDto>;
    emailVerificationRequest: grpc.handleUnaryCall<google_protobuf_wrappers_pb.StringValue, google_protobuf_wrappers_pb.BoolValue>;
    sendUserEmailVerificationMail: grpc.handleUnaryCall<user_auth_pb.SendEmailVerificationDto, google_protobuf_wrappers_pb.BoolValue>;
    validateUserEmailVerification: grpc.handleUnaryCall<common_pb.TokenDto, google_protobuf_wrappers_pb.BoolValue>;
    editUserPassword: grpc.handleUnaryCall<user_auth_pb.EditPasswordDto, google_protobuf_wrappers_pb.BoolValue>;
}

export interface IAuthClient {
    getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    createCustomerAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createCustomerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createCustomerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createSellerAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createSellerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createSellerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createAdminAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createAdminAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    createAdminAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenDto, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    validateToken(request: auth_pb.ValidateTokenDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    registerUserAuth(request: user_auth_pb.RegisterDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    registerUserAuth(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    registerUserAuth(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    isUserEmailExists(request: user_auth_pb.UserAuthDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    isUserEmailExists(request: user_auth_pb.UserAuthDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    isUserEmailExists(request: user_auth_pb.UserAuthDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    validateUserAccount(request: user_auth_pb.RegisterDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    validateUserAccount(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    validateUserAccount(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    validateUserEmailVerification(request: common_pb.TokenDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    validateUserEmailVerification(request: common_pb.TokenDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    validateUserEmailVerification(request: common_pb.TokenDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    editUserPassword(request: user_auth_pb.EditPasswordDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    editUserPassword(request: user_auth_pb.EditPasswordDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    editUserPassword(request: user_auth_pb.EditPasswordDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
}

export class AuthClient extends grpc.Client implements IAuthClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getHealth(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public getHealth(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_pb.Health) => void): grpc.ClientUnaryCall;
    public createCustomerAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createCustomerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createCustomerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createSellerAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createSellerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createSellerAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createAdminAnonymousToken(request: auth_pb.AnonymousDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createAdminAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public createAdminAnonymousToken(request: auth_pb.AnonymousDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenDto, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    public validateToken(request: auth_pb.ValidateTokenDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.Subject) => void): grpc.ClientUnaryCall;
    public registerUserAuth(request: user_auth_pb.RegisterDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public registerUserAuth(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public registerUserAuth(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public isUserEmailExists(request: user_auth_pb.UserAuthDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public isUserEmailExists(request: user_auth_pb.UserAuthDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public isUserEmailExists(request: user_auth_pb.UserAuthDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public validateUserAccount(request: user_auth_pb.RegisterDto, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public validateUserAccount(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public validateUserAccount(request: user_auth_pb.RegisterDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: auth_pb.AuthResultDto) => void): grpc.ClientUnaryCall;
    public emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public emailVerificationRequest(request: google_protobuf_wrappers_pb.StringValue, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public sendUserEmailVerificationMail(request: user_auth_pb.SendEmailVerificationDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public validateUserEmailVerification(request: common_pb.TokenDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public validateUserEmailVerification(request: common_pb.TokenDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public validateUserEmailVerification(request: common_pb.TokenDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public editUserPassword(request: user_auth_pb.EditPasswordDto, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public editUserPassword(request: user_auth_pb.EditPasswordDto, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
    public editUserPassword(request: user_auth_pb.EditPasswordDto, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_wrappers_pb.BoolValue) => void): grpc.ClientUnaryCall;
}
