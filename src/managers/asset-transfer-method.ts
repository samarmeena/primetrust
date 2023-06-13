import type { PrimeTrustAPIClient } from "../client.js";
import type {
  AssetTransferMethodIncomingPayload,
  AssetTransferMethodOutgoingPayload,
  AssetTransferMethodPatchPayload,
} from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class AssetTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload:
      | AssetTransferMethodIncomingPayload
      | AssetTransferMethodOutgoingPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransferMethods>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "asset-transfer-methods",
        },
      },
      method: "post",
      params: params,
      url: "/asset-transfer-methods",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransferMethods>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the created resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<
    PrimeTrustEntry<PrimeTrustDataType.assetTransferMethods> | undefined
  > {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfer-methods/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransferMethods>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.assetTransferMethods>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfer-methods",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransferMethods>(resp);

    return response;
  }

  async patch(
    id: string,
    payload: AssetTransferMethodPatchPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.assetTransferMethods>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "asset-transfer-methods",
        },
      },
      method: "patch",
      params: params,
      url: `/asset-transfer-methods/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.assetTransferMethods>(resp);

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the created resource");
    }

    return response.one;
  }
}
