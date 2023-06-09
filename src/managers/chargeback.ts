import type { PrimeTrustAPIClient } from "../client.js";
import type { RawChargeback } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ChargebackManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawChargeback>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/chargebacks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawChargeback>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/chargebacks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
