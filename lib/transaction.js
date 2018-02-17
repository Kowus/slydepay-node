/*
 * slyde ==> transaction
 * Created By barnabasnomo on 2/17/18 at 2:36 AM
 * @soundtrack Jukai - Jhené Aiko
*/
const request = require('request'),
    bluebird = require('bluebird')
;

let confirmTransaction = bluebird.promisify((options, done) => {
    let merchantKey = this.merchantKey,
        emailOrMobileNumber = this.emailOrMobileNumber
    ;

    request({
        method: 'POST',
        url:'https://app.slydepay.com.gh/api/merchant/transaction/confirm',
        json:{
            emailOrMobileNumber:emailOrMobileNumber,
            merchantKey:merchantKey,
            orderCode:options.orderCode,
            payToken:options.payToken,
            transactionId:options.transactionId
        }
    },(err, response,body)=>{
        if (err) return done(err);
        if (!body.success || body.errorCode) return done(
            {
                code: body.errorCode,
                message: body.errorMessage

            });
        return done(null, body);
    });
});

let cancelTransaction = bluebird.promisify((options, done) => {
    let merchantKey = this.merchantKey,
        emailOrMobileNumber = this.emailOrMobileNumber
    ;

    request({
        method: 'POST',
        url:'https://app.slydepay.com.gh/api/merchant/transaction/cancel',
        json:{
            emailOrMobileNumber:emailOrMobileNumber,
            merchantKey:merchantKey,
            orderCode:options.orderCode,
            payToken:options.payToken,
            transactionId:options.transactionId
        }
    },(err, response,body)=>{
        if (err) return done(err);
        if (!body.success || body.errorCode) return done(
            {
                code: body.errorCode,
                message: body.errorMessage

            });
        return done(null, body);
    });
});

module.exports = {
    confirmTransaction,
    cancelTransaction
};