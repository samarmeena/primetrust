import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountPolicies } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountPoliciesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountPolicies>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-policies/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountPolicies>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-policies",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
