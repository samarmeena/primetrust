import type { PrimeTrustAPIClient } from "../client.js";
import type { RawInternalAssetTransfer } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class InternalAssetTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawInternalAssetTransfer>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/internal-asset-transfers/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawInternalAssetTransfer>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/internal-asset-transfers",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
