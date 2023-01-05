import type { PrimeTrustAPIClient } from "../client.js";
import type { RawDisbursement } from "../interfaces/index.js";
import type { DisbursementPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class DisbursementManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawDisbursement[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/disbursements",
    });

    const transform = (data: any) => ({
      ...toCamelCase(data.attributes),
      id: data.id,
    });

    return resp.data.map((d: any) => transform(d));
  }

  async getById(
    id: string,
    params?: Record<string, string>
  ): Promise<RawDisbursement> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/disbursements/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(payload: DisbursementPayload): Promise<RawDisbursement> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "disbursements",
        },
      },
      method: "post",
      url: "/disbursements",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
