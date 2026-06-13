import express from "express";

import {
  createTicket,
  getTickets,
  getTicketById,
  updateTicketStatus,
  addComment,
  getTicketStats,
} from "../controllers/ticket.controller.js";

const router = express.Router();

router.route("/")
  .post(createTicket)
  .get(getTickets);
  router.get("/stats", getTicketStats);

router.get("/:id", getTicketById);

router.patch("/:id/status", updateTicketStatus);
router.post("/:id/comments", addComment);

export default router;