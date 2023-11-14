// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var common_pb = require('./common_pb.js');
var auth_pb = require('./auth_pb.js');
var user$auth_pb = require('./user-auth_pb.js');

function serialize_auth_AnonymousDto(arg) {
  if (!(arg instanceof auth_pb.AnonymousDto)) {
    throw new Error('Expected argument of type auth.AnonymousDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AnonymousDto(buffer_arg) {
  return auth_pb.AnonymousDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_AuthResultDto(arg) {
  if (!(arg instanceof auth_pb.AuthResultDto)) {
    throw new Error('Expected argument of type auth.AuthResultDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_AuthResultDto(buffer_arg) {
  return auth_pb.AuthResultDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_Subject(arg) {
  if (!(arg instanceof auth_pb.Subject)) {
    throw new Error('Expected argument of type auth.Subject');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_Subject(buffer_arg) {
  return auth_pb.Subject.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_auth_ValidateTokenDto(arg) {
  if (!(arg instanceof auth_pb.ValidateTokenDto)) {
    throw new Error('Expected argument of type auth.ValidateTokenDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_auth_ValidateTokenDto(buffer_arg) {
  return auth_pb.ValidateTokenDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_Health(arg) {
  if (!(arg instanceof common_pb.Health)) {
    throw new Error('Expected argument of type common.Health');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_Health(buffer_arg) {
  return common_pb.Health.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_TokenDto(arg) {
  if (!(arg instanceof common_pb.TokenDto)) {
    throw new Error('Expected argument of type common.TokenDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_TokenDto(buffer_arg) {
  return common_pb.TokenDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_BoolValue(arg) {
  if (!(arg instanceof google_protobuf_wrappers_pb.BoolValue)) {
    throw new Error('Expected argument of type google.protobuf.BoolValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_BoolValue(buffer_arg) {
  return google_protobuf_wrappers_pb.BoolValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_StringValue(arg) {
  if (!(arg instanceof google_protobuf_wrappers_pb.StringValue)) {
    throw new Error('Expected argument of type google.protobuf.StringValue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_StringValue(buffer_arg) {
  return google_protobuf_wrappers_pb.StringValue.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userAuth_EditPasswordDto(arg) {
  if (!(arg instanceof user$auth_pb.EditPasswordDto)) {
    throw new Error('Expected argument of type userAuth.EditPasswordDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userAuth_EditPasswordDto(buffer_arg) {
  return user$auth_pb.EditPasswordDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userAuth_RegisterDto(arg) {
  if (!(arg instanceof user$auth_pb.RegisterDto)) {
    throw new Error('Expected argument of type userAuth.RegisterDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userAuth_RegisterDto(buffer_arg) {
  return user$auth_pb.RegisterDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userAuth_SendEmailVerificationDto(arg) {
  if (!(arg instanceof user$auth_pb.SendEmailVerificationDto)) {
    throw new Error('Expected argument of type userAuth.SendEmailVerificationDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userAuth_SendEmailVerificationDto(buffer_arg) {
  return user$auth_pb.SendEmailVerificationDto.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_userAuth_UserAuthDto(arg) {
  if (!(arg instanceof user$auth_pb.UserAuthDto)) {
    throw new Error('Expected argument of type userAuth.UserAuthDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_userAuth_UserAuthDto(buffer_arg) {
  return user$auth_pb.UserAuthDto.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthService = exports.AuthService = {
  getHealth: {
    path: '/authSvc.Auth/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: common_pb.Health,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_common_Health,
    responseDeserialize: deserialize_common_Health,
  },
  createCustomerAnonymousToken: {
    path: '/authSvc.Auth/CreateCustomerAnonymousToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AnonymousDto,
    responseType: auth_pb.AuthResultDto,
    requestSerialize: serialize_auth_AnonymousDto,
    requestDeserialize: deserialize_auth_AnonymousDto,
    responseSerialize: serialize_auth_AuthResultDto,
    responseDeserialize: deserialize_auth_AuthResultDto,
  },
  createSellerAnonymousToken: {
    path: '/authSvc.Auth/CreateSellerAnonymousToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AnonymousDto,
    responseType: auth_pb.AuthResultDto,
    requestSerialize: serialize_auth_AnonymousDto,
    requestDeserialize: deserialize_auth_AnonymousDto,
    responseSerialize: serialize_auth_AuthResultDto,
    responseDeserialize: deserialize_auth_AuthResultDto,
  },
  createAdminAnonymousToken: {
    path: '/authSvc.Auth/CreateAdminAnonymousToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.AnonymousDto,
    responseType: auth_pb.AuthResultDto,
    requestSerialize: serialize_auth_AnonymousDto,
    requestDeserialize: deserialize_auth_AnonymousDto,
    responseSerialize: serialize_auth_AuthResultDto,
    responseDeserialize: deserialize_auth_AuthResultDto,
  },
  validateToken: {
    path: '/authSvc.Auth/ValidateToken',
    requestStream: false,
    responseStream: false,
    requestType: auth_pb.ValidateTokenDto,
    responseType: auth_pb.Subject,
    requestSerialize: serialize_auth_ValidateTokenDto,
    requestDeserialize: deserialize_auth_ValidateTokenDto,
    responseSerialize: serialize_auth_Subject,
    responseDeserialize: deserialize_auth_Subject,
  },
  // Customer
registerUserAuth: {
    path: '/authSvc.Auth/RegisterUserAuth',
    requestStream: false,
    responseStream: false,
    requestType: user$auth_pb.RegisterDto,
    responseType: auth_pb.AuthResultDto,
    requestSerialize: serialize_userAuth_RegisterDto,
    requestDeserialize: deserialize_userAuth_RegisterDto,
    responseSerialize: serialize_auth_AuthResultDto,
    responseDeserialize: deserialize_auth_AuthResultDto,
  },
  isUserEmailExists: {
    path: '/authSvc.Auth/IsUserEmailExists',
    requestStream: false,
    responseStream: false,
    requestType: user$auth_pb.UserAuthDto,
    responseType: google_protobuf_wrappers_pb.BoolValue,
    requestSerialize: serialize_userAuth_UserAuthDto,
    requestDeserialize: deserialize_userAuth_UserAuthDto,
    responseSerialize: serialize_google_protobuf_BoolValue,
    responseDeserialize: deserialize_google_protobuf_BoolValue,
  },
  validateUserAccount: {
    path: '/authSvc.Auth/ValidateUserAccount',
    requestStream: false,
    responseStream: false,
    requestType: user$auth_pb.RegisterDto,
    responseType: auth_pb.AuthResultDto,
    requestSerialize: serialize_userAuth_RegisterDto,
    requestDeserialize: deserialize_userAuth_RegisterDto,
    responseSerialize: serialize_auth_AuthResultDto,
    responseDeserialize: deserialize_auth_AuthResultDto,
  },
  emailVerificationRequest: {
    path: '/authSvc.Auth/EmailVerificationRequest',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_wrappers_pb.StringValue,
    responseType: google_protobuf_wrappers_pb.BoolValue,
    requestSerialize: serialize_google_protobuf_StringValue,
    requestDeserialize: deserialize_google_protobuf_StringValue,
    responseSerialize: serialize_google_protobuf_BoolValue,
    responseDeserialize: deserialize_google_protobuf_BoolValue,
  },
  sendUserEmailVerificationMail: {
    path: '/authSvc.Auth/SendUserEmailVerificationMail',
    requestStream: false,
    responseStream: false,
    requestType: user$auth_pb.SendEmailVerificationDto,
    responseType: google_protobuf_wrappers_pb.BoolValue,
    requestSerialize: serialize_userAuth_SendEmailVerificationDto,
    requestDeserialize: deserialize_userAuth_SendEmailVerificationDto,
    responseSerialize: serialize_google_protobuf_BoolValue,
    responseDeserialize: deserialize_google_protobuf_BoolValue,
  },
  validateUserEmailVerification: {
    path: '/authSvc.Auth/ValidateUserEmailVerification',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.TokenDto,
    responseType: google_protobuf_wrappers_pb.BoolValue,
    requestSerialize: serialize_common_TokenDto,
    requestDeserialize: deserialize_common_TokenDto,
    responseSerialize: serialize_google_protobuf_BoolValue,
    responseDeserialize: deserialize_google_protobuf_BoolValue,
  },
  editUserPassword: {
    path: '/authSvc.Auth/EditUserPassword',
    requestStream: false,
    responseStream: false,
    requestType: user$auth_pb.EditPasswordDto,
    responseType: google_protobuf_wrappers_pb.BoolValue,
    requestSerialize: serialize_userAuth_EditPasswordDto,
    requestDeserialize: deserialize_userAuth_EditPasswordDto,
    responseSerialize: serialize_google_protobuf_BoolValue,
    responseDeserialize: deserialize_google_protobuf_BoolValue,
  },
};

exports.AuthClient = grpc.makeGenericClientConstructor(AuthService);
