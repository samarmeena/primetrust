import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BalanceCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.balanceChecks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/balance-checks/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.balanceChecks>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.balanceChecks>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/balance-checks",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.balanceChecks>(
      resp
    );

    return response;
  }
}
