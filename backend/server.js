import express from "express";
import mongoose from "mongoose";
import Cards from "./dbcards.js";
import Cors from "cors";
//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  "mongodb+srv://admin:wOJ5OdcTZ8Xjriux@cluster0.ary7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url);
const db = mongoose.connection;
db.on("error", () => {
  console.log("Error connecting to mongoDB");
});
db.once("open", () => {
  console.log("Connected successfully");
});

// API Endpoints
app.get("/", (req, res) => {
  res.status(200).send("hello");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard)
    .then((data) => {
      res.status(201).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/tinder/cards", (req, res) => {
  Cards.find()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
//Listener
app.listen(port, () => console.log(`server listening at port ${port}`));