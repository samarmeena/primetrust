import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class OrganizationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.organizations> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/organizations/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.organizations>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.organizations>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/organizations",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.organizations>(
      resp
    );

    return response;
  }
}
