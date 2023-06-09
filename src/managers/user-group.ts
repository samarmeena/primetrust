import type { PrimeTrustAPIClient } from "../client.js";
import type { RawUserGroup } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUserGroup>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/user-groups/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUserGroup>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/user-groups",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
