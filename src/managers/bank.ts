import type { PrimeTrustAPIClient } from "../client.js";
import type { RawBank } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class BankManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBank>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/banks/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawBank>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/banks",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
