import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationRuleGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.authorizationRuleGroups>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-rule-groups/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationRuleGroups>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.authorizationRuleGroups>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-rule-groups",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationRuleGroups>(resp);

    return response;
  }
}
