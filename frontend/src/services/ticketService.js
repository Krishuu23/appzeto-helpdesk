import api from "../api/axios";

export const getTickets = (params) => {
  return api.get("/tickets", { params });
};

export const getTicketById = (id) => {
  return api.get(`/tickets/${id}`);
};

export const getStats = () => {
  return api.get("/tickets/stats");
};

export const createTicket = (data) => {
  return api.post("/tickets", data);
};

export const updateStatus = (id, data) => {
  return api.patch(`/tickets/${id}/status`, data);
};

export const addComment = (id, data) => {
  return api.post(`/tickets/${id}/comments`, data);
};