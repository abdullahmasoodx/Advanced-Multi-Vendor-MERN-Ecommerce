const mongoose = require("mongoose");
module.exports.dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("database is connected");
  } catch (error) {
    console.log("Sorry unable to connect with database");
  }
};
