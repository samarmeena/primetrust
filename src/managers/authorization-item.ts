import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationItemManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.authorizationItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-items/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationItems>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.authorizationItems>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-items",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationItems>(resp);

    return response;
  }
}
