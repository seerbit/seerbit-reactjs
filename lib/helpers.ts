export interface seerbitPayTypes {
	tranref: string | number;
	currency: string;
	description?: string;
	country?: string;
	amount: string | number;
	callbackurl?: string;
	public_key: string;
	full_name?: string;
	email: string;
	mobile_no?: string;
	tokenize?: boolean;
	planId?: string;
	pocketId?: string;
	vendorId?: string;
	customization?: {
		theme: {
			border_color: string;
			background_color: string;
			button_color: string;
		};
		payment_method: string[];
		display_fee: boolean;
		display_type: string;
		logo: string;
	};
}

export interface PaymentBreakdown {
	amount: number;
	fee: number;
	total: number;
}
export interface Customers {
	customerName: string;
	customerMobile: string;
	customerEmail: string;
	fee: string;
}

export interface Payments {
	redirectLink: string;
	amount: number;
	fee: string;
	mobilenumber: string;
	publicKey: string;
	paymentType: string;
	productId: string;
	maskedPan: string;
	gatewayMessage: string;
	gatewayCode: string;
	gatewayref: string;
	businessName: string;
	mode: string;
	redirecturl: string;
	channelType: string;
	deviceType: string;
	cardBin: string;
	lastFourDigits: string;
	country: string;
	currency: string;
	paymentReference: string;
	paymentBreakdown: PaymentBreakdown;
	reason: string;
	transactionProcessedTime: string;
	meta: any;
}

export type responseType = {
	code: string;
	message: string;
	payments: Payments;
	customers: Customers;
};

export function seerbitPay(
	options: seerbitPayTypes,
	callback?: (response: any, closeCheckout: () => {}) => void,
	close?: () => void
) {
	// @ts-ignore
	window.SeerbitPay && window.SeerbitPay(options, callback, close);
}
