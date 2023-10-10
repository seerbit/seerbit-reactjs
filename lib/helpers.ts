export interface seerbitPayTypes {
  tranref: string;
  currency: string;
  description: string;
  country: string;
  amount: string;
  callbackurl: string;
  public_key: string;
  full_name: string;
  email: string;
  mobile_no: string;
  customization: string;
  tokenize: string;
  planId: string;
  clientappcode: string;
  pocketId: string;
  vendorId: string;
}

export function seerbitPay(
  options: seerbitPayTypes,
  callback: () => void,
  close: () => void
) {
  // @ts-ignore
  window.SeerbitPay && window.SeerbitPay(options, callback, close);
}
