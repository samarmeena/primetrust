import type { PrimeTrustAPIClient } from "../client.js";
import type { RawUserInvitation } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserInvitationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUserInvitation>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/user-invitations/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUserInvitation>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/user-invitations",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
