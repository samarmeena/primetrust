import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class FedwireDetailManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.fedwireDetails>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/fedwire-details/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fedwireDetails>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.fedwireDetails>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/fedwire-details",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.fedwireDetails>(
      resp
    );

    return response;
  }
}
