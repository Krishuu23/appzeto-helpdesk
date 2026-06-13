import mongoose from "mongoose";
import Ticket from "../models/Ticket.js";

export const createTicket = async (req, res) => {
  try {
    const { title, description, category, priority } = req.body;

    const ticket = await Ticket.create({
      title,
      description,
      category,
      priority,
      history: [
        {
          action: "Ticket Created",
          performedBy: "User",
        },
      ],
    });

    res.status(201).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTickets = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      status,
      priority,
      category,
      search,
      sort = "-createdAt",
    } = req.query;

    const filter = {};

    if (status) filter.status = status;
    if (priority) filter.priority = priority;
    if (category) filter.category = category;

    // Search by title or description
    if (search) {
      filter.$or = [
        {
          title: {
            $regex: search,
            $options: "i",
          },
        },
        {
          description: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    console.log(filter);

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const tickets = await Ticket.find(filter)
      .sort(sort)
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const totalTickets = await Ticket.countDocuments(filter);

    res.status(200).json({
      success: true,
      count: tickets.length,
      totalTickets,
      totalPages: Math.ceil(totalTickets / limitNumber),
      currentPage: pageNumber,
      data: tickets,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTicketById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ticket ID",
      });
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      success: true,
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateTicketStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = [
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
];

if (!allowedStatuses.includes(status)) {
  return res.status(400).json({
    success: false,
    message: "Invalid status",
  });
}

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ticket ID",
      });
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    const previousStatus = ticket.status;

    ticket.status = status;

    ticket.history.push({
      action: "Status Changed",
      performedBy: "Agent",
      details: `${previousStatus} → ${status}`,
    });

    await ticket.save();

    res.status(200).json({
      success: true,
      message: "Status updated successfully",
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { message, author = "User" } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ticket ID",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Comment message is required",
      });
    }

    const ticket = await Ticket.findById(id);

    if (!ticket) {
      return res.status(404).json({
        success: false,
        message: "Ticket not found",
      });
    }

    ticket.comments.push({
      message,
      author,
    });

    ticket.history.push({
      action: "Comment Added",
      performedBy: author,
      details: message,
    });

    await ticket.save();

    res.status(200).json({
      success: true,
      message: "Comment added successfully",
      data: ticket,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getTicketStats = async (req, res) => {
  try {
    const stats = await Ticket.aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ]);

    const result = {
      total: 0,
      open: 0,
      inProgress: 0,
      resolved: 0,
      closed: 0,
    };

    stats.forEach((item) => {
      result.total += item.count;

      if (item._id === "Open") result.open = item.count;
      if (item._id === "In Progress") result.inProgress = item.count;
      if (item._id === "Resolved") result.resolved = item.count;
      if (item._id === "Closed") result.closed = item.count;
    });

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};