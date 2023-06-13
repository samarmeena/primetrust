import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransactions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transactions/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransactions>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetTransactions>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transactions",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransactions>(resp);

    return response;
  }
}
