export interface RawContactFundsTransferReference {
  accountId: string;
  altCurrencyWireInstructions: RawAltCurrencyWireInstructions;
  contactId: string;
  reference: string;
  signetDepositAddress: string;
  wireInstructions: RawWireInstructions;
  wireInstructionsIntl: RawWireInstructions;
}

export interface RawAltCurrencyWireInstructions {
  usd: RawWireInstructions;
}

export interface RawWireInstructions {
  accountNumber: string;
  bankAddress: string;
  bankPhone: string;
  beneficiaryAddress: string;
  creditTo: string;
  depositoryBankName: string;
  notes: null;
  reference: string;
  routingNumber: string;
  swiftCode: null | string;
}
