import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { getTickets } from "../services/ticketService";
import TicketTable from "../components/TicketTable";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";


const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");

  const fetchTickets = async () => {
    try {
      setLoading(true);

      const response = await getTickets({
        search,
        status,
        priority,
      });

      console.log(response.data);

      setTickets(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, [search, status, priority]);

  return (
    <MainLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">
            Tickets
          </h1>

          <p className="text-slate-400 mt-2">
            Manage and track support tickets
          </p>
        </div>

        {/* Search + Filters */}
        <div className="space-y-4">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <FilterBar
            status={status}
            priority={priority}
            onStatusChange={setStatus}
            onPriorityChange={setPriority}
          />
        </div>

        {/* Tickets Table */}
        {loading ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            Loading tickets...
          </div>
        ) : (
          <TicketTable tickets={tickets} />
        )}
      </div>
    </MainLayout>
  );
};

export default Tickets;