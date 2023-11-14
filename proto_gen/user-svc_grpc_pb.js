// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_pb = require('./common_pb.js');
var user_pb = require('./user_pb.js');

function serialize_common_Health(arg) {
  if (!(arg instanceof common_pb.Health)) {
    throw new Error('Expected argument of type common.Health');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_Health(buffer_arg) {
  return common_pb.Health.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_common_PayloadIdString(arg) {
  if (!(arg instanceof common_pb.PayloadIdString)) {
    throw new Error('Expected argument of type common.PayloadIdString');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_PayloadIdString(buffer_arg) {
  return common_pb.PayloadIdString.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_user_UserDto(arg) {
  if (!(arg instanceof user_pb.UserDto)) {
    throw new Error('Expected argument of type user.UserDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_user_UserDto(buffer_arg) {
  return user_pb.UserDto.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserService = exports.UserService = {
  getHealth: {
    path: '/userSvc.User/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: common_pb.Health,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_common_Health,
    responseDeserialize: deserialize_common_Health,
  },
  getUser: {
    path: '/userSvc.User/GetUser',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PayloadIdString,
    responseType: user_pb.UserDto,
    requestSerialize: serialize_common_PayloadIdString,
    requestDeserialize: deserialize_common_PayloadIdString,
    responseSerialize: serialize_user_UserDto,
    responseDeserialize: deserialize_user_UserDto,
  },
  createUser: {
    path: '/userSvc.User/CreateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserDto,
    responseType: user_pb.UserDto,
    requestSerialize: serialize_user_UserDto,
    requestDeserialize: deserialize_user_UserDto,
    responseSerialize: serialize_user_UserDto,
    responseDeserialize: deserialize_user_UserDto,
  },
  updateUser: {
    path: '/userSvc.User/UpdateUser',
    requestStream: false,
    responseStream: false,
    requestType: user_pb.UserDto,
    responseType: user_pb.UserDto,
    requestSerialize: serialize_user_UserDto,
    requestDeserialize: deserialize_user_UserDto,
    responseSerialize: serialize_user_UserDto,
    responseDeserialize: deserialize_user_UserDto,
  },
};

exports.UserClient = grpc.makeGenericClientConstructor(UserService);
