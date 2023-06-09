
    import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountAggregatePolicies } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountAggregatePoliciesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountAggregatePolicies>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-aggregate-policiess/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountAggregatePolicies>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-aggregate-policiess",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}

    