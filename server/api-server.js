let app = require("express");
let fs = require("fs");
let bodyParser = require("body-parser");
let server = app();

// To Allow CROS Policy in server and domain specific API provider.

server.use(function(req, res, next) {
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
server.get("/api/customers", function(req, res) {
  console.log("inside customers");
  res.status(200).sendFile(customersDataFile);
});

//Create all customers details and getting response
server.post("/api/customers", function(req, res) {
//   fs.readFile('customersDataFile', 'utf8', function(err, contents) {
//     console.log(contents);
//     res.status(200).send(contents);
 
  
  fs.readFile(customersDataFile, 'utf8', (err, data) => {
    if (err) {
      return res.send(406,"Error while adding customer");
    }
    //.send(JSON.parse(data));
    let customers = JSON.parse(data);
    let lastId = customers[customers.length - 1].id;
    let newCustomer = {
      ...req.body, id:lastId+1
    }
      //res.status(200).send(newCustomer);
    customers.push(newCustomer)
    fs.writeFile(customersDataFile,JSON.stringify(customers, null, 2), () => {
      res.send(200,customers);
    
    }); 
    
  })


});




//Read all orders
server.get("/api/orders", function(req, res) {
  console.log("!helo manju");
  res.status(200).sendFile(ordersDataFile);
});

const PORT = 5000;

server.listen(PORT, () => {
});
