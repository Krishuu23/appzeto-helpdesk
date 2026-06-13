const FilterBar = ({
  status,
  priority,
  onStatusChange,
  onPriorityChange,
}) => {
  return (
    <div className="flex flex-wrap gap-4">
      <select
        value={status}
        onChange={(e) =>
          onStatusChange(e.target.value)
        }
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          px-4
          py-3
        "
      >
        <option value="">
          All Statuses
        </option>

        <option value="Open">
          Open
        </option>

        <option value="In Progress">
          In Progress
        </option>

        <option value="Resolved">
          Resolved
        </option>

        <option value="Closed">
          Closed
        </option>
      </select>

      <select
        value={priority}
        onChange={(e) =>
          onPriorityChange(e.target.value)
        }
        className="
          bg-slate-900
          border
          border-slate-800
          rounded-xl
          px-4
          py-3
        "
      >
        <option value="">
          All Priorities
        </option>

        <option value="High">
          High
        </option>

        <option value="Medium">
          Medium
        </option>

        <option value="Low">
          Low
        </option>
      </select>
    </div>
  );
};

export default FilterBar;