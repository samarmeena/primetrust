import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class AccountQuestionnaireManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.accountQuestionnaires> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-questionnaires/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountQuestionnaires>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.accountQuestionnaires>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-questionnaires",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.accountQuestionnaires>(resp);

    return response;
  }
}
