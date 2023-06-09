import type { PrimeTrustAPIClient } from "../client.js";
import type { RawFedwireDetail } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class FedwireDetailManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFedwireDetail>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/fedwire-details/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFedwireDetail>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/fedwire-details",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
