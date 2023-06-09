import type { PrimeTrustAPIClient } from "../client.js";
import type { RawRefund } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class RefundManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawRefund>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/refunds/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawRefund>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/refunds",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
