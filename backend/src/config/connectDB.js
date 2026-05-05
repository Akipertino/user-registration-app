const mongoose = require("mongoose");

exports.connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "mongodb://0.0.0.0:27017/userdb",
      {
        serverSelectionTimeoutMs: 8000,
      },
    );
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.log("Unable to connect to mongoDB. Stopping server...");
    // process.exit(1);
  }
};
