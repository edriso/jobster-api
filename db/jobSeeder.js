require("dotenv").config();
const Job = require("../models/job");
const connectDB = require("./connect");
const mockData = require("./jobs-mock-data");

const seed = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Job.create(mockData);
    console.log("Success!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seed();
