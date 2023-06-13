import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class IraTransferInFormManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.iraTransferInForms>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ira-transfer-in-forms/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.iraTransferInForms>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.iraTransferInForms>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ira-transfer-in-forms",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.iraTransferInForms>(resp);

    return response;
  }
}
