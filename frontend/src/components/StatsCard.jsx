import { motion } from "framer-motion";

const StatsCard = ({ title, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="
        bg-slate-900
        border
        border-slate-800
        rounded-2xl
        p-6
        shadow-lg
      "
    >
      <p className="text-slate-400 text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3">
        {value}
      </h2>
    </motion.div>
  );
};

export default StatsCard;