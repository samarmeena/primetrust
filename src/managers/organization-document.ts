import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class OrganizationDocumentManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.organizationDocuments>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/organization-documents/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.organizationDocuments>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.organizationDocuments>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/organization-documents",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.organizationDocuments>(resp);

    return response;
  }
}
