import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class IraDistributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.iraDistributions> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ira-distributions/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.iraDistributions>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.iraDistributions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ira-distributions",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.iraDistributions>(resp);

    return response;
  }
}
