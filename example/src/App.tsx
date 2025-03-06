import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSeerbitPayment, SeerbitButton } from 'seerbit-reactjs';

function App() {
	const options = {
		public_key: 'SBTESTPUBK_t4G16GCA1O51AV0Va3PPretaisXubSw1',
		amount: 100,
		tranref: new Date().getTime(),
		currency: 'NGN',
		email: 'test@mail.com',
		full_name: '',
		mobile_no: '',
		description: '',
		tokenize: false,
		planId: '',
		customization: {
			theme: {
				border_color: '#000000',
				background_color: '#004C64',
				button_color: '#0084A0',
			},
			payment_method: ['card', 'account', 'transfer', 'wallet', 'ussd'],
			display_fee: true, // true
			display_type: 'embed', //inline
			logo: 'logo_url | base64',
		},
	};

	const callback = (response: any, closeCheckout: any) => {
		console.log(response);

		setTimeout(() => closeCheckout(), 2000);
	};

	const paymentProps = {
		...options,
		callback,
		close: () => console.log('closed'),
	};

	// const PayButton = () => {
	// 	const initializePayment = useSeerbitPayment(
	// 		options,
	// 		callback,
	// 		() => console.log('closed'),
	// 	);
	// 	return <button onClick={initializePayment}>Pay</button>;
	// };

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<SeerbitButton
        text="test payment"
        className="app-btn"
        {...paymentProps}
      />
				{/* <PayButton /> */}
			</header>
		</div>
	);
}

export default App;
