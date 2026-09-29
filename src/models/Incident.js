const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema(
  {
    machine: {
      type: mongoose.Schema.Types.ObjectId,
    //   L'ObjectId qui se trouve dans machine correspond à un document du modèle Machine.
      ref: "Machine",
      required: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    reportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    status: {
      type: String,
      enum: ["open", "in_progress", "resolved"],
      default: "open"
    },

    resolutionNote: {
      type: String,
      trim: true
    },

    resolvedAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Incident", incidentSchema);