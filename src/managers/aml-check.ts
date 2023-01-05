import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAmlCheck } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class AmlCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAmlCheck[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/aml-checks",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }
}
