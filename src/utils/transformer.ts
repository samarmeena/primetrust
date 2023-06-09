import _ from "lodash";

import type {
  Include,
  IncludeDataType,
  PrimeTrustDataType,
} from "../types/index.js";

const { camelCase, snakeCase } = _;

export interface RelationDataData {
  id: string;
  type: string;
}

export interface RelationshipData {
  data?: RelationDataData | RelationDataData[];
  links?: {
    related: string;
  };
}

export interface PrimeTrustResponse<T> {
  attributes: T;
  id: string;
  included: Include<any>[];
  relationships: { [key in IncludeDataType]: RelationshipData };
  type: PrimeTrustDataType;
}

export function convertKeysToSnakeCase(obj: any): any {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertKeysToSnakeCase);
  }

  return Object.keys(obj).reduce((result: any, key: string) => {
    const snakeCaseKey = snakeCase(key);
    const value = obj[key];
    result[snakeCaseKey] = convertKeysToSnakeCase(value);
    return result;
  }, {});
}

export function convertKeysToCamelCase(obj: any): any {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamelCase);
  }

  return Object.keys(obj).reduce((result: any, key: string) => {
    const camelCaseKey = camelCase(key);
    const value = obj[key];
    result[camelCaseKey] = convertKeysToCamelCase(value);
    return result;
  }, {});
}

export function fromIncludes(obj: any): Include<any>[] {
  if (!Array.isArray(obj)) {
    return [];
  }

  return obj.map((r) => ({
    attributes: convertKeysToCamelCase(r.attributes),
    id: r.id,
    type: r.type,
  }));
}

export function fromRelationships(obj: any): any {
  if (typeof obj !== "object" || !obj) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(fromRelationships);
  }

  return Object.keys(obj).reduce((result: any, key: string) => {
    const camelCaseKey = camelCase(key);
    const value = obj[key];

    if (Array.isArray(value)) {
      result[camelCaseKey] = value.map(fromRelationships);
    } else {
      result[camelCaseKey] = fromRelationships(value);
    }

    return result;
  }, {});
}

export function PrimeTrustResponse<T>(
  data: any,
  included?: any
): PrimeTrustResponse<T> {
  return {
    attributes: convertKeysToCamelCase(data.attributes),
    id: data.id,
    included: fromIncludes(included),
    relationships: fromRelationships(data.relationships),
    type: data.type,
  };
}
