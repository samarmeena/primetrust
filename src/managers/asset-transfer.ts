import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetTransfer } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransfer>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfers/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransfer>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfers",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
