import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class KycActionItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.kycActionItems> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/kyc-action-items/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.kycActionItems>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.kycActionItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/kyc-action-items",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.kycActionItems>(
      resp
    );

    return response;
  }
}
