const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 10000
})
.then(() => {
  console.log("✅ Connected to MongoDB successfully!");
  process.exit();
})
.catch(err => {
  console.error("❌ MongoDB connection error:", err.message);
  process.exit(1);
});