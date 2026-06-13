const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search tickets..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        bg-slate-900
        border
        border-slate-800
        rounded-xl
        px-4
        py-3
        text-white
        outline-none
        focus:border-indigo-500
      "
    />
  );
};

export default SearchBar;