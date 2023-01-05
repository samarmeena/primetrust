import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCipCheck } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class CipCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawCipCheck[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cip-checks",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }
}
