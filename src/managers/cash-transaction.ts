import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCashTransaction } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CashTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCashTransaction>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/cash-transactions/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCashTransaction>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cash-transactions",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
