const express = require("express");
const app = express();
const models = require("./models");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const port = 3000;

//? sequelizer
var Sequelize = require("sequelize");
var sequelize = new Sequelize("crud_learn", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

//?port we are listening
app.listen(port, (req, res) => {
  console.log("Hi Mannan... i am listening you on port = ", port);
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

//GET
app.get("/allpersons", async (req, res) => {
  // let sqlQuery = "SELECT * FROM users";
  let output = await sequelize.query("SELECT * FROM person");
  res.send(output);
  console.log("====output=====", output);
});

// //Get using sequelize
app.get("/all", async (req, res) => {
  models.Person.findAll()
    .then((userResponse) => {
      res.status(200).json(userResponse);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

//Find by id
app.get("/one-person/:id", async (req, res) => {
  models.Person.findOne({
    where: { id: req.params.id },
  })
    .then((userResponse) => {
      res.status(200).json(userResponse);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});
