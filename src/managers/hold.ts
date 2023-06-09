import type { PrimeTrustAPIClient } from "../client.js";
import type { RawHold } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class HoldManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawHold>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/holds/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawHold>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/holds",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
