import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UserInvitationManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.userInvitations> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/user-invitations/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.userInvitations>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.userInvitations>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/user-invitations",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.userInvitations>(
      resp
    );

    return response;
  }
}
