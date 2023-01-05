import type { PrimeTrustAPIClient } from "../client.js";
import type { RawCashTransaction } from "../interfaces/index.js";
import { toCamelCase } from "../utils/index.js";

export class CashTransactionManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async get(params?: Record<string, string>): Promise<RawCashTransaction[]> {
    const resp = await this.client.request<any>({
      params: params,
      url: "/cash-transactions",
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
  ): Promise<RawCashTransaction> {
    const resp = await this.client.request<any>({
      params: params,
      url: `/cash-transactions/${id}`,
    });

    return { ...toCamelCase(resp.data.attributes), id: resp.data.id };
  }
}
