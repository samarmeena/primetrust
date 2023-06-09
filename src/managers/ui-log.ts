import type { PrimeTrustAPIClient } from "../client.js";
import type { RawUiLog } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UiLogManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUiLog>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ui-logs/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUiLog>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ui-logs",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
