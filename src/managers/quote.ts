import type { PrimeTrustAPIClient } from "../client.js";
import type { RawQuote } from "../interfaces/index.js";
import type { QuotePayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class QuoteManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawQuote[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/quotes",
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
  ): Promise<RawQuote> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/quotes/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async execute(
    id: string,
    params?: Record<string, string>
  ): Promise<RawQuote> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/quotes/${id}/execute`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(payload: QuotePayload): Promise<RawQuote> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "quotes",
        },
      },
      method: "post",
      url: "/quotes",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
