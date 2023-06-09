import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCipCheck } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CipCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCipCheck>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/cip-checks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCipCheck>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cip-checks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
