import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class InternalAssetTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.internalAssetTransfers> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/internal-asset-transfers/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.internalAssetTransfers>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.internalAssetTransfers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/internal-asset-transfers",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.internalAssetTransfers>(resp);

    return response;
  }
}
