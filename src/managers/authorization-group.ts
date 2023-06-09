import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAuthorizationGroup } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationGroup>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-groups/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationGroup>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-groups",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
