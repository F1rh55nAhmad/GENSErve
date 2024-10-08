const mongoose = require("mongoose");

const donationBoxSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    amount: Number,
    refNo: String,
  },
  { timestamps: true }
);

const Donation = mongoose.model("Donation", donationBoxSchema);

module.exports = Donation;
