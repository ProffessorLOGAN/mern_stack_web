const dotenv = require("dotenv");
const express = require("express");
const app = express();



// dotenv config

dotenv.config({ path: "./config/config.env" });
<<<<<<< Updated upstream
require("../src/db/database");
=======
require("./db/database");
>>>>>>> Stashed changes
app.use(express.json());

const PORT = process.env.PORT;

// using Router for user authentication
app.use( require("./route/auth.js"));


// middleware
const middleware = (req, res, next) => {
  console.log(`hello middleware`);
  next();
};

app.get("/", (req, res) => {
  res.send("hello world , Homepage");
});

app.get("/about", middleware, (req, res) => {
  res.send("hello world , About page ");
});

// app.get("/contact", (req, res) => {
//   res.send("hello world , contact page ");
// });

// app.get("/signin", (req, res) => {
//   res.send("hello world , sign in page");
// });

// app.get("/signup", (req, res) => {
//   res.send("hello world , register page ");
// });

app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
