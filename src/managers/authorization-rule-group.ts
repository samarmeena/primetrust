import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAuthorizationRuleGroup } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationRuleGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationRuleGroup>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-rule-groups/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationRuleGroup>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-rule-groups",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
