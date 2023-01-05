import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAssetTransaction } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class AssetTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAssetTransaction[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/asset-transactions",
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
  ): Promise<RawAssetTransaction> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/asset-transactions/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
