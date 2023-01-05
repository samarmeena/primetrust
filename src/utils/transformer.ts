import _ from "lodash";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
