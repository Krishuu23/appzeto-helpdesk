import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import { useNavigate } from "react-router-dom";

const TicketTable = ({ tickets }) => {
    const navigate = useNavigate();
  return (

    <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-800 text-left">
            <th className="p-4">Title</th>
            <th className="p-4">Category</th>
            <th className="p-4">Priority</th>
            <th className="p-4">Status</th>
            <th className="p-4">Created</th>
          </tr>
        </thead>

        <tbody>
          {tickets.map((ticket) => (
           <tr
  key={ticket._id}
  onClick={() =>
    navigate(`/tickets/${ticket._id}`)
  }
  className="
    border-b
    border-slate-800
    hover:bg-slate-800/70
    cursor-pointer
    transition
  "
>
              <td className="p-4 font-medium">
                {ticket.title}
              </td>

              <td className="p-4">
                {ticket.category}
              </td>

             <td className="p-4">
  <PriorityBadge
    priority={ticket.priority}
  />
</td>

              <td className="p-4">
  <StatusBadge
    status={ticket.status}
  />
</td>

              <td className="p-4">
                {new Date(ticket.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketTable;