import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAmlCheck } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AmlCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAmlCheck>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/aml-checks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAmlCheck>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/aml-checks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
