const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema(
  {
    reference: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    name: {
      type: String,
      required: true,
      trim: true
    },

    workshop: {
      type: String,
      required: true,
      trim: true
    },

    status: {
      type: String,
      enum: ["available", "maintenance", "out_of_service"],
      default: "available"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Machine", machineSchema);