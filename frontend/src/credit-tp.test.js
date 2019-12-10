import callApi from './credit-tp-api';
import render from './credit-tp';

// credit-tp-api.jsをモックする
jest.mock('./credit-tp-api');

describe('credit-tp', () => {
	describe('default rendering', () => {
		let $root;
		let $primaryAccountNumber;
		let $primaryAccountNumberLabel;
		let $primaryAccountNumberField;
		let $cardIcon;
		let $expirationDate;
		let $expirationDateLabel;
		let $expirationDateField;
		let $securityCode;
		let $securityCodeLabel;
		let $securityCodeField;
		let $paymentBtn;
		let $paymentBtnButton;

		beforeEach(() => {
			document.body.innerHTML = '<div id="sunarch-credit"></div>';

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumber = $root.children[0];
			$primaryAccountNumberLabel = $primaryAccountNumber.querySelector('label');
			$primaryAccountNumberField = $primaryAccountNumber.querySelector('input');
			$cardIcon = $primaryAccountNumber.querySelector('img');
			$expirationDate = $root.children[1];
			$expirationDateLabel = $expirationDate.querySelector('label');
			$expirationDateField = $expirationDate.querySelector('input');
			$securityCode = $root.children[2];
			$securityCodeLabel = $securityCode.querySelector('label');
			$securityCodeField = $securityCode.querySelector('input');
			$paymentBtn = $root.children[3];
			$paymentBtnButton = $paymentBtn.querySelector('button');
		});

		describe('primary account number', () => {
			it('has default class', () => {
				expect($primaryAccountNumber.className)
					.toBe('sunarch-credit-css-primary-account-number');
			});
		});

		describe('primary account number label', () => {
			it('has default class', () => {
				expect($primaryAccountNumberLabel.className)
					.toBe('sunarch-credit-css-primary-account-number-label');
			});

			it('has default text', () => {
				expect($primaryAccountNumberLabel.textContent)
					.toBe('カード番号');
			});
		});

		describe('primary account number field', () => {
			it('has default class', () => {
				expect($primaryAccountNumberField.className)
					.toBe('sunarch-credit-css-primary-account-number-field');
			});

			it('has default placeholder', () => {
				expect($primaryAccountNumberField.placeholder)
					.toBe('#### #### #### ####');
			});
		});

		describe('card-icon', () => {
			it('has default class', () => {
				expect($cardIcon.className)
					.toBe('sunarch-credit-css-card-icon');
			});
		});

		describe('expiration date', () => {
			it('has default class', () => {
				expect($expirationDate.className)
					.toBe('sunarch-credit-css-expiration-date');
			});
		});

		describe('expiration date label', () => {
			it('has default class', () => {
				expect($expirationDateLabel.className)
					.toBe('sunarch-credit-css-expiration-date-label');
			});

			it('has default text', () => {
				expect($expirationDateLabel.textContent)
					.toBe('有効期限');
			});
		});

		describe('expiration date field', () => {
			it('has default class', () => {
				expect($expirationDateField.className)
					.toBe('sunarch-credit-css-expiration-date-field');
			});

			it('has default placeholder', () => {
				expect($expirationDateField.placeholder)
					.toBe("MM / 'YY");
			});
		});

		describe('security code', () => {
			it('has default class', () => {
				expect($securityCode.className)
					.toBe('sunarch-credit-css-security-code');
			});
		});

		describe('security code label', () => {
			it('has default class', () => {
				expect($securityCodeLabel.className)
					.toBe('sunarch-credit-css-security-code-label');
			});

			it('has default text', () => {
				expect($securityCodeLabel.textContent)
					.toBe('セキュリティコード');
			});
		});

		describe('security code field', () => {
			it('has default class', () => {
				expect($securityCodeField.className)
					.toBe('sunarch-credit-css-security-code-field');
			});

			it('has default placeholder', () => {
				expect($securityCodeField.placeholder)
					.toBe('');
			});
		});

		describe('payment btn', () => {
			it('has default class', () => {
				expect($paymentBtn.className)
					.toBe('sunarch-credit-css-payment-btn');
			});
		});

		describe('payment btn button', () => {
			it('has default class', () => {
				expect($paymentBtnButton.className)
					.toBe('sunarch-credit-css-payment-btn-button');
			});

			it('has default text', () => {
				expect($paymentBtnButton.textContent)
					.toBe('購入');
			});
		});
	});

	describe('custom rendering', () => {
		let $root;
		let $primaryAccountNumber;
		let $primaryAccountNumberLabel;
		let $primaryAccountNumberField;
		let $cardIcon;
		let $expirationDate;
		let $expirationDateLabel;
		let $expirationDateField;
		let $securityCode;
		let $securityCodeLabel;
		let $securityCodeField;
		let $paymentBtn;
		let $paymentBtnButton;

		beforeEach(() => {
			document.body.innerHTML = `
				<div id="sunarch-credit"
				  primary-account-number-class="custom-primary-account-number"
				  primary-account-number-label-class="custom-primary-account-number-label"
					primary-account-number-label-text="Card number"
					primary-account-number-field-class="custom-primary-account-number-field"
					primary-account-number-field-placeholder="Enter number"
					card-icon-class="custom-card-icon"
					expiration-date-class="custom-expiration-date"
					expiration-date-label-class="custom-expiration-date-label"
					expiration-date-label-text="Expiration date"
					expiration-date-field-class="custom-expiration-date-field"
					expiration-date-field-placeholder="Enter date"
					security-code-class="custom-security-code"
					security-code-label-class="custom-security-code-label"
					security-code-label-text="Security code"
					security-code-field-class="custom-security-code-field"
					security-code-field-placeholder="Enter code"
					payment-btn-class="custom-payment-btn"
					payment-btn-button-class="custom-payment-btn-button"
					payment-btn-button-text="Buy"
				></div>
			`;

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumber = $root.children[0];
			$primaryAccountNumberLabel = $primaryAccountNumber.querySelector('label');
			$primaryAccountNumberField = $primaryAccountNumber.querySelector('input');
			$cardIcon = $primaryAccountNumber.querySelector('img');
			$expirationDate = $root.children[1];
			$expirationDateLabel = $expirationDate.querySelector('label');
			$expirationDateField = $expirationDate.querySelector('input');
			$securityCode = $root.children[2];
			$securityCodeLabel = $securityCode.querySelector('label');
			$securityCodeField = $securityCode.querySelector('input');
			$paymentBtn = $root.children[3];
			$paymentBtnButton = $paymentBtn.querySelector('button');
		});

		describe('primary account number', () => {
			it('has specified class', () => {
				expect($primaryAccountNumber.className)
					.toBe('custom-primary-account-number');
			});
		});

		describe('primary account number label', () => {
			it('has specified class', () => {
				expect($primaryAccountNumberLabel.className)
					.toBe('custom-primary-account-number-label');
			});

			it('has specified text', () => {
				expect($primaryAccountNumberLabel.textContent)
					.toBe('Card number');
			});
		});

		describe('primary account number field', () => {
			it('has specified class', () => {
				expect($primaryAccountNumberField.className)
					.toBe('custom-primary-account-number-field');
			});

			it('has specified placeholder', () => {
				expect($primaryAccountNumberField.placeholder)
					.toBe('Enter number');
			});
		});

		describe('card-icon', () => {
			it('has specified class', () => {
				expect($cardIcon.className)
					.toBe('custom-card-icon');
			});
		});

		describe('expiration date', () => {
			it('has specified class', () => {
				expect($expirationDate.className)
					.toBe('custom-expiration-date');
			});
		});

		describe('expiration date label', () => {
			it('has specified class', () => {
				expect($expirationDateLabel.className)
					.toBe('custom-expiration-date-label');
			});

			it('has specified text', () => {
				expect($expirationDateLabel.textContent)
					.toBe('Expiration date');
			});
		});

		describe('expiration date field', () => {
			it('has specified class', () => {
				expect($expirationDateField.className)
					.toBe('custom-expiration-date-field');
			});

			it('has specified placeholder', () => {
				expect($expirationDateField.placeholder)
					.toBe("Enter date");
			});
		});

		describe('security code', () => {
			it('has specified class', () => {
				expect($securityCode.className)
					.toBe('custom-security-code');
			});
		});

		describe('security code label', () => {
			it('has specified class', () => {
				expect($securityCodeLabel.className)
					.toBe('custom-security-code-label');
			});

			it('has specified text', () => {
				expect($securityCodeLabel.textContent)
					.toBe('Security code');
			});
		});

		describe('security code field', () => {
			it('has specified class', () => {
				expect($securityCodeField.className)
					.toBe('custom-security-code-field');
			});

			it('has specified placeholder', () => {
				expect($securityCodeField.placeholder)
					.toBe('Enter code');
			});
		});

		describe('payment btn', () => {
			it('has specified class', () => {
				expect($paymentBtn.className)
					.toBe('custom-payment-btn');
			});
		});

		describe('payment btn button', () => {
			it('has specified class', () => {
				expect($paymentBtnButton.className)
					.toBe('custom-payment-btn-button');
			});

			it('has specified text', () => {
				expect($paymentBtnButton.textContent)
					.toBe('Buy');
			});
		});
	});

	describe('validation check', () => {
		let $root;
		let $primaryAccountNumberField;
		let $expirationDateField;
		let $paymentBtnButton;

		beforeEach(() => {
			document.body.innerHTML = `
				<div id="sunarch-credit"
					base-url="http://localhost/test"
					payment-id="test-payment-id"
					payment-signature="test-payment-signature"
				></div>
			`;

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumberField = document.querySelector('#sunarch-credit-primary-account-number-field-id');
			$expirationDateField = document.querySelector('#sunarch-credit-expiration-date-field-id');
			$paymentBtnButton = document.querySelector('#sunarch-credit-payment-btn-button-id');
		});

		describe('invalid primary account number', () => {
			beforeEach(() => {
				$primaryAccountNumberField.value = 'invalid';
				$expirationDateField.value = '0122';
				$paymentBtnButton.click();
			});

			it('sunarch-bg-warning class added', () => {
				expect($primaryAccountNumberField.classList.contains('sunarch-bg-warning')).toBe(true);
			});

			it('credit-tp-api not called', () => {
				expect(callApi.mock.calls.length).toBe(0);
			});
		});

		describe('invalid expiration date', () => {
			beforeEach(() => {
				$primaryAccountNumberField.value = '12345678901234';
				$expirationDateField.value = 'invalid';
				$paymentBtnButton.click();
			});

			it('sunarch-bg-warning class added', () => {
				expect($expirationDateField.classList.contains('sunarch-bg-warning')).toBe(true);
			});

			it('credit-tp-api not called', () => {
				expect(callApi.mock.calls.length).toBe(0);
			});
		});

		describe('valid all', () => {
			beforeEach(() => {
				callApi.mockImplementation(() => new Promise((resolve, reject) => {
					resolve({
						status: 'OK',
						processing_time: 10
					});
				}));

				$primaryAccountNumberField.value = '12345678901234';
				$expirationDateField.value = '0122';
				$paymentBtnButton.click();
			});

			afterEach(() => {
				callApi.mockClear();
			});

			it('credit-tp-api called', () => {
				expect(callApi).toHaveBeenCalledTimes(1);
				expect(callApi).toHaveBeenCalledWith(
					'http://localhost/test/payment',
					{
						payment_id: 'test-payment-id',
						ephemeral_key: 'test-payment-signature',
						primary_account_number: '12345678901234',
						expiration_date: '0122'
					}
				);
			});
		});
	});
	
	describe('events', () => {
		let $root;
		let $primaryAccountNumberField;
		let $expirationDateField;
		let $paymentBtnButton;
		let preprocessingHandler;
		let successHandler;
		let pendingHandler;
		let errorHandler;
		let completeHandler;

		beforeEach(() => {
			document.body.innerHTML = `
				<div id="sunarch-credit"
					base-url="http://localhost/test"
					payment-id="test-payment-id"
					payment-signature="test-payment-signature"
				></div>
			`;

			render();

			$root = document.querySelector('#sunarch-credit');
			$primaryAccountNumberField = document.querySelector('#sunarch-credit-primary-account-number-field-id');
			$expirationDateField = document.querySelector('#sunarch-credit-expiration-date-field-id');
			$paymentBtnButton = document.querySelector('#sunarch-credit-payment-btn-button-id');

			$primaryAccountNumberField.value = '12345678901234';
			$expirationDateField.value = '0122';

			preprocessingHandler = jest.fn();
			successHandler = jest.fn();
			pendingHandler = jest.fn();
			errorHandler = jest.fn();
			completeHandler = jest.fn();

			$root.addEventListener('preprocessing', preprocessingHandler);
			$root.addEventListener('success', successHandler);
			$root.addEventListener('pending', pendingHandler);
			$root.addEventListener('error', errorHandler);
			$root.addEventListener('complete', completeHandler);
		});

		describe('api returns OK', () => {
			beforeEach(() => {
				callApi.mockImplementation(() => new Promise((resolve, reject) => {
					resolve({
						status: 'OK',
						processing_time: 10
					});
				}));
				$paymentBtnButton.click();
			});

			afterEach(() => {
				callApi.mockClear();
			});

			it('preprocessing event occurred', () => {
				expect(preprocessingHandler).toHaveBeenCalledTimes(1);
			});

			it('success event occurred', () => {
				expect(successHandler).toHaveBeenCalledTimes(1);
				expect(successHandler.mock.calls[0][0].detail).toEqual({
					processing_time: 10
				})
			});

			it('complete event occurred', () => {
				expect(completeHandler).toHaveBeenCalledTimes(1);
			});
		});

		describe('api returns PENDING', () => {
			beforeEach(() => {
				callApi.mockImplementation(() => new Promise((resolve, reject) => {
					resolve({
						status: 'PENDING',
						processing_time: 10
					});
				}));
				$paymentBtnButton.click();
			});

			afterEach(() => {
				callApi.mockClear();
			});

			it('preprocessing event occurred', () => {
				expect(preprocessingHandler).toHaveBeenCalledTimes(1);
			});

			it('pending event occurred', () => {
				expect(pendingHandler).toHaveBeenCalledTimes(1);
				expect(pendingHandler.mock.calls[0][0].detail).toEqual({
					processing_time: 10
				});
			});

			it('complete event occurred', () => {
				expect(completeHandler).toHaveBeenCalledTimes(1);
			});
		});

		describe('api returns ERROR', () => {
			beforeEach(() => {
				callApi.mockImplementation(() => new Promise((resolve, reject) => {
					resolve({
						status: 'ERROR',
						processing_time: 10
					});
				}));
				$paymentBtnButton.click();
			});

			afterEach(() => {
				callApi.mockClear();
			});

			it('preprocessing event occurred', () => {
				expect(preprocessingHandler).toHaveBeenCalledTimes(1);
			});

			it('error event occurred', () => {
				expect(errorHandler).toHaveBeenCalledTimes(1);
				expect(errorHandler.mock.calls[0][0].detail).toEqual({
					processing_time: 10
				});
			});

			it('complete event occurred', () => {
				expect(completeHandler).toHaveBeenCalledTimes(1);
			});
		});

		describe('api throws Error', () => {
			beforeEach(() => {
				callApi.mockImplementation(() => new Promise((resolve, reject) => {
					reject(new Error());
				}));
				$paymentBtnButton.click();
			});

			afterEach(() => {
				callApi.mockClear();
			});

			it('preprocessing event occurred', () => {
				expect(preprocessingHandler).toHaveBeenCalledTimes(1);
			});

			it('error event occurred', () => {
				expect(errorHandler).toHaveBeenCalledTimes(1);
			});

			it('complete event occurred', () => {
				expect(completeHandler).toHaveBeenCalledTimes(1);
			});
		})
	});
});
