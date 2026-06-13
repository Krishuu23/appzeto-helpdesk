import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import StatsCard from "../components/StatsCard";
import { getStats } from "../services/ticketService";

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
    closed: 0,
  });

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await getStats();
      setStats(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Overview of your helpdesk system
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">
          <StatsCard title="Total Tickets" value={stats.total} />
          <StatsCard title="Open" value={stats.open} />
          <StatsCard title="In Progress" value={stats.inProgress} />
          <StatsCard title="Resolved" value={stats.resolved} />
          <StatsCard title="Closed" value={stats.closed} />
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;