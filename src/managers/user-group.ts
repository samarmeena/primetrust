import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserGroupManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.userGroups> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/user-groups/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.userGroups>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.userGroups>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/user-groups",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.userGroups>(
      resp
    );

    return response;
  }
}
