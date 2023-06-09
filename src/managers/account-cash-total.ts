import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountCashTotal } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountCashTotalManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountCashTotal>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-totals/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountCashTotal>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-totals",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
