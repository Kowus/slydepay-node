/*
 * slyde ==> index
 * Created By barnabasnomo on 2/16/18 at 6:01 PM
 * @soundtrack Flowers - Manny Keys
*/
const invoice = require('./lib/invoicing'),
  transactions = require('./lib/transaction');
const request = require('request');

class Merchant {
  constructor(merchant) {
    this.emailOrMobileNumber = merchant.emailOrMobileNumber;
    this.merchantKey = merchant.merchantKey;
  }

  listPayOptions() {
    const merchantKey = this.merchantKey,
      emailOrMobileNumber = this.emailOrMobileNumber;
    return new Promise((resolve, reject) => {
      request(
        {
          method: 'POST',
          json: {
            emailOrMobileNumber: emailOrMobileNumber,
            merchantKey: merchantKey
          },
          url: 'https://app.slydepay.com.gh/api/merchant/invoice/payoptions'
        },
        (err, response, body) => {
          if (err) {
            reject(err);
            return;
          }
          if (!body.success || body.errorCode) {
            reject({ code: body.errorCode, message: body.errorMessage });
            return;
          }
          resolve(body);
        }
      );
    });
  }
}

// Merchant.prototype.listPayOptions = invoice.listPayOptions;
Merchant.prototype.createInvoice = invoice.createInvoice;
Merchant.prototype.sendInvoice = invoice.sendInvoice;
Merchant.prototype.checkPaymentStatus = invoice.checkPaymentStatus;
Merchant.prototype.confirmTransaction = transactions.confirmTransaction;
Merchant.prototype.cancelTransaction = transactions.cancelTransaction;

module.exports = Merchant;
