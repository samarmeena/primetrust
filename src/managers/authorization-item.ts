import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAuthorizationItem } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationItem>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-items/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAuthorizationItem>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-items",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
