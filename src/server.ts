// import express from "express";
import { createServer } from "http";
import { app_express } from "./lib/express";
const port = 8080;
createServer(app_express()).listen(port, () =>
  console.log(`listen port is : ${port}`)
);
