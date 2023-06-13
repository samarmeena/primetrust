import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AdvancedFilterManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.advancedFilters> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/advanced-filters/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.advancedFilters>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.advancedFilters>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/advanced-filters",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.advancedFilters>(
      resp
    );

    return response;
  }
}
