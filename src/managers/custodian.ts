import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCustodian } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class CustodianManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCustodian>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/custodians/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawCustodian>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/custodians",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
