((express, server, bodyParser, fs, squatchPurchaseRepo) => {
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.static('pub'));

  /* ---------------------------------------------------------
  home page
  */
  server.get('/', (req, res) => {
    fs.readFile('./templates/home.html', (err, results) => {
      res.send(results.toString());
    });
  });
/* ----------------------------------------------------------- */


/* ---------------------single purchase-------------------- */
server.post('/buysingle', (req, res) => {
  let quantity = req.body.Quantity;
  let purchaseName = 'Single Squatch Habitat';
  let purchasePrice = 10.0;
  let taxPrice = 0;
  let shippingPrice = 0;
  let description = 'Single Habitat Sasquatch Starter Kit';

  squatchPurchaseRepo.BuySingle(purchaseName, purchasePrice, taxPrice, 
    shippingPrice, quantity, description, (err, url) => {
      if(err) {
        res.json(err);
      } else {
        res.redirect(url);
      }
    });
});

  server.use('/success/:orderID', (req, res) => {
    const orderID = req.params.orderID;
    res.send(orderID);
  });

  server.use('/cancel/:orderID', (req, res) => {
    const orderID = req.params.orderID;
  });

  server.use('/orderdetails/:orderID', (req, res) => {
    const orderID = req.params.orderID;
  });

  server.use('/refund/:orderID', (req, res) => {
    const orderID = req.params.orderID;
  });

  /* ---------Recurring Purchases---------- */

  server.use('/recurring_success/:planID', (req, res) => {
    const planID = req.params.planID;
  });

  server.use('/recurring_cancel/:planID', (req, res) => {
    const planID = req.params.planID;
  });

  server.use('/recurring_orderdetails/:agreementID', (req, res) => {
    const agreementID = req.params.agreementID;
  });

  server.post('/buyrecurring', (req, res) => {

  });


  server.listen(8080, 'localhost', (err) => {
    console.log(err || 'Server online');
  });
})
  (
    require('express'),
    require('express')(),
    require('body-parser'),
    require('fs'),
    require('./repos/squatchPurchaseRepo')
  );
