import type {
  RawAccount,
  RawAccountCashTotal,
  RawAccountCashTransfer,
  RawAccountPolicies,
  RawAmlCheck,
  RawAsset,
  RawAssetContribution,
  RawAssetDisbursement,
  RawAssetTransaction,
  RawAssetTransfer,
  RawAssetTransferMethod,
  RawAuthorizationGroup,
  RawAuthorizationItem,
  RawAuthorizationRuleGroup,
  RawBank,
  RawCashTransaction,
  RawCipCheck,
  RawContact,
  RawContactFundsTransferReference,
  RawContingentHold,
  RawContribution,
  RawCreditCardResource,
  RawDisbursement,
  RawDisbursementAuthorization,
  RawFundsTransfer,
  RawFundsTransferMethod,
  RawHold,
  RawInternalAssetTransfer,
  RawInternalAssetTransferReview,
  RawKycDocumentCheck,
  RawPlaidItem,
  RawRule,
  RawUploadedDocument,
  RawUser,
  RawUserGroup,
  RawUserInvitation,
  RawWebhookConfig,
} from "../interfaces/index.js";
import type { PrimeTrustResponse } from "../utils/transformer.js";
import type { PrimeTrustDataType } from "./enum.js";

export interface IncludeMap {
  [PrimeTrustDataType.accountCashTotals]: PrimeTrustResponse<RawAccountCashTotal>;
  [PrimeTrustDataType.accountCashTransfers]: PrimeTrustResponse<RawAccountCashTransfer>;
  [PrimeTrustDataType.accountPolicies]: PrimeTrustResponse<RawAccountPolicies>;
  [PrimeTrustDataType.accounts]: PrimeTrustResponse<RawAccount>;
  [PrimeTrustDataType.amlChecks]: PrimeTrustResponse<RawAmlCheck>;
  [PrimeTrustDataType.assetContributions]: PrimeTrustResponse<RawAssetContribution>;
  [PrimeTrustDataType.assetDisbursements]: PrimeTrustResponse<RawAssetDisbursement>;
  [PrimeTrustDataType.assetTransactions]: PrimeTrustResponse<RawAssetTransaction>;
  [PrimeTrustDataType.assetTransferMethods]: PrimeTrustResponse<RawAssetTransferMethod>;
  [PrimeTrustDataType.assetTransfers]: PrimeTrustResponse<RawAssetTransfer>;
  [PrimeTrustDataType.assets]: PrimeTrustResponse<RawAsset>;
  [PrimeTrustDataType.authorizationGroups]: PrimeTrustResponse<RawAuthorizationGroup>;
  [PrimeTrustDataType.authorizationItems]: PrimeTrustResponse<RawAuthorizationItem>;
  [PrimeTrustDataType.authorizationRuleGroups]: PrimeTrustResponse<RawAuthorizationRuleGroup>;
  [PrimeTrustDataType.banks]: PrimeTrustResponse<RawBank>;
  [PrimeTrustDataType.cashTransactions]: PrimeTrustResponse<RawCashTransaction>;
  [PrimeTrustDataType.cipChecks]: PrimeTrustResponse<RawCipCheck>;
  [PrimeTrustDataType.contactFundsTransferReferences]: PrimeTrustResponse<RawContactFundsTransferReference>;
  [PrimeTrustDataType.contacts]: PrimeTrustResponse<RawContact>;
  [PrimeTrustDataType.contingentHolds]: PrimeTrustResponse<RawContingentHold>;
  [PrimeTrustDataType.contributions]: PrimeTrustResponse<RawContribution>;
  [PrimeTrustDataType.creditCardResources]: PrimeTrustResponse<RawCreditCardResource>;
  [PrimeTrustDataType.disbursementAuthorizations]: PrimeTrustResponse<RawDisbursementAuthorization>;
  [PrimeTrustDataType.disbursements]: PrimeTrustResponse<RawDisbursement>;
  [PrimeTrustDataType.fundsTransferMethods]: PrimeTrustResponse<RawFundsTransferMethod>;
  [PrimeTrustDataType.fundsTransfers]: PrimeTrustResponse<RawFundsTransfer>;
  [PrimeTrustDataType.holds]: PrimeTrustResponse<RawHold>;
  [PrimeTrustDataType.internalAssetTransferReviews]: PrimeTrustResponse<RawInternalAssetTransferReview>;
  [PrimeTrustDataType.internalAssetTransfers]: PrimeTrustResponse<RawInternalAssetTransfer>;
  [PrimeTrustDataType.kycDocumentChecks]: PrimeTrustResponse<RawKycDocumentCheck>;
  [PrimeTrustDataType.plaidItems]: PrimeTrustResponse<RawPlaidItem>;
  [PrimeTrustDataType.rules]: PrimeTrustResponse<RawRule>;
  [PrimeTrustDataType.uploadedDocuments]: PrimeTrustResponse<RawUploadedDocument>;
  [PrimeTrustDataType.userGroups]: PrimeTrustResponse<RawUserGroup>;
  [PrimeTrustDataType.userInvitations]: PrimeTrustResponse<RawUserInvitation>;
  [PrimeTrustDataType.users]: PrimeTrustResponse<RawUser>;
  [PrimeTrustDataType.webhookConfigs]: PrimeTrustResponse<RawWebhookConfig>;
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
) {
  return includes.find((t): t is Include<T> => t.type === type);
}

export function GetAllIncludeOfType<T extends keyof IncludeMap>(
  includes: Include<any>[],
  type: T
) {
  return includes.filter((t): t is Include<T> => t.type === type);
}
