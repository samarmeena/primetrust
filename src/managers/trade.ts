import type { PrimeTrustAPIClient } from "../client.js";
import type { TradePayload } from "../payloads/index.js";
import type { PrimeTrustDataType } from "../types/index.js";
import type { PrimeTrustEntry } from "../utils/index.js";
import {
  convertKeysToSnakeCase,
  PrimeTrustError,
  PrimeTrustResponse,
} from "../utils/index.js";

export class TradeManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async cancel(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.trades>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/cancel`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.trades>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async create(
    payload: TradePayload,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.trades>> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "trades",
        },
      },
      method: "post",
      params: params,
      url: "/trades",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.trades>(resp);

    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }

  async get(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.trades> | undefined> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/trades/${id}`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.trades>(resp);

    return response.one;
  }

  async getAll(
    params?: Record<string, string>
  ): Promise<PrimeTrustResponse<PrimeTrustDataType.trades>> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/trades",
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.trades>(resp);

    return response;
  }

  async settle(
    id: string,
    params?: Record<string, string>
  ): Promise<PrimeTrustEntry<PrimeTrustDataType.trades>> {
    const resp = await this.client.request<any>({
      method: "post",
      params: params,
      url: `/trades/${id}/settle`,
    });

    const response = new PrimeTrustResponse<PrimeTrustDataType.trades>(resp);
    if (!response.one) {
      throw new PrimeTrustError("Failed to retrieve the resource");
    }

    return response.one;
  }
}
