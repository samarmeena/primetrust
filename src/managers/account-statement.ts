import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountStatement } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountStatementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountStatement>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-statements/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountStatement>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-statements",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
