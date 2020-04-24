((express, server, bodyParser, fs) => {
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(express.static('pub'));

  server.use('/', (req, res) => {
    fs.readFile('./templates/home.html', (err, results) => {
      res.send(results.toString());
    });
  });

  server.use('/success/:orderId', (req, res) => {
    const orderId = request.params.orderId;
  });

  server.use('/cancel/:orderId', (req, res) => {
    const orderId = request.params.orderId;
  });

  server.use('/orderdetails/:orderId', (req, res) => {
    const orderId = request.params.orderId;
  });

  server.use('/refund/:orderId', (req, res) => {
    const orderId = request.params.orderId;
  });

  server.use('/recurring_success/:planId', (req, res) => {
    const planId = request.params.planId;
  });

  server.use('/recurring_cancel/:planId', (req, res) => {
    const planId = request.params.planId;
  });

  server.use('/recurring_orderdetails/:agreementId', (req, res) => {
    const agreementId = request.params.agreementId;
  });

  server.post('/buysingle', (req, res) => {
    const quantity = request.body.Quantity;
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
    require('fs')
  );
