import { LayoutDashboard, Ticket } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside
  className="
    flex
    w-64
    min-h-screen
    border-r
    border-slate-800
    bg-slate-900
    flex-col
  "
>
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Appzeto
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Helpdesk System
        </p>
      </div>

      <nav className="flex flex-col gap-2 px-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive
                ? "bg-indigo-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          <LayoutDashboard size={18} />
          Dashboard
        </NavLink>

        <NavLink
          to="/tickets"
          className={({ isActive }) =>
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
              isActive
                ? "bg-indigo-600"
                : "hover:bg-slate-800"
            }`
          }
        >
          <Ticket size={18} />
          Tickets
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;