import { useEffect } from "react";
import useSeerbitScript from "./seerbitScript";
import { seerbitPay, seerbitPayTypes, responseType } from "./helpers";

export default function initSeerbitPayment(
  payload: seerbitPayTypes,
  callback?: (response: responseType, closeModal: () => void) => void,
  close?: () => void
): () => void {
  const [error, loaded] = useSeerbitScript(payload.tranref);

  const {
    tranref,
    currency,
    description,
    country,
    amount,
    callbackurl,
    public_key,
    full_name,
    email,
    mobile_no,
    customization,
    tokenize,
    planId,
    pocketId,
    vendorId,
  }: seerbitPayTypes = payload;

  function paymentInit(): void {
    if (error) {
      throw new Error("Error loading checkout script");
    }

    if (loaded) {
      let seerbitOptions = {
        tranref,
        currency,
        description,
        country,
        amount,
        callbackurl,
        public_key,
        full_name,
        email,
        mobile_no,
        customization,
        tokenize,
        planId,
        pocketId,
        vendorId,
      };
      seerbitPay(seerbitOptions, callback, close);
    }
  }

  useEffect(() => {
    if (error) {
      // console.log(erroe)
      throw new Error("Error loading checkout script");
    }
  }, [error]);

  return paymentInit;
}
