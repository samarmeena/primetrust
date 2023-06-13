import type { PrimeTrustAPIClient } from "../client.js";
import type { AssetDisbursementPayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class AssetDisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: AssetDisbursementPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetDisbursements>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "asset-disbursements",
        },
      },
      method: "post",
      params: params,
      url: "/asset-disbursements",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetDisbursements>(resp);

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetDisbursements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-disbursements/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetDisbursements>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetDisbursements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-disbursements",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetDisbursements>(resp);

    return response;
  }
}
