import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ElectronicSignatureManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.electronicSignatures>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/electronic-signatures/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.electronicSignatures>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.electronicSignatures>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/electronic-signatures",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.electronicSignatures>(resp);

    return response;
  }
}
