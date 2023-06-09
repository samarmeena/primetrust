import type { PrimeTrustAPIClient } from "../client.js";
import type { RawBalanceCheck } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BalanceCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBalanceCheck>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/balance-checks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBalanceCheck>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/balance-checks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
