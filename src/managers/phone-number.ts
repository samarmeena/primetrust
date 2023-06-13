import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class PhoneNumberManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.phoneNumbers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/phone-numbers/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.phoneNumbers>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.phoneNumbers>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/phone-numbers",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.phoneNumbers>(
      resp
    );

    return response;
  }
}
