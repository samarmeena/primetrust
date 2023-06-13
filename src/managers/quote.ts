import type { PrimeTrustAPIClient } from "../client.js";
import type { QuotePayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class QuoteManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(
    payload: QuotePayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.quotes>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "quotes",
        },
      },
      method: "post",
      params: params,
      url: "/quotes",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.quotes>(resp);

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the created resource");
    }

    return response.one;
  }

  async execute(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.quotes>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/quotes/${id}/execute`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.quotes>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the created resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.quotes> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/quotes/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.quotes>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.quotes>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/quotes",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.quotes>(resp);

    return response;
  }
}
