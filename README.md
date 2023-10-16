<br/>
<br/>
<br/>
<div align="center">
 <img width="200" valign="top" src="https://assets.seerbitapi.com/images/seerbit_logo_type.png">
</div>
<br/>
<br/>
<br/>

<!-- <h1 align="center">
  <img width="60" valign="bottom" src="https://reactnative.dev/img/header_logo.svg" alt="ReactJS">
   SeerBit
</h1> -->

### Seerbit Checkout Wrapper for ReactJS

# Requirements

This module was built and tested using React 15.0.0 - 18.0.0

## Get Started

A simple way to add Seerbit to your React application

<!-- [![NPM](https://img.shields.io/npm/v/react-seerbit.svg)](https://www.npmjs.com/package/seerbit-reactjs) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) -->

## Install

```bash
npm install --save seerbit-reactjs
```

OR

```bash
yarn add seerbit-reactjs
```

## Usage

Add Seerbit to your projects:

1. As a React Hook
2. As a React Button Component
   <br/>
   <br/>

### As React Hook
```jsx

import React, { Component } from "react";
import { useSeerbitPayment } from "seerbit-reactjs"

const App = () => {
    const options = {
    public_key: "YOUR_PUBLIC_KEY",
    amount: 100,
    tranref: new Date().getTime(),
    currency: "NGN",
    email: "test@mail.com",
    full_name: "Sam Smart",
    mobile_no: "081234566789",
    description: "test",
    tokenize: false,
    planId: "",
    pocketId: "",
    vendorId: "",
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

  const close = (close) => {
    console.log(close);
  };

  const callback = (response, closeCheckout) => {
    console.log(response);

    setTimeout(() => closeCheckout(), 2000);
  };

   const initializePayment = useSeerbitPayment(options, callback, close);


  return (
    <div>
      <h2>Make Payment</h2>
      <button onClick={initializePayment}>Pay</button>
    </div>
  );
};


export default App
```


### As Button Component

```jsx
import React, { Component } from "react";
import { SeerbitButton } from "seerbit-reactjs"

const App = () => {
    const options = {
    public_key: "YOUR_PUBLIC_KEY",
    amount: 100,
    tranref: new Date().getTime(),
    currency: "NGN",
    email: "test@mail.com",
    full_name: "Sam Smart",
    mobile_no: "081234566789",
    description: "test",
    tokenize: false,
    planId: "",
    pocketId: "",
    vendorId: "",
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

  const close = (close) => {
    console.log(close);
  };
  const callback = (response, closeCheckout) => {
    console.log(response);

    setTimeout(() => closeCheckout(), 2000);
  };

  const paymentProps = {
    ...options,
    callback,
    close,
  };

  return (
    <div>
      <h2>Make Payment</h2>
      <SeerbitButton text="test payment" className="app-btn" {...paymentProps} />
    </div>
  );
};


export default App
```

Please checkout <a href='https://doc.seerbit.com'>Seerbit Documentation</a> for other available options you can add to the tag

## License

MIT © [seerbit](https://github.com/seerbit)
