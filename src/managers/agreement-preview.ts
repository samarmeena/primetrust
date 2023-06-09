import type { PrimeTrustAPIClient } from "../client.js";
import type { RawAgreementPreview } from "../interfaces/index.js";
import type { AccountPayload } from "../payloads/index.js";
import { convertKeysToSnakeCase } from "../utils/index.js";

export class AgreementPreviewManager {
  constructor(private client: PrimeTrustAPIClient) {
    // empty constructor
  }

  async create(payload: AccountPayload): Promise<RawAgreementPreview> {
    const resp = await this.client.request<any>({
      data: {
        data: {
          attributes: convertKeysToSnakeCase(payload),
          type: "account",
        },
      },
      method: "post",
      url: "/agreement-previews",
    });

    return { content: resp.data.attributes.content, id: resp.data.id };
  }
}
