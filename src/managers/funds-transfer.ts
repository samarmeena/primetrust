import type { PrimeTrustAPIClient } from "../client.js";
import type { RawFundsTransfer } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class FundsTransferManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFundsTransfer>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/funds-transfers/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawFundsTransfer>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/funds-transfers",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
