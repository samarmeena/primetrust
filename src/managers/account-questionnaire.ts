import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountQuestionnaire } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountQuestionnaireManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountQuestionnaire>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-questionnaires/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawAccountQuestionnaire>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-questionnaires",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
