import type { PrimeTrustAPIClient } from "../client.js";
import type { RawQuote } from "../interfaces/index.js";
import type { QuotePayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class QuoteManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(payload: QuotePayload): Promise<PrimeTrustResponse<RawQuote>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "quotes",
        },
      },
      method: "post",
      url: "/quotes",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async execute(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawQuote>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/quotes/${id}/execute`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawQuote>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/quotes/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawQuote>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/quotes",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
