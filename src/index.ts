console.log("Hi");

import express from "express";
import UserRouter from "./Router/UserRouter";
import ConnectoionRouter from "./Router/ConnectionRouter";
import path from "path";
import bodyParser from "body-parser";

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "pug");

app.use("/auth", UserRouter);

app.use("/connect", ConnectoionRouter);

// app.use("/conn", ConnectoionRouter)

app.listen(3000, () => {
  console.log("Listening on 3000");
});
