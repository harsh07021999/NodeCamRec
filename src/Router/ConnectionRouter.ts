import express from "express";
import multer from "multer";
import path from "path";
import { randomUUID } from "crypto";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, path.resolve("./upload/"));
  },
  filename: (req, file, callback) => {
    callback(
      null,
      `${file.originalname.split(".")[0]}${randomUUID()}.${
        file.originalname.split(".")[1]
      }`
    );
  },
});

let upload = multer({ storage: storage });
// var upload = multer({ dest: __dirname + "\\uploads" });
let type = upload.single("file");

const ConnectoionRouter = express.Router();

ConnectoionRouter.get("/", async (req, res) => {
  const s = __dirname.split("\\");
  s.pop();

  const sa = s.join("\\");
  res.render("cam");
});

// ConnectoionRouter.get("/get", async (req, res) => {
//     const name = "unknown-video7c9c3573-01cc-4890-8327-f518e869b4a9.mkv"

// });

ConnectoionRouter.post("/save", type, async (req, res) => {
  console.log(type.toString());
  res.send("ok");
});

export default ConnectoionRouter;
