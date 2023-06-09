import type { PrimeTrustAPIClient } from "../client.js";
import type { RawDisbursement } from "../interfaces/index.js";
import type { DisbursementPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase, PrimeTrustResponse } from "../utils/index.js";

export class DisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: DisbursementPayload
  ): Promise<PrimeTrustResponse<RawDisbursement>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "disbursements",
        },
      },
      method: "post",
      url: "/disbursements",
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustResponse<RawDisbursement>>> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/disbursements/${id}`,
    });

    return PrimeTrustResponse(resp.data, resp.included);
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<RawDisbursement>[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/disbursements",
    });

    return resp.data.map((d: any) => PrimeTrustResponse(d));
  }
}
