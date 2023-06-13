import type { IncludeDataType, RawMap } from "../types/index.js";
import { PrimeTrustError } from "./error.js";
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

  has(type: IncludeDataType): boolean {
    const relation = this.raw.relationships[camelCase(type)]?.data;
    if (!relation || relation === null) {
      return false;
    }

    return true;
  }

  get<X extends keyof RawMap>(type: IncludeDataType): PrimeTrustRelation<X> {
    const relation = this.raw.relationships[camelCase(type)]?.data;
    if (!relation) {
      throw new PrimeTrustError(
        `Relation "${type}" is not present in the entity's relationships`
      );
    }

    if (relation === null) {
      throw new PrimeTrustError(`Relation "${type}" is null`);
    }

    if (Array.isArray(relation)) {
      throw new PrimeTrustError(
        `Relation "${type}" is an array. Use the getAll method instead`
      );
    }

    const find = this.resp.included.find(
      (t) => t.type === relation.type && t.id === relation.id
    );

    if (!find) {
      throw new PrimeTrustError(
        `Relation "${type}" is not found. Include "${type}" to involve it in the request`
      );
    }

    return new PrimeTrustRelation<X>(find);
  }

  getAll<X extends keyof RawMap>(
    type: IncludeDataType
  ): PrimeTrustRelation<X>[] {
    const relations = this.raw.relationships[camelCase(type)]?.data;
    if (!relations) {
      throw new PrimeTrustError(
        `Relation "${type}" is not present in the entity's relationships`
      );
    }

    if (relations === null) {
      throw new PrimeTrustError(`Relation "${type}" is null`);
    }

    if (!Array.isArray(relations)) {
      throw new PrimeTrustError(
        `Relation "${type}" is not an array. Use the get method instead`
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
    if (!this.rawData.meta || typeof this.rawData.meta.pageCount !== "number") {
      throw new Error("This response does not have a valid page count");
    }

    return this.rawData.meta.pageCount;
  }

  get resourceCount(): number {
    return this.rawData.meta.resourceCount ?? 1;
  }

  get included(): any[] {
    return this.rawData.included;
  }

  get one(): PrimeTrustEntry<T> | undefined {
    if (Array.isArray(this.rawData.data)) {
      const entry = this.rawData.data[0];
      if (!entry) {
        return;
      }

      return new PrimeTrustEntry(this, entry);
    }

    return new PrimeTrustEntry(this, this.rawData.data);
  }

  get all(): PrimeTrustEntry<T>[] {
    return Array.isArray(this.rawData.data)
      ? this.rawData.data.map((d: any) => new PrimeTrustEntry(this, d))
      : [new PrimeTrustEntry(this, this.rawData.data)];
  }

  constructor(public raw: any) {
    this.rawData = convertKeysToCamelCase(raw);

    if (!this.rawData.data) {
      throw new PrimeTrustError(
        "Invalid response data. Missing 'data' property"
      );
    }
  }
}
