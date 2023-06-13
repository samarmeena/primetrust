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
  AddressManager,
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
  AuthorizationGroupManager,
  AuthorizationItemManager,
  AuthorizationRuleGroupManager,
  BalanceCheckManager,
  BrokerAccountAuthorizationManager,
  CashTransactionManager,
  ChargebackManager,
  CipCheckManager,
  ContactBeneficiariesManager,
  ContactFundsTransferReferenceManager,
  ContactManager,
  ContactRelationshipManager,
  ContingentHoldManager,
  ContributionManager,
  CountriesManager,
  CreditCardAuthorizationManager,
  CreditCardFailureManager,
  CreditCardResourceManager,
  CustodianManager,
  DisbursementAuthorizationManager,
  DisbursementManager,
  ElectronicSignatureManager,
  FedwireDetailManager,
  FreezeActionItemManager,
  FundsTransferManager,
  FundsTransferMethodManager,
  HoldManager,
  InternalAssetTransferManager,
  InternalAssetTransferReviewManager,
  IraDistributionManager,
  IraTransferInFormManager,
  KycActionItemManager,
  KycDocumentCheckManager,
  NocCorrectionManager,
  OrganizationDocumentManager,
  OrganizationManager,
  PhoneNumberManager,
  PlaidItemManager,
  PushTransferMethodManager,
  QuoteManager,
  RefundManager,
  ResourceTokenManager,
  RuleManager,
  TokenAssetManager,
  TradeManager,
  TradeSettlementConfigManager,
  TradeSettlementManager,
  UiLogManager,
  UploadedDocumentManager,
  UserGroupManager,
  UserInvitationManager,
  UserManager,
  WebhookConfigManager,
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
  accountAggregatePolicies: AccountAggregatePoliciesManager;
  accountAssetTotals: AccountAssetTotalManager;
  accountCashTotals: AccountCashTotalManager;
  accountCashTransfers: AccountCashTransferManager;
  accountQuestionnaires: AccountQuestionnaireManager;
  accounts: AccountManager;
  accountStatements: AccountStatementManager;
  accountSubTypes: AccountSubTypeManager;
  accountTransferAuthorizations: AccountTransferAuthorizationManager;
  accountTypes: AccountTypeManager;
  achOriginators: AchOriginatorManager;
  achReturns: AchReturnManager;
  addresses: AddressManager;
  advancedFilters: AdvancedFilterManager;
  agreementPreview: AgreementPreviewManager;
  amlChecks: AmlCheckManager;
  assetContribution: AssetContributionManager;
  assetDisbursement: AssetDisbursementManager;
  assets: AssetManager;
  assetTransactions: AssetTransactionManager;
  assetTransactionTaxLots: AssetTransactionTaxLotManager;
  assetTransferMethods: AssetTransferMethodManager;
  assetTransfers: AssetTransferManager;
  authorizationGroups: AuthorizationGroupManager;
  authorizationItems: AuthorizationItemManager;
  authorizationRuleGroups: AuthorizationRuleGroupManager;
  balanceChecks: BalanceCheckManager;
  brokerAccountAuthorizations: BrokerAccountAuthorizationManager;
  cashTransactions: CashTransactionManager;
  chargebacks: ChargebackManager;
  cipChecks: CipCheckManager;
  contactBeneficiaries: ContactBeneficiariesManager;
  contactFundsTransferReferences: ContactFundsTransferReferenceManager;
  contactRelationships: ContactRelationshipManager;
  contacts: ContactManager;
  contingentHolds: ContingentHoldManager;
  contributions: ContributionManager;
  countries: CountriesManager;
  creditCardAuthorizations: CreditCardAuthorizationManager;
  creditCardFailures: CreditCardFailureManager;
  creditCardResources: CreditCardResourceManager;
  custodians: CustodianManager;
  disbursementAuthorizations: DisbursementAuthorizationManager;
  disbursements: DisbursementManager;
  electronicSignatures: ElectronicSignatureManager;
  fedwireDetails: FedwireDetailManager;
  freezeActionItems: FreezeActionItemManager;
  fundsTransferMethods: FundsTransferMethodManager;
  fundsTransfers: FundsTransferManager;
  holds: HoldManager;
  internalAssetTransferReviews: InternalAssetTransferReviewManager;
  internalAssetTransfers: InternalAssetTransferManager;
  iraDistributions: IraDistributionManager;
  iraTransferInForms: IraTransferInFormManager;
  kycActionItems: KycActionItemManager;
  kycDocumentChecks: KycDocumentCheckManager;
  nocCorrections: NocCorrectionManager;
  organizationDocuments: OrganizationDocumentManager;
  organizations: OrganizationManager;
  phoneNumbers: PhoneNumberManager;
  plaidItems: PlaidItemManager;
  pushTransferMethods: PushTransferMethodManager;
  quotes: QuoteManager;
  refunds: RefundManager;
  resourceTokens: ResourceTokenManager;
  rules: RuleManager;
  tokenAssets: TokenAssetManager;
  trades: TradeManager;
  tradeSettlementConfigs: TradeSettlementConfigManager;
  tradeSettlements: TradeSettlementManager;
  uiLogs: UiLogManager;
  uploadedDocuments: UploadedDocumentManager;
  userGroups: UserGroupManager;
  userInvitations: UserInvitationManager;
  users: UserManager;
  webhookConfigs: WebhookConfigManager;
  webhooks: WebhookManager;
  wireInitiators: WireInitiatorManager;

  constructor(options: ClientOptions) {
    this.name = "PrimeTrustAPIClient";
    this.options = options;
    this.rootURL = options.sandbox
      ? PRIMETRUST_SANDBOX_API_URL
      : PRIMETRUST_API_URL;

    // initialize managers
    this.accountAggregatePolicies = new AccountAggregatePoliciesManager(this);
    this.accountAssetTotals = new AccountAssetTotalManager(this);
    this.accountCashTotals = new AccountCashTotalManager(this);
    this.accountCashTransfers = new AccountCashTransferManager(this);
    this.accountQuestionnaires = new AccountQuestionnaireManager(this);
    this.accounts = new AccountManager(this);
    this.accountStatements = new AccountStatementManager(this);
    this.accountSubTypes = new AccountSubTypeManager(this);
    this.accountTransferAuthorizations =
      new AccountTransferAuthorizationManager(this);
    this.accountTypes = new AccountTypeManager(this);
    this.achOriginators = new AchOriginatorManager(this);
    this.achReturns = new AchReturnManager(this);
    this.addresses = new AddressManager(this);
    this.advancedFilters = new AdvancedFilterManager(this);
    this.agreementPreview = new AgreementPreviewManager(this);
    this.amlChecks = new AmlCheckManager(this);
    this.assetContribution = new AssetContributionManager(this);
    this.assetDisbursement = new AssetDisbursementManager(this);
    this.assets = new AssetManager(this);
    this.assetTransactions = new AssetTransactionManager(this);
    this.assetTransactionTaxLots = new AssetTransactionTaxLotManager(this);
    this.assetTransferMethods = new AssetTransferMethodManager(this);
    this.assetTransfers = new AssetTransferManager(this);
    this.authorizationGroups = new AuthorizationGroupManager(this);
    this.authorizationItems = new AuthorizationItemManager(this);
    this.authorizationRuleGroups = new AuthorizationRuleGroupManager(this);
    this.balanceChecks = new BalanceCheckManager(this);
    this.brokerAccountAuthorizations = new BrokerAccountAuthorizationManager(
      this
    );
    this.cashTransactions = new CashTransactionManager(this);
    this.chargebacks = new ChargebackManager(this);
    this.cipChecks = new CipCheckManager(this);
    this.contactBeneficiaries = new ContactBeneficiariesManager(this);
    this.contactFundsTransferReferences =
      new ContactFundsTransferReferenceManager(this);
    this.contactRelationships = new ContactRelationshipManager(this);
    this.contacts = new ContactManager(this);
    this.contingentHolds = new ContingentHoldManager(this);
    this.contributions = new ContributionManager(this);
    this.countries = new CountriesManager(this);
    this.creditCardAuthorizations = new CreditCardAuthorizationManager(this);
    this.creditCardFailures = new CreditCardFailureManager(this);
    this.creditCardResources = new CreditCardResourceManager(this);
    this.custodians = new CustodianManager(this);
    this.disbursementAuthorizations = new DisbursementAuthorizationManager(
      this
    );
    this.disbursements = new DisbursementManager(this);
    this.electronicSignatures = new ElectronicSignatureManager(this);
    this.fedwireDetails = new FedwireDetailManager(this);
    this.freezeActionItems = new FreezeActionItemManager(this);
    this.fundsTransferMethods = new FundsTransferMethodManager(this);
    this.fundsTransfers = new FundsTransferManager(this);
    this.holds = new HoldManager(this);
    this.internalAssetTransferReviews = new InternalAssetTransferReviewManager(
      this
    );
    this.internalAssetTransfers = new InternalAssetTransferManager(this);
    this.iraDistributions = new IraDistributionManager(this);
    this.iraTransferInForms = new IraTransferInFormManager(this);
    this.kycActionItems = new KycActionItemManager(this);
    this.kycDocumentChecks = new KycDocumentCheckManager(this);
    this.nocCorrections = new NocCorrectionManager(this);
    this.organizationDocuments = new OrganizationDocumentManager(this);
    this.organizations = new OrganizationManager(this);
    this.phoneNumbers = new PhoneNumberManager(this);
    this.plaidItems = new PlaidItemManager(this);
    this.pushTransferMethods = new PushTransferMethodManager(this);
    this.quotes = new QuoteManager(this);
    this.refunds = new RefundManager(this);
    this.resourceTokens = new ResourceTokenManager(this);
    this.rules = new RuleManager(this);
    this.tokenAssets = new TokenAssetManager(this);
    this.trades = new TradeManager(this);
    this.tradeSettlementConfigs = new TradeSettlementConfigManager(this);
    this.tradeSettlements = new TradeSettlementManager(this);
    this.uiLogs = new UiLogManager(this);
    this.uploadedDocuments = new UploadedDocumentManager(this);
    this.userGroups = new UserGroupManager(this);
    this.userInvitations = new UserInvitationManager(this);
    this.users = new UserManager(this);
    this.webhookConfigs = new WebhookConfigManager(this);
    this.webhooks = new WebhookManager(this);
    this.wireInitiators = new WireInitiatorManager(this);

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
