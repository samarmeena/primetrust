import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.users>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/users/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.users>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.users>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/users",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.users>(resp);

    return response;
  }
}
