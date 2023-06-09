export interface RawRule {
  active: boolean;
  assetId: string;
  createdAt: Date;
  currencyType: string;
  internal: boolean;
  numberOfTransactions: string;
  pastHours: string;
  ruleGroupId: string;
  ruleType: string;
  transferAmountMaximum: string;
  transferAmountMinimum: string;
  transferTypes: string[];
  updatedAt: Date;
}
