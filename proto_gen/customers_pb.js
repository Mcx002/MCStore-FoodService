// source: customers.proto
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

var jspb = require('google-protobuf')
var goog = jspb
var global = function () {
    if (this) {
        return this
    }
    if (typeof window !== 'undefined') {
        return window
    }
    if (typeof global !== 'undefined') {
        return global
    }
    if (typeof self !== 'undefined') {
        return self
    }
    return Function('return this')()
}.call(null)

var common_pb = require('./common_pb.js')
goog.object.extend(proto, common_pb)
goog.exportSymbol('proto.customers.Customer', null, global)
goog.exportSymbol('proto.customers.EmailStatus', null, global)
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
proto.customers.Customer = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null)
}
goog.inherits(proto.customers.Customer, jspb.Message)
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.customers.Customer.displayName = 'proto.customers.Customer'
}

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
    proto.customers.Customer.prototype.toObject = function (
        opt_includeInstance
    ) {
        return proto.customers.Customer.toObject(opt_includeInstance, this)
    }

    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.customers.Customer} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.customers.Customer.toObject = function (includeInstance, msg) {
        var f,
            obj = {
                id: jspb.Message.getFieldWithDefault(msg, 1, 0),
                firstname: jspb.Message.getFieldWithDefault(msg, 2, ''),
                lastname: jspb.Message.getFieldWithDefault(msg, 3, ''),
                email: jspb.Message.getFieldWithDefault(msg, 4, ''),
                birthday: jspb.Message.getFieldWithDefault(msg, 5, 0),
                gender: jspb.Message.getFieldWithDefault(msg, 6, 0),
                phone: jspb.Message.getFieldWithDefault(msg, 7, ''),
                address: jspb.Message.getFieldWithDefault(msg, 8, ''),
                createdat: jspb.Message.getFieldWithDefault(msg, 9, 0),
                updatedat: jspb.Message.getFieldWithDefault(msg, 10, 0),
                version: jspb.Message.getFieldWithDefault(msg, 11, 0),
            }

        if (includeInstance) {
            obj.$jspbMessageInstance = msg
        }
        return obj
    }
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.customers.Customer}
 */
proto.customers.Customer.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes)
    var msg = new proto.customers.Customer()
    return proto.customers.Customer.deserializeBinaryFromReader(msg, reader)
}

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.customers.Customer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.customers.Customer}
 */
proto.customers.Customer.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break
        }
        var field = reader.getFieldNumber()
        switch (field) {
            case 1:
                var value = /** @type {number} */ (reader.readInt32())
                msg.setId(value)
                break
            case 2:
                var value = /** @type {string} */ (reader.readString())
                msg.setFirstname(value)
                break
            case 3:
                var value = /** @type {string} */ (reader.readString())
                msg.setLastname(value)
                break
            case 4:
                var value = /** @type {string} */ (reader.readString())
                msg.setEmail(value)
                break
            case 5:
                var value = /** @type {number} */ (reader.readInt64())
                msg.setBirthday(value)
                break
            case 6:
                var value = /** @type {!proto.common.Gender} */ (
                    reader.readEnum()
                )
                msg.setGender(value)
                break
            case 7:
                var value = /** @type {string} */ (reader.readString())
                msg.setPhone(value)
                break
            case 8:
                var value = /** @type {string} */ (reader.readString())
                msg.setAddress(value)
                break
            case 9:
                var value = /** @type {number} */ (reader.readInt64())
                msg.setCreatedat(value)
                break
            case 10:
                var value = /** @type {number} */ (reader.readInt64())
                msg.setUpdatedat(value)
                break
            case 11:
                var value = /** @type {number} */ (reader.readInt32())
                msg.setVersion(value)
                break
            default:
                reader.skipField()
                break
        }
    }
    return msg
}

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.customers.Customer.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter()
    proto.customers.Customer.serializeBinaryToWriter(this, writer)
    return writer.getResultBuffer()
}

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.customers.Customer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.customers.Customer.serializeBinaryToWriter = function (message, writer) {
    var f = undefined
    f = message.getId()
    if (f !== 0) {
        writer.writeInt32(1, f)
    }
    f = message.getFirstname()
    if (f.length > 0) {
        writer.writeString(2, f)
    }
    f = message.getLastname()
    if (f.length > 0) {
        writer.writeString(3, f)
    }
    f = message.getEmail()
    if (f.length > 0) {
        writer.writeString(4, f)
    }
    f = message.getBirthday()
    if (f !== 0) {
        writer.writeInt64(5, f)
    }
    f = message.getGender()
    if (f !== 0.0) {
        writer.writeEnum(6, f)
    }
    f = message.getPhone()
    if (f.length > 0) {
        writer.writeString(7, f)
    }
    f = message.getAddress()
    if (f.length > 0) {
        writer.writeString(8, f)
    }
    f = message.getCreatedat()
    if (f !== 0) {
        writer.writeInt64(9, f)
    }
    f = message.getUpdatedat()
    if (f !== 0) {
        writer.writeInt64(10, f)
    }
    f = message.getVersion()
    if (f !== 0) {
        writer.writeInt32(11, f)
    }
}

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.customers.Customer.prototype.getId = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0))
}

/**
 * @param {number} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setId = function (value) {
    return jspb.Message.setProto3IntField(this, 1, value)
}

/**
 * optional string firstname = 2;
 * @return {string}
 */
proto.customers.Customer.prototype.getFirstname = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''))
}

/**
 * @param {string} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setFirstname = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value)
}

/**
 * optional string lastname = 3;
 * @return {string}
 */
proto.customers.Customer.prototype.getLastname = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''))
}

/**
 * @param {string} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setLastname = function (value) {
    return jspb.Message.setProto3StringField(this, 3, value)
}

/**
 * optional string email = 4;
 * @return {string}
 */
proto.customers.Customer.prototype.getEmail = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''))
}

/**
 * @param {string} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setEmail = function (value) {
    return jspb.Message.setProto3StringField(this, 4, value)
}

/**
 * optional int64 birthday = 5;
 * @return {number}
 */
proto.customers.Customer.prototype.getBirthday = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0))
}

/**
 * @param {number} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setBirthday = function (value) {
    return jspb.Message.setProto3IntField(this, 5, value)
}

/**
 * optional common.Gender gender = 6;
 * @return {!proto.common.Gender}
 */
proto.customers.Customer.prototype.getGender = function () {
    return /** @type {!proto.common.Gender} */ (
        jspb.Message.getFieldWithDefault(this, 6, 0)
    )
}

/**
 * @param {!proto.common.Gender} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setGender = function (value) {
    return jspb.Message.setProto3EnumField(this, 6, value)
}

/**
 * optional string phone = 7;
 * @return {string}
 */
proto.customers.Customer.prototype.getPhone = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''))
}

/**
 * @param {string} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setPhone = function (value) {
    return jspb.Message.setProto3StringField(this, 7, value)
}

/**
 * optional string address = 8;
 * @return {string}
 */
proto.customers.Customer.prototype.getAddress = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''))
}

/**
 * @param {string} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setAddress = function (value) {
    return jspb.Message.setProto3StringField(this, 8, value)
}

/**
 * optional int64 createdAt = 9;
 * @return {number}
 */
proto.customers.Customer.prototype.getCreatedat = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0))
}

/**
 * @param {number} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setCreatedat = function (value) {
    return jspb.Message.setProto3IntField(this, 9, value)
}

/**
 * optional int64 updatedAt = 10;
 * @return {number}
 */
proto.customers.Customer.prototype.getUpdatedat = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0))
}

/**
 * @param {number} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setUpdatedat = function (value) {
    return jspb.Message.setProto3IntField(this, 10, value)
}

/**
 * optional int32 version = 11;
 * @return {number}
 */
proto.customers.Customer.prototype.getVersion = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0))
}

/**
 * @param {number} value
 * @return {!proto.customers.Customer} returns this
 */
proto.customers.Customer.prototype.setVersion = function (value) {
    return jspb.Message.setProto3IntField(this, 11, value)
}

/**
 * @enum {number}
 */
proto.customers.EmailStatus = {
    UNKNOWN: 0,
    VERIFIED: 1,
    UNVERIFIED: 2,
}

goog.object.extend(exports, proto.customers)
