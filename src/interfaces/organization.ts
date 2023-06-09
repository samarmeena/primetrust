export interface RawOrganization {
  charterLicenseNumber: string;
  charterLicenseState: string;
  compliancePremium: boolean;
  countries: string[];
  createdAt: Date;
  customerTypes: string[];
  description: string;
  focalPointEmail: string;
  industries: string[];
  isIntegrator: boolean;
  label: string;
  monthlyKyb: number;
  monthlyKyc: number;
  orgAchCap: string;
  orgAchCapPeriodDays: number;
  orgCcCap: string;
  orgCcCapPeriodDays: number;
  originatorIdentification: string;
  originatorName: string;
  otherCustomerTypes: string;
  otherIndustries: string;
  salesPerson: string;
  scheduledSettlementCollateralAccountId: string;
  socureAPIKeyAssigned: boolean;
}
