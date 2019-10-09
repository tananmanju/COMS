let app = require("express");
let fs = require("fs");
let bodyParser = require("body-parser");
let server = app();

// To Allow CROS Policy in server and domain specific API provider.
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
const customersDataFile = __dirname + "/data/customers.json";
const ordersDataFile = __dirname + "/data/orders.json";

//Read all customers details and getting response
server.get("/api/customers", function (req, res) {
  console.log("inside customers");
  res.status(200).sendFile(customersDataFile);
});

//Create all customers details and getting response
server.post("/api/customers", function (req, res) {
  fs.readFile(customersDataFile, 'utf8', (err, data) => {
    if (err) {
      return res.send(406, "Error while adding customer");
    }
    let customers = JSON.parse(data);
    let lastId = customers[customers.length - 1].id;
    let newCustomer = {
      ...req.body, id: lastId + 1
    }
    //adding new customer in json file
    customers.push(newCustomer)
    fs.writeFile(customersDataFile, JSON.stringify(customers, null, 2), () => {
      res.send(200, customers);

    });

  })
});

//read one customer data
server.get('/api/orders/:customerId', function (req, res) {
  console.log("Just running /api/orders/:customerId REST URI!!");
  let customerId = parseInt(req.params.customerId);
  console.log(customerId);
  fs.readFile(ordersDataFile, 'utf8', (err, data) => {
    if (err) {
      return res.send(406, "Error while fetching  customer order");
    }
    let orders = JSON.parse(data);

    let userOrders = orders.filter(order => order.customerId === customerId);

    res.status(200).send(userOrders);
  });
});

//Read all orders
server.get("/api/orders", function (req, res) {
  console.log("!helo manju");
  res.status(200).sendFile(ordersDataFile);
});


//read all order data according to order id 
server.get('/api/orders/:orderId', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.orderId == req.params.orderId));
});
//read order according to Payment Status 
server.get('/api/orders/payStatus/:status', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item => item.payStatus == req.params.status));
});



//read order according to Fulfillment Status 
server.get('/api/orders/fulfillStatus/:status', function (req, res) {
  console.log(req.params);
  res.status(200).send(order.filter(item =>  (item.fulfillStatus).toString() == req.params.status));
});

const PORT = 5000;

server.listen(PORT, () => {
  console.log(`API Server is ready on port ${PORT}`);
});
