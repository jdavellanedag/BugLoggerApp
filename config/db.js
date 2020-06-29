const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    const cnn = await mongoose.connect("mongodb://192.168.0.30/db_buglogger", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectDB;
