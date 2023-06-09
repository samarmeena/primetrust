import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetTransferMethod } from "../interfaces/index.js";
import type {
  AssetTransferMethodIncomingPayload,
  AssetTransferMethodOutgoingPayload,
} from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class AssetTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload:
      | AssetTransferMethodIncomingPayload
      | AssetTransferMethodOutgoingPayload
  ): Promise<PrimeTrustResponse<RawAssetTransferMethod>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "asset-transfer-methods",
        },
      },
      method: "post",
      url: "/asset-transfer-methods",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransferMethod>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfer-methods/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAssetTransferMethod>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfer-methods",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
