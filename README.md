<div align="center">
 <img width="400" valign="top" src="https://assets.seerbitapi.com/images/seerbit_logo_type.png">
</div>

<h1 align="center">
  <img width="60" valign="bottom" src="https://reactnative.dev/img/header_logo.svg" alt="ReactJS">
   SeerBit
</h1>

# Seerbit Checkout Wrapper for ReactJS

# Requirements
This module was built and tested using React 15.0.0 - 18.0.0

## Get Started

A simple way to add Seerbit to your React application

[![NPM](https://img.shields.io/npm/v/react-seerbit.svg)](https://www.npmjs.com/package/seerbit-reactjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save seerbit-reactjs
```

## Usage

```jsx
import React, { Component } from "react";
import SeerbitCheckout from "seerbit-reactjs"

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
```

Please checkout <a href='https://doc.seerbit.com'>Seerbit Documentation</a> for other available options you can add to the tag

## License

MIT © [seerbit](https://github.com/seerbit)
