import type { PrimeTrustAPIClient } from "../client.js";
import type { RawPushTransferMethod } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PushTransferMethodManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPushTransferMethod>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/push-transfer-methods/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawPushTransferMethod>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/push-transfer-methods",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
