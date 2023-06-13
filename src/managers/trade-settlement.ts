import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class TradeSettlementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.tradeSettlements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trade-settlements/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.tradeSettlements>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.tradeSettlements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trade-settlements",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.tradeSettlements>(resp);

    return response;
  }
}
