import type { PrimeTrustAPIClient } from "../client.js";
import type { RawTradeSettlementConfig } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TradeSettlementConfigManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTradeSettlementConfig>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trade-settlement-configs/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawTradeSettlementConfig>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trade-settlement-configs",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
