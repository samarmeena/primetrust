import type { PrimeTrustAPIClient } from "../client.js";
import type { DisbursementPayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class DisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: DisbursementPayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.disbursements>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "disbursements",
        },
      },
      method: "post",
      params: params,
      url: "/disbursements",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.disbursements>(
      resp
    );

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the created resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.disbursements> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/disbursements/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.disbursements>(
      resp
    );

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.disbursements>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/disbursements",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.disbursements>(
      resp
    );

    return response;
  }
}
