import type { PrimeTrustAPIClient } from "../client.js";
import type { RawContribution } from "../interfaces/index.js";
import type { ContributionPayload } from "../payloads/index.js";
import { toCamelCase, toSnakeCase } from "../utils/index.js";

export class ContributionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawContribution[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/contributions",
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
  ): Promise<RawContribution> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/contributions/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async create(payload: ContributionPayload): Promise<RawContribution> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "contributions",
        },
      },
      method: "post",
      url: "/contributions",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }

  async createToken(payload: ContributionPayload): Promise<RawContribution> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: toSnakeCase(payload),
          type: "contributions",
        },
      },
      method: "post",
      url: "/contributions/token",
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
