import type {
  RawAccount,
  RawAccountAggregatePolicies,
  RawAccountCashTotal,
  RawAccountCashTransfer,
  RawAccountPolicies,
  RawAccountQuestionnaire,
  RawAccountStatement,
  RawAccountSubType,
  RawAccountTransferAuthorization,
  RawAccountType,
  RawAchOriginator,
  RawAchReturn,
  RawAdvancedFilter,
  RawAmlCheck,
  RawAsset,
  RawAssetContribution,
  RawAssetDisbursement,
  RawAssetTransaction,
  RawAssetTransactionTaxLot,
  RawAssetTransfer,
  RawAssetTransferMethod,
  RawAuthorizationGroup,
  RawAuthorizationItem,
  RawAuthorizationRuleGroup,
  RawBalanceCheck,
  RawBank,
  RawBrokerAccountAuthorization,
  RawCashTransaction,
  RawChargeback,
  RawCipCheck,
  RawContact,
  RawContactBeneficiaries,
  RawContactFundsTransferReference,
  RawContactRelationship,
  RawContingentHold,
  RawContribution,
  RawCountries,
  RawCreditCardAuthorization,
  RawCreditCardFailure,
  RawCreditCardResource,
  RawCustodian,
  RawDisbursement,
  RawDisbursementAuthorization,
  RawElectronicSignature,
  RawFedwireDetail,
  RawFreezeActionItem,
  RawFundsTransfer,
  RawFundsTransferMethod,
  RawHold,
  RawInternalAssetTransfer,
  RawInternalAssetTransferReview,
  RawIraDistribution,
  RawIraTransferInForm,
  RawKycActionItem,
  RawKycDocumentCheck,
  RawNocCorrection,
  RawOrganization,
  RawOrganizationDocument,
  RawPhoneNumber,
  RawPlaidItem,
  RawPushTransferMethod,
  RawRefund,
  RawResourceToken,
  RawRule,
  RawTokenAsset,
  RawTrade,
  RawTradeSettlement,
  RawTradeSettlementConfig,
  RawUiLog,
  RawUploadedDocument,
  RawUser,
  RawUserGroup,
  RawUserInvitation,
  RawWebhookConfig,
  RawWireInitiator,
} from "../interfaces/index.js";
import type { PrimeTrustResponse } from "../utils/transformer.js";
import type { PrimeTrustDataType } from "./enum/index.js";

export interface IncludeMap {
  [PrimeTrustDataType.chargebacks]: PrimeTrustResponse<RawChargeback>;
  [PrimeTrustDataType.accountAggregatePolicies]: PrimeTrustResponse<RawAccountAggregatePolicies>;
  [PrimeTrustDataType.accountCashTotals]: PrimeTrustResponse<RawAccountCashTotal>;
  [PrimeTrustDataType.accountCashTransfers]: PrimeTrustResponse<RawAccountCashTransfer>;
  [PrimeTrustDataType.accountPolicies]: PrimeTrustResponse<RawAccountPolicies>;
  [PrimeTrustDataType.accountQuestionnaires]: PrimeTrustResponse<RawAccountQuestionnaire>;
  [PrimeTrustDataType.accountStatements]: PrimeTrustResponse<RawAccountStatement>;
  [PrimeTrustDataType.accountSubTypes]: PrimeTrustResponse<RawAccountSubType>;
  [PrimeTrustDataType.accountTransferAuthorizations]: PrimeTrustResponse<RawAccountTransferAuthorization>;
  [PrimeTrustDataType.accountTypes]: PrimeTrustResponse<RawAccountType>;
  [PrimeTrustDataType.accounts]: PrimeTrustResponse<RawAccount>;
  [PrimeTrustDataType.achOriginators]: PrimeTrustResponse<RawAchOriginator>;
  [PrimeTrustDataType.achReturns]: PrimeTrustResponse<RawAchReturn>;
  [PrimeTrustDataType.advancedFilters]: PrimeTrustResponse<RawAdvancedFilter>;
  [PrimeTrustDataType.amlChecks]: PrimeTrustResponse<RawAmlCheck>;
  [PrimeTrustDataType.assetContributions]: PrimeTrustResponse<RawAssetContribution>;
  [PrimeTrustDataType.assetDisbursements]: PrimeTrustResponse<RawAssetDisbursement>;
  [PrimeTrustDataType.assetTransactionTaxLots]: PrimeTrustResponse<RawAssetTransactionTaxLot>;
  [PrimeTrustDataType.assetTransactions]: PrimeTrustResponse<RawAssetTransaction>;
  [PrimeTrustDataType.assetTransferMethods]: PrimeTrustResponse<RawAssetTransferMethod>;
  [PrimeTrustDataType.assetTransfers]: PrimeTrustResponse<RawAssetTransfer>;
  [PrimeTrustDataType.assets]: PrimeTrustResponse<RawAsset>;
  [PrimeTrustDataType.authorizationGroups]: PrimeTrustResponse<RawAuthorizationGroup>;
  [PrimeTrustDataType.authorizationItems]: PrimeTrustResponse<RawAuthorizationItem>;
  [PrimeTrustDataType.authorizationRuleGroups]: PrimeTrustResponse<RawAuthorizationRuleGroup>;
  [PrimeTrustDataType.balanceChecks]: PrimeTrustResponse<RawBalanceCheck>;
  [PrimeTrustDataType.banks]: PrimeTrustResponse<RawBank>;
  [PrimeTrustDataType.brokerAccountAuthorizations]: PrimeTrustResponse<RawBrokerAccountAuthorization>;
  [PrimeTrustDataType.cashTransactions]: PrimeTrustResponse<RawCashTransaction>;
  [PrimeTrustDataType.cipChecks]: PrimeTrustResponse<RawCipCheck>;
  [PrimeTrustDataType.contactBeneficiaries]: PrimeTrustResponse<RawContactBeneficiaries>;
  [PrimeTrustDataType.contactFundsTransferReferences]: PrimeTrustResponse<RawContactFundsTransferReference>;
  [PrimeTrustDataType.contactRelationships]: PrimeTrustResponse<RawContactRelationship>;
  [PrimeTrustDataType.contacts]: PrimeTrustResponse<RawContact>;
  [PrimeTrustDataType.contingentHolds]: PrimeTrustResponse<RawContingentHold>;
  [PrimeTrustDataType.contributions]: PrimeTrustResponse<RawContribution>;
  [PrimeTrustDataType.countries]: PrimeTrustResponse<RawCountries>;
  [PrimeTrustDataType.creditCardAuthorizations]: PrimeTrustResponse<RawCreditCardAuthorization>;
  [PrimeTrustDataType.creditCardFailures]: PrimeTrustResponse<RawCreditCardFailure>;
  [PrimeTrustDataType.creditCardResources]: PrimeTrustResponse<RawCreditCardResource>;
  [PrimeTrustDataType.custodians]: PrimeTrustResponse<RawCustodian>;
  [PrimeTrustDataType.disbursementAuthorizations]: PrimeTrustResponse<RawDisbursementAuthorization>;
  [PrimeTrustDataType.disbursements]: PrimeTrustResponse<RawDisbursement>;
  [PrimeTrustDataType.electronicSignatures]: PrimeTrustResponse<RawElectronicSignature>;
  [PrimeTrustDataType.fedwireDetails]: PrimeTrustResponse<RawFedwireDetail>;
  [PrimeTrustDataType.freezeActionItems]: PrimeTrustResponse<RawFreezeActionItem>;
  [PrimeTrustDataType.fundsTransferMethods]: PrimeTrustResponse<RawFundsTransferMethod>;
  [PrimeTrustDataType.fundsTransfers]: PrimeTrustResponse<RawFundsTransfer>;
  [PrimeTrustDataType.holds]: PrimeTrustResponse<RawHold>;
  [PrimeTrustDataType.internalAssetTransferReviews]: PrimeTrustResponse<RawInternalAssetTransferReview>;
  [PrimeTrustDataType.internalAssetTransfers]: PrimeTrustResponse<RawInternalAssetTransfer>;
  [PrimeTrustDataType.iraDistributions]: PrimeTrustResponse<RawIraDistribution>;
  [PrimeTrustDataType.iraTransferInForms]: PrimeTrustResponse<RawIraTransferInForm>;
  [PrimeTrustDataType.kycActionItems]: PrimeTrustResponse<RawKycActionItem>;
  [PrimeTrustDataType.kycDocumentChecks]: PrimeTrustResponse<RawKycDocumentCheck>;
  [PrimeTrustDataType.nocCorrections]: PrimeTrustResponse<RawNocCorrection>;
  [PrimeTrustDataType.organizationDocuments]: PrimeTrustResponse<RawOrganizationDocument>;
  [PrimeTrustDataType.organizations]: PrimeTrustResponse<RawOrganization>;
  [PrimeTrustDataType.phoneNumbers]: PrimeTrustResponse<RawPhoneNumber>;
  [PrimeTrustDataType.plaidItems]: PrimeTrustResponse<RawPlaidItem>;
  [PrimeTrustDataType.pushTransferMethods]: PrimeTrustResponse<RawPushTransferMethod>;
  [PrimeTrustDataType.refunds]: PrimeTrustResponse<RawRefund>;
  [PrimeTrustDataType.resourceTokens]: PrimeTrustResponse<RawResourceToken>;
  [PrimeTrustDataType.rules]: PrimeTrustResponse<RawRule>;
  [PrimeTrustDataType.tokenAssets]: PrimeTrustResponse<RawTokenAsset>;
  [PrimeTrustDataType.tradeSettlementConfigs]: PrimeTrustResponse<RawTradeSettlementConfig>;
  [PrimeTrustDataType.tradeSettlements]: PrimeTrustResponse<RawTradeSettlement>;
  [PrimeTrustDataType.trades]: PrimeTrustResponse<RawTrade>;
  [PrimeTrustDataType.uiLogs]: PrimeTrustResponse<RawUiLog>;
  [PrimeTrustDataType.uploadedDocuments]: PrimeTrustResponse<RawUploadedDocument>;
  [PrimeTrustDataType.userGroups]: PrimeTrustResponse<RawUserGroup>;
  [PrimeTrustDataType.userInvitations]: PrimeTrustResponse<RawUserInvitation>;
  [PrimeTrustDataType.users]: PrimeTrustResponse<RawUser>;
  [PrimeTrustDataType.webhookConfigs]: PrimeTrustResponse<RawWebhookConfig>;
  [PrimeTrustDataType.wireInitiators]: PrimeTrustResponse<RawWireInitiator>;
}

export interface Include<T extends keyof IncludeMap> {
  attributes: IncludeMap[T] extends PrimeTrustResponse<infer A> ? A : never;
  id: string;
  type: T;
}

export function isIncludeOfType<T extends keyof IncludeMap>(
  include: Include<any>,
  type: T
): include is Include<T> {
  return include.type === type;
}

export function GetIncludeOfType<T extends keyof IncludeMap>(
  includes: Include<any>[],
  type: T
): Include<T> {
  const find = includes.find((t): t is Include<T> => t.type === type);
  if (!find) {
    throw Error(
      `Could not find include type ${type} in ${JSON.stringify(includes)}`
    );
  }
  return find;
}

export function GetAllIncludeOfType<T extends keyof IncludeMap>(
  includes: Include<any>[],
  type: T
): Include<T>[] {
  return includes.filter((t): t is Include<T> => t.type === type);
}
