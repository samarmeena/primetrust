import type { PrimeTrustAPIClient } from "../client.js";
import type { RawKycDocumentCheck } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class KycDocumentCheckManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawKycDocumentCheck[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/kyc-document-checks",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }
}
