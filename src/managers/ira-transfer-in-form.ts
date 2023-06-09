import type { PrimeTrustAPIClient } from "../client.js";
import type { RawIraTransferInForm } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class IraTransferInFormManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawIraTransferInForm>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/ira-transfer-in-forms/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawIraTransferInForm>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/ira-transfer-in-forms",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
