import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAsset } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class AssetManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAsset[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/assets",
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
  ): Promise<RawAsset> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/assets/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
