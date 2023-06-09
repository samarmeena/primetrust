import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAdvancedFilter } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AdvancedFilterManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAdvancedFilter>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/advanced-filters/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAdvancedFilter>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/advanced-filters",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
