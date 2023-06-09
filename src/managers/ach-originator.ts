import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAchOriginator } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AchOriginatorManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAchOriginator>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ach-originators/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAchOriginator>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ach-originators",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
