import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAccountCashTotal } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class AccountCashTotalManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawAccountCashTotal[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/account-cash-totals",
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
  ): Promise<RawAccountCashTotal> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/account-cash-totals/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
