import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AssetTransactionTaxLotManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransactionTaxLots> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transaction-tax-lots/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransactionTaxLots>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetTransactionTaxLots>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transaction-tax-lots",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransactionTaxLots>(resp);

    return response;
  }
}
