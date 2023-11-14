// source: food.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() {
  if (this) { return this; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  if (typeof self !== 'undefined') { return self; }
  return Function('return this')();
}.call(null));

goog.exportSymbol('proto.food.FoodDto', null, global);
goog.exportSymbol('proto.food.FoodDto.Detail', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.food.FoodDto = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.food.FoodDto.repeatedFields_, null);
};
goog.inherits(proto.food.FoodDto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.food.FoodDto.displayName = 'proto.food.FoodDto';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.food.FoodDto.Detail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.food.FoodDto.Detail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.food.FoodDto.Detail.displayName = 'proto.food.FoodDto.Detail';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.food.FoodDto.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.food.FoodDto.prototype.toObject = function(opt_includeInstance) {
  return proto.food.FoodDto.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.food.FoodDto} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.food.FoodDto.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    imagesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    price: jspb.Message.getFieldWithDefault(msg, 4, 0),
    qty: jspb.Message.getFieldWithDefault(msg, 5, 0),
    detail: (f = msg.getDetail()) && proto.food.FoodDto.Detail.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.food.FoodDto}
 */
proto.food.FoodDto.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.food.FoodDto;
  return proto.food.FoodDto.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.food.FoodDto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.food.FoodDto}
 */
proto.food.FoodDto.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addImages(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setQty(value);
      break;
    case 6:
      var value = new proto.food.FoodDto.Detail;
      reader.readMessage(value,proto.food.FoodDto.Detail.deserializeBinaryFromReader);
      msg.setDetail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.food.FoodDto.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.food.FoodDto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.food.FoodDto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.food.FoodDto.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getImagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getQty();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getDetail();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.food.FoodDto.Detail.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.food.FoodDto.Detail.prototype.toObject = function(opt_includeInstance) {
  return proto.food.FoodDto.Detail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.food.FoodDto.Detail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.food.FoodDto.Detail.toObject = function(includeInstance, msg) {
  var f, obj = {
    calories: jspb.Message.getFieldWithDefault(msg, 1, 0),
    vitaminMap: (f = msg.getVitaminMap()) ? f.toObject(includeInstance, undefined) : [],
    sugar: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.food.FoodDto.Detail}
 */
proto.food.FoodDto.Detail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.food.FoodDto.Detail;
  return proto.food.FoodDto.Detail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.food.FoodDto.Detail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.food.FoodDto.Detail}
 */
proto.food.FoodDto.Detail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCalories(value);
      break;
    case 2:
      var value = msg.getVitaminMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readInt32, null, "", 0);
         });
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setSugar(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.food.FoodDto.Detail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.food.FoodDto.Detail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.food.FoodDto.Detail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.food.FoodDto.Detail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCalories();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getVitaminMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeInt32);
  }
  f = message.getSugar();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
};


/**
 * optional int32 calories = 1;
 * @return {number}
 */
proto.food.FoodDto.Detail.prototype.getCalories = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.food.FoodDto.Detail} returns this
 */
proto.food.FoodDto.Detail.prototype.setCalories = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * map<string, int32> vitamin = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,number>}
 */
proto.food.FoodDto.Detail.prototype.getVitaminMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,number>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.food.FoodDto.Detail} returns this
 */
proto.food.FoodDto.Detail.prototype.clearVitaminMap = function() {
  this.getVitaminMap().clear();
  return this;};


/**
 * optional float sugar = 3;
 * @return {number}
 */
proto.food.FoodDto.Detail.prototype.getSugar = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.food.FoodDto.Detail} returns this
 */
proto.food.FoodDto.Detail.prototype.setSugar = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.food.FoodDto.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.food.FoodDto.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string images = 3;
 * @return {!Array<string>}
 */
proto.food.FoodDto.prototype.getImagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.setImagesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.addImages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.clearImagesList = function() {
  return this.setImagesList([]);
};


/**
 * optional int64 price = 4;
 * @return {number}
 */
proto.food.FoodDto.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 qty = 5;
 * @return {number}
 */
proto.food.FoodDto.prototype.getQty = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.setQty = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Detail detail = 6;
 * @return {?proto.food.FoodDto.Detail}
 */
proto.food.FoodDto.prototype.getDetail = function() {
  return /** @type{?proto.food.FoodDto.Detail} */ (
    jspb.Message.getWrapperField(this, proto.food.FoodDto.Detail, 6));
};


/**
 * @param {?proto.food.FoodDto.Detail|undefined} value
 * @return {!proto.food.FoodDto} returns this
*/
proto.food.FoodDto.prototype.setDetail = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.food.FoodDto} returns this
 */
proto.food.FoodDto.prototype.clearDetail = function() {
  return this.setDetail(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.food.FoodDto.prototype.hasDetail = function() {
  return jspb.Message.getField(this, 6) != null;
};


goog.object.extend(exports, proto.food);
