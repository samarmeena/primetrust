import type { PrimeTrustAPIClient } from "../client.js";
import type { RawTrade } from "../interfaces/index.js";
import type { TradePayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class TradeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async cancel(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTrade>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/cancel`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async create(payload: TradePayload): Promise<PrimeTrustResponse<RawTrade>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "trades",
        },
      },
      method: "post",
      url: "/trades",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTrade>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trades/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTrade>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trades",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }

  async settle(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTrade>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/settle`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }
}
