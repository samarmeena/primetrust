import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AuthorizationGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.authorizationGroups> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/authorization-groups/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationGroups>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.authorizationGroups>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/authorization-groups",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.authorizationGroups>(resp);

    return response;
  }
}
