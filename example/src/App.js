import React, { useState } from "react";
import SeerbitCheckout from "./dist/index.es";

const App = () => {
  const close = (close) => {
    console.log(close);
  };
  const callback = (response) => {
    console.log(response);
  };

  const checkProgress = (progress) => {
    console.log(progress);
  };

  const options = {
    public_key: "YOUR_PUBLIC_KEY",
    amount: 100,
    tranref: new Date().getTime(),
    planId: "",
    customization: {
      theme: {
        border_color: "#000000",
        background_color: "#004C64",
        button_color: "#0084A0",
      },
      payment_method: ["card", "account", "transfer", "wallet", "ussd"],
      display_fee: true, // true
      display_type: "embed", //inline
      logo: "logo_url | base64",
    },
  };

  return (
    <SeerbitCheckout
      className="btn seerbit-btn"
      type="div"
      tranref={options.tranref}
      currency={"NGN"}
      description={"test"}
      country={"NG"}
      clientappcode="app1"
      public_key={options.public_key}
      callback={callback}
      close={close}
      scriptStatus={checkProgress}
      amount={options.amount}
      tag={"button"}
      full_name={"John Doe"}
      email={"a@b.com"}
      mobile_no={"00000000000"}
      tokenize={false}
      customization={options.customization}
      version={"2"}
      title={"Pay with SeerBit"}
      planId={options.planId}
    />
  );
};


export default App