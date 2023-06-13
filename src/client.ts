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
  AssetContributionManager,
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
  assetContribution: AssetContributionManager;
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
  chargeback: ChargebackManager;
  accountAggregatePolicies: AccountAggregatePoliciesManager;
  accountQuestionnaire: AccountQuestionnaireManager;
  accountStatement: AccountStatementManager;
  accountSubType: AccountSubTypeManager;
  accountTransferAuthorization: AccountTransferAuthorizationManager;
  accountType: AccountTypeManager;
  achOriginator: AchOriginatorManager;
  achReturn: AchReturnManager;
  advancedFilter: AdvancedFilterManager;
  assetTransactionTaxLot: AssetTransactionTaxLotManager;
  balanceCheck: BalanceCheckManager;
  brokerAccountAuthorization: BrokerAccountAuthorizationManager;
  contactBeneficiaries: ContactBeneficiariesManager;
  contactRelationship: ContactRelationshipManager;
  countries: CountriesManager;
  creditCardAuthorization: CreditCardAuthorizationManager;
  creditCardFailure: CreditCardFailureManager;
  custodian: CustodianManager;
  electronicSignature: ElectronicSignatureManager;
  fedwireDetail: FedwireDetailManager;
  freezeActionItem: FreezeActionItemManager;
  iraDistribution: IraDistributionManager;
  iraTransferInForm: IraTransferInFormManager;
  kycActionItem: KycActionItemManager;
  nocCorrection: NocCorrectionManager;
  organizationDocument: OrganizationDocumentManager;
  organization: OrganizationManager;
  phoneNumber: PhoneNumberManager;
  pushTransferMethod: PushTransferMethodManager;
  refund: RefundManager;
  resourceToken: ResourceTokenManager;
  tokenAsset: TokenAssetManager;
  tradeSettlementConfig: TradeSettlementConfigManager;
  tradeSettlement: TradeSettlementManager;
  uiLog: UiLogManager;
  wireInitiator: WireInitiatorManager;

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
    this.assetContribution = new AssetContributionManager(this);
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
    this.chargeback = new ChargebackManager(this);
    this.accountAggregatePolicies = new AccountAggregatePoliciesManager(this);
    this.accountQuestionnaire = new AccountQuestionnaireManager(this);
    this.accountStatement = new AccountStatementManager(this);
    this.accountSubType = new AccountSubTypeManager(this);
    this.accountTransferAuthorization = new AccountTransferAuthorizationManager(
      this
    );
    this.accountType = new AccountTypeManager(this);
    this.achOriginator = new AchOriginatorManager(this);
    this.achReturn = new AchReturnManager(this);
    this.advancedFilter = new AdvancedFilterManager(this);
    this.assetTransactionTaxLot = new AssetTransactionTaxLotManager(this);
    this.balanceCheck = new BalanceCheckManager(this);
    this.brokerAccountAuthorization = new BrokerAccountAuthorizationManager(
      this
    );
    this.contactBeneficiaries = new ContactBeneficiariesManager(this);
    this.contactRelationship = new ContactRelationshipManager(this);
    this.countries = new CountriesManager(this);
    this.creditCardAuthorization = new CreditCardAuthorizationManager(this);
    this.creditCardFailure = new CreditCardFailureManager(this);
    this.custodian = new CustodianManager(this);
    this.electronicSignature = new ElectronicSignatureManager(this);
    this.fedwireDetail = new FedwireDetailManager(this);
    this.freezeActionItem = new FreezeActionItemManager(this);
    this.iraDistribution = new IraDistributionManager(this);
    this.iraTransferInForm = new IraTransferInFormManager(this);
    this.kycActionItem = new KycActionItemManager(this);
    this.nocCorrection = new NocCorrectionManager(this);
    this.organizationDocument = new OrganizationDocumentManager(this);
    this.organization = new OrganizationManager(this);
    this.phoneNumber = new PhoneNumberManager(this);
    this.pushTransferMethod = new PushTransferMethodManager(this);
    this.refund = new RefundManager(this);
    this.resourceToken = new ResourceTokenManager(this);
    this.tokenAsset = new TokenAssetManager(this);
    this.tradeSettlementConfig = new TradeSettlementConfigManager(this);
    this.tradeSettlement = new TradeSettlementManager(this);
    this.uiLog = new UiLogManager(this);
    this.wireInitiator = new WireInitiatorManager(this);

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
