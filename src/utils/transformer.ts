import _ from "lodash";

export const { camelCase, snakeCase } = _;

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
