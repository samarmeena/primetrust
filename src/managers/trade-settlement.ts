import type { PrimeTrustAPIClient } from "../client.js";
import type { RawTradeSettlement } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TradeSettlementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTradeSettlement>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trade-settlements/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTradeSettlement>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trade-settlements",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
