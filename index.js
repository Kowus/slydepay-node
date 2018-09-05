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

  get getUser() {
    return this;
  }
  listPayOptions() {
    return invoice.listPayOptions(this.getUser);
  }
  createInvoice(options) {
    return invoice.createInvoice(this.getUser, options);
  }
  sendInvoice(options) {
    return invoice.sendInvoice(this.getUser, options);
  }
  checkPaymentStatus(options) {
    return invoice.checkPaymentStatus(this.getUser, options);
  }
  confirmTransaction(options) {
    return transactions.confirmTransaction(this.getUser, options);
  }
  cancelTransaction(options) {
    return transactions.cancelTransaction(this.getUser, options);
  }
}

Merchant.prototype.confirmTransaction = transactions.confirmTransaction;
Merchant.prototype.cancelTransaction = transactions.cancelTransaction;

module.exports = Merchant;
