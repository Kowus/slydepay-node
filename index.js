/*
 * slyde ==> index
 * Created By barnabasnomo on 2/16/18 at 6:01 PM
 * @soundtrack Flowers - Manny Keys
*/

module.exports = Merchant;

function Merchant(merchant) {
    this.emailOrMobileNumber = merchant.emailOrMobileNumber;
    this.merchantKey = merchant.merchantKey;
}

Merchant.prototype.listPayOptions = require('./lib/list-pay-options');
