import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContingentHold } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ContingentHoldManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContingentHold>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contingent-holds/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawContingentHold>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contingent-holds",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
