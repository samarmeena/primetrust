import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CashTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.cashTransactions> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/cash-transactions/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.cashTransactions>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.cashTransactions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cash-transactions",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.cashTransactions>(resp);

    return response;
  }
}
