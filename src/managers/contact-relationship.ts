import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class ContactRelationshipManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.contactRelationships>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contact-relationships/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactRelationships>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.contactRelationships>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contact-relationships",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.contactRelationships>(resp);

    return response;
  }
}
