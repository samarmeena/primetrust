import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetDisbursement } from "../interfaces/index.js";
import type { AssetDisbursementPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class AssetDisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAssetDisbursement[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-disbursements",
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
  ): Promise<RawAssetDisbursement> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-disbursements/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(
    payload: AssetDisbursementPayload
  ): Promise<RawAssetDisbursement> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "asset-disbursements",
        },
      },
      method: "post",
      url: "/asset-disbursements",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
