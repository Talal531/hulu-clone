import express from "express";

import authRoute from "./routes/auth.route";

import errorHandler from "./controllers/error.controller";

const app = express();

const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => res.send("Express + TypeScript Server"));

app.use("/api", authRoute);

app.use(function (req, res, next) {
  let err = {
    status: 404,
    message: "Not Found",
  };
  next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
