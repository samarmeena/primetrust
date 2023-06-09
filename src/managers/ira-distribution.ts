import type { PrimeTrustAPIClient } from "../client.js";
import type { RawIraDistribution } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class IraDistributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawIraDistribution>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ira-distributions/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawIraDistribution>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ira-distributions",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
