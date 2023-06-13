import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UiLogManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.uiLogs> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ui-logs/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.uiLogs>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.uiLogs>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ui-logs",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.uiLogs>(resp);

    return response;
  }
}
