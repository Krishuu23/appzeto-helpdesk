import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import { getTicketById } from "../services/ticketService";

const TicketDetails = () => {
  const { id } = useParams();

  const [ticket, setTicket] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchTicket = async () => {
    try {
      const response = await getTicketById(id);

      console.log(response.data);

      setTicket(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTicket();
  }, [id]);

  if (loading) {
    return (
      <MainLayout>
        <p className="text-white">Loading...</p>
      </MainLayout>
    );
  }

  if (!ticket) {
    return (
      <MainLayout>
        <p className="text-red-400">Ticket not found</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h1 className="text-3xl font-bold">
            {ticket.title}
          </h1>

          <p className="text-slate-400 mt-4">
            {ticket.description}
          </p>
        </div>

        {/* Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Status
            </p>

            <p className="font-semibold mt-2">
              {ticket.status}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Priority
            </p>

            <p className="font-semibold mt-2">
              {ticket.priority}
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
            <p className="text-slate-400 text-sm">
              Category
            </p>

            <p className="font-semibold mt-2">
              {ticket.category}
            </p>
          </div>
        </div>

        {/* Comments */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Comments
          </h2>

          {ticket.comments?.length ? (
            <div className="space-y-4">
              {ticket.comments.map((comment, index) => (
                <div
                  key={index}
                  className="border border-slate-800 rounded-xl p-4"
                >
                  <p>{comment.message}</p>

                  <p className="text-slate-500 text-sm mt-2">
                    {comment.author}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">
              No comments available.
            </p>
          )}
        </div>

        {/* Activity Timeline */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">
            Activity Timeline
          </h2>

          {ticket.history?.length ? (
            <div className="space-y-4">
              {ticket.history.map((item, index) => (
                <div
                  key={index}
                  className="border-l-2 border-indigo-500 pl-4"
                >
                  <p className="font-medium">
                    {item.action}
                  </p>

                  {item.details && (
                    <p className="text-slate-400 text-sm">
                      {item.details}
                    </p>
                  )}

                  <p className="text-slate-500 text-xs mt-1">
                    {item.performedBy}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-slate-400">
              No activity found.
            </p>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default TicketDetails;