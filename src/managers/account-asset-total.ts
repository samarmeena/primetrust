import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountAssetTotal } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class AccountAssetTotalManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAccountAssetTotal[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-asset-totals",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      assetId: data.relationships["asset"]?.data?.id ?? null,
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawAccountAssetTotal> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-asset-totals/${id}`,
    });

    return {
      ...toCamelCase(resp.data.attributes),
      assetId: resp.data.relationships["asset"]?.data?.id ?? null,
      id: resp.data.id,
    };
  }
}
