import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header
      className="
        h-20
        border-b
        border-slate-800
        bg-slate-900/50
        backdrop-blur-md
        flex
        items-center
        justify-between
        px-8
      "
    >
      <h2 className="text-xl font-semibold">
        Support Dashboard
      </h2>

      <button
        className="
          h-10
          w-10
          rounded-full
          bg-slate-800
          flex
          items-center
          justify-center
        "
      >
        <Bell size={18} />
      </button>
    </header>
  );
};

export default Header;
