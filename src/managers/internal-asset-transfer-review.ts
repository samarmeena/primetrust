import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class InternalAssetTransferReviewManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.internalAssetTransferReviews> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/internal-asset-transfer-reviews/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.internalAssetTransferReviews>(
        resp
      );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<
    PrimeTrustResponse<PrimeTrustDataType.internalAssetTransferReviews>
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: "/internal-asset-transfer-reviews",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.internalAssetTransferReviews>(
        resp
      );

    return response;
  }
}
