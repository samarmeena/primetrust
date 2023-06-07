import _ from "lodash";

import type { PrimeTrustDataType } from "../types/index.js";

export interface Include {
  attributes: unknown;
  id: string;
  type: PrimeTrustDataType;
}

export interface PrimeTrustResponse<T> {
  attributes: T;
  id: string;
  included: Include[];
  raw: any;
  rawIncluded: any;
  type: PrimeTrustDataType;
}

export function toSnakeCase(obj: any): any {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(toSnakeCase);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      _.snakeCase(key),
      toSnakeCase(value),
    ])
  );
}

export function toCamelCase(obj: any): any {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(toCamelCase);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      _.camelCase(key),
      toCamelCase(value),
    ])
  );
}

export function fromIncludes(obj: any): Include[] {
  if (!Array.isArray(obj)) {
    return [];
  }

  return obj.map((r) => ({
    ...toCamelCase(r.attributes),
    id: r.id,
    type: r.type,
  }));
}

export function PrimeTrustResponse<T>(
  data: any,
  included?: any
): PrimeTrustResponse<T> {
  return {
    attributes: toCamelCase(data.attributes),
    id: data.id,
    included: fromIncludes(included),
    raw: data,
    rawIncluded: included,
    type: data.type,
  };
}
