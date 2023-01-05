import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCreditCardResource } from "../interfaces/index.js";
import type { CreditCardResourcePayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class CreditCardResourceManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawCreditCardResource[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/credit-card-resources",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawCreditCardResource> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/credit-card-resources/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async refreshToken(
    id: string,
    params?: Record<string, string>
  ): Promise<RawCreditCardResource> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/credit-card-resources/${id}/token`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(
    payload: CreditCardResourcePayload
  ): Promise<RawCreditCardResource> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "credit-card-resources",
        },
      },
      method: "post",
      url: "/credit-card-resources",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
