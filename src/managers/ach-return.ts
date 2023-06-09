import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAchReturn } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AchReturnManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAchReturn>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ach-returns/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAchReturn>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ach-returns",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
