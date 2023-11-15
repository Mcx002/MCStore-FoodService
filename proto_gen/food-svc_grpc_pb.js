// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_pb = require('./common_pb.js');
var food_pb = require('./food_pb.js');

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

function serialize_food_FoodDto(arg) {
  if (!(arg instanceof food_pb.FoodDto)) {
    throw new Error('Expected argument of type food.FoodDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_food_FoodDto(buffer_arg) {
  return food_pb.FoodDto.deserializeBinary(new Uint8Array(buffer_arg));
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


var FoodService = exports.FoodService = {
  getHealth: {
    path: '/foodSvc.Food/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: common_pb.Health,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_common_Health,
    responseDeserialize: deserialize_common_Health,
  },
  createFood: {
    path: '/foodSvc.Food/CreateFood',
    requestStream: false,
    responseStream: false,
    requestType: food_pb.FoodDto,
    responseType: food_pb.FoodDto,
    requestSerialize: serialize_food_FoodDto,
    requestDeserialize: deserialize_food_FoodDto,
    responseSerialize: serialize_food_FoodDto,
    responseDeserialize: deserialize_food_FoodDto,
  },
  getFoodById: {
    path: '/foodSvc.Food/GetFoodById',
    requestStream: false,
    responseStream: false,
    requestType: common_pb.PayloadIdString,
    responseType: food_pb.FoodDto,
    requestSerialize: serialize_common_PayloadIdString,
    requestDeserialize: deserialize_common_PayloadIdString,
    responseSerialize: serialize_food_FoodDto,
    responseDeserialize: deserialize_food_FoodDto,
  },
};

exports.FoodClient = grpc.makeGenericClientConstructor(FoodService);
