import type { PrimeTrustAPIClient } from "../client.js";
import type { RawUser } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUser>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/users/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUser>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/users",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
