require("./Config/MongoDB");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const BusSearchRouter = require("./Routes/BusSearchRouter");
const LoginRouter = require("./Routes/LoginRouter");
const SignUpRouter = require("./Routes/SignUpRouter");
const ForgotPasswordRouter = require("./Routes/ForgotPasswordRouter");
const ResetPasswordRouter = require("./Routes/ResetPasswordRouter");
const UpdatePasswordViaEmailRouter = require("./Routes/UpdatePasswordViaEmailRouter");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend for Bus booking website");
});

app.use("/busSearch", BusSearchRouter);
app.use("/user", LoginRouter);
app.use("/signUp", SignUpRouter);
app.use("/forgotPassword", ForgotPasswordRouter);
app.use("/reset", ResetPasswordRouter);
app.use("/updatePasswordViaEmail", UpdatePasswordViaEmailRouter);

const server = app.listen(4000, () => {
  console.log("Server running on port " + server.address().port);
});
