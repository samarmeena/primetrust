import type { PrimeTrustAPIClient } from "../client.js";
import type { RawOrganization } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class OrganizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawOrganization>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/organizations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawOrganization>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/organizations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
