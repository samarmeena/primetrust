import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetTransferMethod } from "../interfaces/index.js";
import type {
  AssetTransferMethodIncomingPayload,
  AssetTransferMethodOutgoingPayload,
} from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class AssetTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    params?: Record<string, string>
  ): Promise<RawAssetTransferMethod[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transfer-methods",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawAssetTransferMethod> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transfer-methods/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(
    payload:
      | AssetTransferMethodIncomingPayload
      | AssetTransferMethodOutgoingPayload
  ): Promise<RawAssetTransferMethod> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "asset-transfer-methods",
        },
      },
      method: "post",
      url: "/asset-transfer-methods",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
