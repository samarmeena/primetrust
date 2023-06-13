import type { PrimeTrustAPIClient } from "../client.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UploadedDocumentManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.uploadedDocuments> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/uploaded-documents/${id}`,
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.uploadedDocuments>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.uploadedDocuments>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/uploaded-documents",
    });

    const response =
      new PrimeTrustResponse<PrimeTrustDataType.uploadedDocuments>(resp);

    return response;
  }
}
