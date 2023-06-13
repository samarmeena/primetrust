import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountPoliciesManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountPolicies> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-policies/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountPolicies>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountPolicies>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-policies",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.accountPolicies>(
      resp
    );

    return response;
  }
}
