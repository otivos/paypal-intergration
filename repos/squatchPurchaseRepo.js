((squatchPurchaseRepo, paypal, ObjectID, mongoService, paymentService) => {
  squatchPurchaseRepo.BuySingle = (purchaseName, purchasePrice, 
    taxPrice, shippingPrice, itemCount, description, cb) => {
      
    };
 })
  (
    module.exports,
    require('paypal-rest-sdk'),
    require('mongodb').ObjectId,
    require('../services/mongoService'),
    require('../services/paymentService')
  );