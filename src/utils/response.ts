import type { IncludeDataType, RawMap } from "../types/index.js";
import { camelCase, convertKeysToCamelCase } from "./transformer.js";

export class PrimeTrustRelation<T extends keyof RawMap> {
  get attributes(): RawMap[T] {
    return this.raw.attributes;
  }

  get id(): string {
    return this.raw.id;
  }

  get type(): T {
    return this.raw.type;
  }

  constructor(public raw: any) {
    //
  }
}

export class PrimeTrustEntityRelation<T extends keyof RawMap> {
  constructor(public raw: any, public resp: PrimeTrustResponse<T>) {
    //
  }

  get<X extends keyof RawMap>(type: IncludeDataType): PrimeTrustRelation<X> {
    const relation = this.raw.relationships[camelCase(type)]?.data;
    if (!relation) {
      throw new Error(`Relation "${type}" is not in with relation of entity`);
    }

    if (relation === null) {
      throw new Error(`Relation "${type}" is null`);
    }

    if (Array.isArray(relation)) {
      throw new Error(
        `Relation "${type}" is an array, use getAll method instead`
      );
    }

    const find = this.resp.included.find(
      (t) => t.type === relation.type && t.id === relation.id
    );

    if (!find) {
      throw new Error(
        `Relation "${type}" is not found, use include=${type} to involve it in request`
      );
    }

    return new PrimeTrustRelation<X>(find);
  }

  getAll<X extends keyof RawMap>(
    type: IncludeDataType
  ): PrimeTrustRelation<X>[] {
    const relations = this.raw.relationships[camelCase(type)]?.data;
    if (!relations) {
      throw new Error(`Relation "${type}" is not in with relation of entity`);
    }

    if (relations === null) {
      throw new Error(`Relation "${type}" is null`);
    }

    if (!Array.isArray(relations)) {
      throw new Error(
        `Relation "${type}" is not an array, use get method instead`
      );
    }

    const all = this.resp.included.filter((t) => {
      return relations.find((x) => x.id === t.id && x.type === t.type);
    });

    return all.map((t) => new PrimeTrustRelation<X>(t));
  }
}

export class PrimeTrustEntry<T extends keyof RawMap> {
  relationship: PrimeTrustEntityRelation<T>;

  get attributes(): RawMap[T] {
    return this.raw.attributes;
  }

  get id(): string {
    return this.raw.id;
  }

  get type(): T {
    return this.raw.type;
  }

  constructor(public resp: PrimeTrustResponse<T>, public raw: any) {
    this.relationship = new PrimeTrustEntityRelation(raw, resp);
  }
}

export class PrimeTrustResponse<T extends keyof RawMap> {
  rawData: any;

  get pageCount(): number {
    if (!this.rawData.meta.pageCount) {
      throw Error("This response does not have page count");
    }

    return this.rawData.meta.pageCount;
  }

  get resourceCount(): number {
    return this.rawData.meta.resourceCount ?? 1;
  }

  get included(): any[] {
    return this.rawData.included;
  }

  get one(): PrimeTrustEntry<T> {
    return Array.isArray(this.rawData.data)
      ? new PrimeTrustEntry(this, this.rawData.data[0])
      : new PrimeTrustEntry(this, this.rawData.data);
  }

  get all(): PrimeTrustEntry<T>[] {
    return Array.isArray(this.rawData.data)
      ? this.rawData.data.map((d: any) => new PrimeTrustEntry(this, d))
      : [new PrimeTrustEntry(this, this.rawData.data)];
  }

  constructor(public raw: any) {
    this.rawData = convertKeysToCamelCase(raw);
  }
}
