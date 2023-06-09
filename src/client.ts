import type { AxiosRequestConfig } from "axios";
import axios from "axios";

import {
  AccountAggregatePoliciesManager,
  AccountAssetTotalManager,
  AccountCashTotalManager,
  AccountCashTransferManager,
  AccountManager,
  AccountQuestionnaireManager,
  AccountStatementManager,
  AccountSubTypeManager,
  AccountTransferAuthorizationManager,
  AccountTypeManager,
  AchOriginatorManager,
  AchReturnManager,
  AdvancedFilterManager,
  AgreementPreviewManager,
  AmlCheckManager,
  AssetDisbursementManager,
  AssetManager,
  AssetTransactionManager,
  AssetTransactionTaxLotManager,
  AssetTransferManager,
  AssetTransferMethodManager,
  BalanceCheckManager,
  BrokerAccountAuthorizationManager,
  CashTransactionManager,
  ChargebackManager,
  CipCheckManager,
  ContactBeneficiariesManager,
  ContactFundsTransferReferenceManager,
  ContactManager,
  ContactRelationshipManager,
  ContributionManager,
  CountriesManager,
  CreditCardAuthorizationManager,
  CreditCardFailureManager,
  CreditCardResourceManager,
  CustodianManager,
  DisbursementManager,
  ElectronicSignatureManager,
  FedwireDetailManager,
  FreezeActionItemManager,
  FundsTransferMethodManager,
  IraDistributionManager,
  IraTransferInFormManager,
  KycActionItemManager,
  KycDocumentCheckManager,
  NocCorrectionManager,
  OrganizationDocumentManager,
  OrganizationManager,
  PhoneNumberManager,
  PushTransferMethodManager,
  QuoteManager,
  RefundManager,
  ResourceTokenManager,
  TokenAssetManager,
  TradeManager,
  TradeSettlementConfigManager,
  TradeSettlementManager,
  UiLogManager,
  WebhookManager,
  WireInitiatorManager,
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
  chargebackManager: ChargebackManager;
  accountAggregatePoliciesManager: AccountAggregatePoliciesManager;
  accountQuestionnaireManager: AccountQuestionnaireManager;
  accountStatementManager: AccountStatementManager;
  accountSubTypeManager: AccountSubTypeManager;
  accountTransferAuthorizationManager: AccountTransferAuthorizationManager;
  accountTypeManager: AccountTypeManager;
  achOriginatorManager: AchOriginatorManager;
  achReturnManager: AchReturnManager;
  advancedFilterManager: AdvancedFilterManager;
  assetTransactionTaxLotManager: AssetTransactionTaxLotManager;
  balanceCheckManager: BalanceCheckManager;
  brokerAccountAuthorizationManager: BrokerAccountAuthorizationManager;
  contactBeneficiariesManager: ContactBeneficiariesManager;
  contactRelationshipManager: ContactRelationshipManager;
  countriesManager: CountriesManager;
  creditCardAuthorizationManager: CreditCardAuthorizationManager;
  creditCardFailureManager: CreditCardFailureManager;
  custodianManager: CustodianManager;
  electronicSignatureManager: ElectronicSignatureManager;
  fedwireDetailManager: FedwireDetailManager;
  freezeActionItemManager: FreezeActionItemManager;
  iraDistributionManager: IraDistributionManager;
  iraTransferInFormManager: IraTransferInFormManager;
  kycActionItemManager: KycActionItemManager;
  nocCorrectionManager: NocCorrectionManager;
  organizationDocumentManager: OrganizationDocumentManager;
  organizationManager: OrganizationManager;
  phoneNumberManager: PhoneNumberManager;
  pushTransferMethodManager: PushTransferMethodManager;
  refundManager: RefundManager;
  resourceTokenManager: ResourceTokenManager;
  tokenAssetManager: TokenAssetManager;
  tradeSettlementConfigManager: TradeSettlementConfigManager;
  tradeSettlementManager: TradeSettlementManager;
  uiLogManager: UiLogManager;
  wireInitiatorManager: WireInitiatorManager;

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
    this.chargebackManager = new ChargebackManager(this);
    this.accountAggregatePoliciesManager = new AccountAggregatePoliciesManager(
      this
    );
    this.accountQuestionnaireManager = new AccountQuestionnaireManager(this);
    this.accountStatementManager = new AccountStatementManager(this);
    this.accountSubTypeManager = new AccountSubTypeManager(this);
    this.accountTransferAuthorizationManager =
      new AccountTransferAuthorizationManager(this);
    this.accountTypeManager = new AccountTypeManager(this);
    this.achOriginatorManager = new AchOriginatorManager(this);
    this.achReturnManager = new AchReturnManager(this);
    this.advancedFilterManager = new AdvancedFilterManager(this);
    this.assetTransactionTaxLotManager = new AssetTransactionTaxLotManager(
      this
    );
    this.balanceCheckManager = new BalanceCheckManager(this);
    this.brokerAccountAuthorizationManager =
      new BrokerAccountAuthorizationManager(this);
    this.contactBeneficiariesManager = new ContactBeneficiariesManager(this);
    this.contactRelationshipManager = new ContactRelationshipManager(this);
    this.countriesManager = new CountriesManager(this);
    this.creditCardAuthorizationManager = new CreditCardAuthorizationManager(
      this
    );
    this.creditCardFailureManager = new CreditCardFailureManager(this);
    this.custodianManager = new CustodianManager(this);
    this.electronicSignatureManager = new ElectronicSignatureManager(this);
    this.fedwireDetailManager = new FedwireDetailManager(this);
    this.freezeActionItemManager = new FreezeActionItemManager(this);
    this.iraDistributionManager = new IraDistributionManager(this);
    this.iraTransferInFormManager = new IraTransferInFormManager(this);
    this.kycActionItemManager = new KycActionItemManager(this);
    this.nocCorrectionManager = new NocCorrectionManager(this);
    this.organizationDocumentManager = new OrganizationDocumentManager(this);
    this.organizationManager = new OrganizationManager(this);
    this.phoneNumberManager = new PhoneNumberManager(this);
    this.pushTransferMethodManager = new PushTransferMethodManager(this);
    this.refundManager = new RefundManager(this);
    this.resourceTokenManager = new ResourceTokenManager(this);
    this.tokenAssetManager = new TokenAssetManager(this);
    this.tradeSettlementConfigManager = new TradeSettlementConfigManager(this);
    this.tradeSettlementManager = new TradeSettlementManager(this);
    this.uiLogManager = new UiLogManager(this);
    this.wireInitiatorManager = new WireInitiatorManager(this);

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
