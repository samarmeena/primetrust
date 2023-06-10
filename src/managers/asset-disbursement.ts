import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetDisbursement } from "../interfaces/index.js";
import type { AssetDisbursementPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class AssetDisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: AssetDisbursementPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetDisbursement>> {
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

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetDisbursement>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-disbursements/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetDisbursement>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-disbursements",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
