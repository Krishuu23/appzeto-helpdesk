import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 min-h-screen">
          <Header />

          <main className="p-6 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;