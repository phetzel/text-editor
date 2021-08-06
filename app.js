const express = require("express");
const app = express();
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const texts = require("./routes/api/texts");
const User = require("./models/User");
const bodyParser = require("body-parser");

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("Connected to mongoDB"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  const user = new User({
    handle: "jim",
    email: "jim@jim.com",
    password: "jimmy",
  });
  user.save();
  res.send("Hello");
});

app.use("/api/users", users);
app.use("/api/users", texts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
