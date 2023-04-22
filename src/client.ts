import type { AxiosRequestConfig } from "axios";
import axios from "axios";

import {
  AccountAssetTotalManager,
  AccountCashTotalManager,
  AccountCashTransferManager,
  AccountManager,
  AgreementPreviewManager,
  AmlCheckManager,
  AssetDisbursementManager,
  AssetManager,
  AssetTransactionManager,
  AssetTransferManager,
  AssetTransferMethodManager,
  CashTransactionManager,
  CipCheckManager,
  ContactFundsTransferReferenceManager,
  ContactManager,
  ContributionManager,
  CreditCardResourceManager,
  DisbursementManager,
  FundsTransferMethodManager,
  KycDocumentCheckManager,
  QuoteManager,
  TradeManager,
  WebhookManager,
} from "./managers/index.js";
import type { ClientOptions } from "./types/index.js";
import {
  PRIMETRUST_API_URL,
  PRIMETRUST_API_VERSION,
  PRIMETRUST_SANDBOX_API_URL,
  REFRESH_TOKEN_IN_SECONDS,
} from "./types/index.js";

export class PrimeTrustAPIClient {
  public name: string;
  public rootURL: string;
  private token: string | undefined;
  private options: ClientOptions;

  // managers
  accounts: AccountManager;
  accountAssetTotals: AccountAssetTotalManager;
  accountCashTotals: AccountCashTotalManager;
  accountCashTransfers: AccountCashTransferManager;
  agreementPreview: AgreementPreviewManager;
  amlChecks: AmlCheckManager;
  assetDisbursement: AssetDisbursementManager;
  assetTransactions: AssetTransactionManager;
  assetTransfers: AssetTransferManager;
  assetTransferMethods: AssetTransferMethodManager;
  assets: AssetManager;
  cashTransactions: CashTransactionManager;
  cipChecks: CipCheckManager;
  contacts: ContactManager;
  contactFundsTransferReferences: ContactFundsTransferReferenceManager;
  contributions: ContributionManager;
  creditCardResources: CreditCardResourceManager;
  disbursements: DisbursementManager;
  fundsTransferMethods: FundsTransferMethodManager;
  kycDocumentChecks: KycDocumentCheckManager;
  quotes: QuoteManager;
  trades: TradeManager;
  webhooks: WebhookManager;

  constructor(options: ClientOptions) {
    this.name = "PrimeTrustAPIClient";
    this.options = options;
    this.rootURL = options.sandbox
      ? PRIMETRUST_SANDBOX_API_URL
      : PRIMETRUST_API_URL;

    // initialize managers
    this.accounts = new AccountManager(this);
    this.accountAssetTotals = new AccountAssetTotalManager(this);
    this.accountCashTotals = new AccountCashTotalManager(this);
    this.accountCashTransfers = new AccountCashTransferManager(this);
    this.agreementPreview = new AgreementPreviewManager(this);
    this.amlChecks = new AmlCheckManager(this);
    this.assetDisbursement = new AssetDisbursementManager(this);
    this.assetTransactions = new AssetTransactionManager(this);
    this.assetTransfers = new AssetTransferManager(this);
    this.assetTransferMethods = new AssetTransferMethodManager(this);
    this.assets = new AssetManager(this);
    this.cashTransactions = new CashTransactionManager(this);
    this.cipChecks = new CipCheckManager(this);
    this.contacts = new ContactManager(this);
    this.contactFundsTransferReferences =
      new ContactFundsTransferReferenceManager(this);
    this.contributions = new ContributionManager(this);
    this.creditCardResources = new CreditCardResourceManager(this);
    this.disbursements = new DisbursementManager(this);
    this.fundsTransferMethods = new FundsTransferMethodManager(this);
    this.kycDocumentChecks = new KycDocumentCheckManager(this);
    this.quotes = new QuoteManager(this);
    this.trades = new TradeManager(this);
    this.webhooks = new WebhookManager(this);

    this.updateToken();
    this.autoUpdateToken();
  }

  private autoUpdateToken(): void {
    const seconds =
      this.options.refreshTokenInSeconds ?? REFRESH_TOKEN_IN_SECONDS;
    setInterval(() => this.updateToken(), seconds * 1000);
  }

  private async updateToken(): Promise<void> {
    this.token = await this.getJWT(
      this.options.username,
      this.options.password
    );
  }

  private async getJWT(username: string, password: string): Promise<string> {
    const url = "/auth/jwts";
    const method = "post";
    const auth = {
      password,
      username,
    };
    const baseURL = `${this.rootURL}`;
    const seconds =
      this.options.refreshTokenInSeconds ?? REFRESH_TOKEN_IN_SECONDS;
    const response = await axios<{ token: string }>({
      auth,
      baseURL,
      data: {
        ttl: seconds + 60, // 60 seconds extra, to avoid 401, while token refresh
      },
      method,
      url,
    });

    return response.data.token;
  }

  async request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
    if (!this.token) {
      await this.updateToken();
    }

    config.headers = {
      Authorization: `Bearer ${this.token}`,
      ...config.headers,
    };

    config.baseURL = `${this.rootURL}/${PRIMETRUST_API_VERSION}`;
    const response = await axios<T>(config);

    return response.data;
  }
}
