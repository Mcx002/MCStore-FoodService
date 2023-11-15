// package: food
// file: food.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_pb from "./common_pb";

export class FoodDto extends jspb.Message { 
    getId(): string;
    setId(value: string): FoodDto;
    getName(): string;
    setName(value: string): FoodDto;
    clearImagesList(): void;
    getImagesList(): Array<string>;
    setImagesList(value: Array<string>): FoodDto;
    addImages(value: string, index?: number): string;
    getPrice(): number;
    setPrice(value: number): FoodDto;
    getQty(): number;
    setQty(value: number): FoodDto;

    hasDetail(): boolean;
    clearDetail(): void;
    getDetail(): FoodDto.Detail | undefined;
    setDetail(value?: FoodDto.Detail): FoodDto;
    getCreatedAt(): number;
    setCreatedAt(value: number): FoodDto;
    getUpdatedAt(): number;
    setUpdatedAt(value: number): FoodDto;
    getVersion(): number;
    setVersion(value: number): FoodDto;
    getVisible(): boolean;
    setVisible(value: boolean): FoodDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FoodDto.AsObject;
    static toObject(includeInstance: boolean, msg: FoodDto): FoodDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FoodDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FoodDto;
    static deserializeBinaryFromReader(message: FoodDto, reader: jspb.BinaryReader): FoodDto;
}

export namespace FoodDto {
    export type AsObject = {
        id: string,
        name: string,
        imagesList: Array<string>,
        price: number,
        qty: number,
        detail?: FoodDto.Detail.AsObject,
        createdAt: number,
        updatedAt: number,
        version: number,
        visible: boolean,
    }


    export class Detail extends jspb.Message { 
        getCalories(): number;
        setCalories(value: number): Detail;

        getVitaminMap(): jspb.Map<string, number>;
        clearVitaminMap(): void;
        getSugar(): number;
        setSugar(value: number): Detail;

        serializeBinary(): Uint8Array;
        toObject(includeInstance?: boolean): Detail.AsObject;
        static toObject(includeInstance: boolean, msg: Detail): Detail.AsObject;
        static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
        static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
        static serializeBinaryToWriter(message: Detail, writer: jspb.BinaryWriter): void;
        static deserializeBinary(bytes: Uint8Array): Detail;
        static deserializeBinaryFromReader(message: Detail, reader: jspb.BinaryReader): Detail;
    }

    export namespace Detail {
        export type AsObject = {
            calories: number,

            vitaminMap: Array<[string, number]>,
            sugar: number,
        }
    }

}

export class ListFoodDto extends jspb.Message { 
    clearFoodsList(): void;
    getFoodsList(): Array<FoodDto>;
    setFoodsList(value: Array<FoodDto>): ListFoodDto;
    addFoods(value?: FoodDto, index?: number): FoodDto;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): common_pb.ListMetadata | undefined;
    setMetadata(value?: common_pb.ListMetadata): ListFoodDto;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListFoodDto.AsObject;
    static toObject(includeInstance: boolean, msg: ListFoodDto): ListFoodDto.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListFoodDto, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListFoodDto;
    static deserializeBinaryFromReader(message: ListFoodDto, reader: jspb.BinaryReader): ListFoodDto;
}

export namespace ListFoodDto {
    export type AsObject = {
        foodsList: Array<FoodDto.AsObject>,
        metadata?: common_pb.ListMetadata.AsObject,
    }
}
