import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

console.log("enter")
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/tuiter'
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
// const CONNECTION_STRING = 'mongodb+srv://giuseppi:supersecretpassword@cluster0.vtczidj.mongodb.net/tuiter-sp23-06?retryWrites=true&w=majority'
console.log(CONNECTION_STRING)
console.log("end")

// connect to the remote database
mongoose.connect(CONNECTION_STRING);

// connect to the local database
// mongoose.connect("mongodb://127.0.0.1:27017/tuiter");

const app = express()
app.use(cors())
app.use(express.json());

HelloController(app)
UserController(app)
TuitsController(app);
app.listen(process.env.PORT || 4000);