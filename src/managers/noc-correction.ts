import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class NocCorrectionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.nocCorrections> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/noc-corrections/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.nocCorrections>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.nocCorrections>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/noc-corrections",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.nocCorrections>(
      resp
    );

    return response;
  }
}
