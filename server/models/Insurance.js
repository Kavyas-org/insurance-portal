const mongoose = require("mongoose");

const insuranceSchema = new mongoose.Schema({
  name: String,
  refId: {
    type: String,
    unique: true
  },
  policyNumber: String,

  dob: Date,
  insuranceType: String,
  premiumAmount: Number,

  status: {
    type: String,
    default: "Pending"
  },

  document: String,
  image: String,

  tracking: [
    {
      title: String,
      status: String
    }
  ],

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Insurance", insuranceSchema);