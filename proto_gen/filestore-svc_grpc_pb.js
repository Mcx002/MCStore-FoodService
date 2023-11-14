// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var common_pb = require('./common_pb.js');
var filestore_pb = require('./filestore_pb.js');

function serialize_common_Health(arg) {
  if (!(arg instanceof common_pb.Health)) {
    throw new Error('Expected argument of type common.Health');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_common_Health(buffer_arg) {
  return common_pb.Health.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_filestore_FileDto(arg) {
  if (!(arg instanceof filestore_pb.FileDto)) {
    throw new Error('Expected argument of type filestore.FileDto');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_filestore_FileDto(buffer_arg) {
  return filestore_pb.FileDto.deserializeBinary(new Uint8Array(buffer_arg));
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


var FilestoreService = exports.FilestoreService = {
  getHealth: {
    path: '/filestoreSvc.Filestore/GetHealth',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: common_pb.Health,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_common_Health,
    responseDeserialize: deserialize_common_Health,
  },
  getUploadUrl: {
    path: '/filestoreSvc.Filestore/GetUploadUrl',
    requestStream: false,
    responseStream: false,
    requestType: filestore_pb.FileDto,
    responseType: filestore_pb.FileDto,
    requestSerialize: serialize_filestore_FileDto,
    requestDeserialize: deserialize_filestore_FileDto,
    responseSerialize: serialize_filestore_FileDto,
    responseDeserialize: deserialize_filestore_FileDto,
  },
  getImageUrl: {
    path: '/filestoreSvc.Filestore/GetImageUrl',
    requestStream: false,
    responseStream: false,
    requestType: filestore_pb.FileDto,
    responseType: filestore_pb.FileDto,
    requestSerialize: serialize_filestore_FileDto,
    requestDeserialize: deserialize_filestore_FileDto,
    responseSerialize: serialize_filestore_FileDto,
    responseDeserialize: deserialize_filestore_FileDto,
  },
};

exports.FilestoreClient = grpc.makeGenericClientConstructor(FilestoreService);
