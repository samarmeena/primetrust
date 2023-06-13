import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountCashTotalManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountCashTotals>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-totals/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountCashTotals>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountCashTotals>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-totals",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountCashTotals>(resp);

    return response;
  }
}
