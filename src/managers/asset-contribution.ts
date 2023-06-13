import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetContributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetContributions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-contributions/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetContributions>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetContributions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-contributions",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetContributions>(resp);

    return response;
  }
}
