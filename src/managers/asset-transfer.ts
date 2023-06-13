import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransfers> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfers/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfers",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.assetTransfers>(
      resp
    );

    return response;
  }
}
