import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      default: "System",
    },
  },
  { timestamps: true }
);

const historySchema = new mongoose.Schema(
  {
    action: {
      type: String,
      required: true,
    },
    performedBy: {
      type: String,
      default: "System",
    },
    details: String,
  },
  { timestamps: true }
);

const ticketSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      enum: ["Technical", "Billing", "General", "Feature Request"],
      default: "General",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High"],
      default: "Medium",
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },

    assignedAgent: {
      type: String,
      default: null,
    },

    version: {
      type: Number,
      default: 1,
    },

    comments: [commentSchema],

    history: [historySchema],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Ticket", ticketSchema);