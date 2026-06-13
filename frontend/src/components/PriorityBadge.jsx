const PriorityBadge = ({ priority }) => {
  const styles = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  };

  return (
    <span
      className={`font-semibold ${styles[priority]}`}
    >
      {priority}
    </span>
  );
};

export default PriorityBadge;