import type { PrimeTrustAPIClient } from "../client.js";
import type { RawTrade } from "../interfaces/index.js";
import type { TradePayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class TradeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawTrade[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trades",
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
  ): Promise<RawTrade> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trades/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async settle(id: string, params?: Record<string, string>): Promise<RawTrade> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/settle`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async cancel(id: string, params?: Record<string, string>): Promise<RawTrade> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/cancel`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(payload: TradePayload): Promise<RawTrade> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "trades",
        },
      },
      method: "post",
      url: "/trades",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
