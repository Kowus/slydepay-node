/*
 * slyde ==> list-pay-options
 * Created By barnabasnomo on 2/16/18 at 6:01 PM
 * @soundtrack Flowers - Manny Keys
*/
const request = require('request'),
    bluebird = require('bluebird')
;

let listPayOptions = bluebird.promisify(done => {
    let merchantKey = this.merchantKey,
        emailOrMobileNumber = this.emailOrMobileNumber
    ;
    request({
        method: 'POST',
        json: {
            emailOrMobileNumber: emailOrMobileNumber,
            merchantKey: merchantKey
        },
        url: 'https://app.slydepay.com.gh/api/merchant/invoice/payoptions'
    }, (err, response, body) => {
        if (err) return done(err);
        if (!body.success || body.errorCode) return done(
            {
                error: {
                    code: body.errorCode,
                    message: body.errorMessage
                }
            });
        return done(null, body);
    });
});

module.exports = listPayOptions;