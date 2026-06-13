import express from "express";
import cors from "cors";
import morgan from "morgan";
import ticketRoutes from "./routes/ticket.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Appzeto Helpdesk API Running",
  });
});

app.use("/api/tickets", ticketRoutes);

export default app;