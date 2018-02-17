/*
 * slyde ==> index
 * Created By barnabasnomo on 2/16/18 at 6:01 PM
 * @soundtrack Flowers - Manny Keys
*/
const invoice = require('./lib/invoicing'),
    transactions = require('./lib/transaction')
;

module.exports = Merchant;

function Merchant(merchant) {
    this.emailOrMobileNumber = merchant.emailOrMobileNumber;
    this.merchantKey = merchant.merchantKey;
}

Merchant.prototype.listPayOptions = invoice.listPayOptions;
Merchant.prototype.createInvoice = invoice.createInvoice;
Merchant.prototype.sendInvoice = invoice.sendInvoice;
Merchant.prototype.checkPaymentStatus = invoice.checkPaymentStatus;
Merchant.prototype.confirmTransaction = transactions.confirmTransaction;
Merchant.prototype.cancelTransaction = transactions.cancelTransaction;
