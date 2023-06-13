import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountAggregatePoliciesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<
    PrimeTrustEntry<PrimeTrustDataType.accountAggregatePolicies> | undefined
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-aggregate-policies/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountAggregatePolicies>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountAggregatePolicies>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-aggregate-policies",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountAggregatePolicies>(resp);

    return response;
  }
}
