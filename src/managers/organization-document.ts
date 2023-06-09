import type { PrimeTrustAPIClient } from "../client.js";
import type { RawOrganizationDocument } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class OrganizationDocumentManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawOrganizationDocument>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/organization-documents/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawOrganizationDocument>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/organization-documents",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
