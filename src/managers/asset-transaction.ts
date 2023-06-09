import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetTransaction } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransaction>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transactions/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransaction>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transactions",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
