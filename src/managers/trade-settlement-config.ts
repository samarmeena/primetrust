import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TradeSettlementConfigManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.tradeSettlementConfigs>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trade-settlement-configs/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.tradeSettlementConfigs>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.tradeSettlementConfigs>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trade-settlement-configs",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.tradeSettlementConfigs>(resp);

    return response;
  }
}
