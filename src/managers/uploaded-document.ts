import type { PrimeTrustAPIClient } from "../client.js";
import type { RawUploadedDocument } from "../interfaces/index.js";
import { PrimeTrustResponse } from "../utils/index.js";

export class UploadedDocumentManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUploadedDocument>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/uploaded-documents/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawUploadedDocument>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/uploaded-documents",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
