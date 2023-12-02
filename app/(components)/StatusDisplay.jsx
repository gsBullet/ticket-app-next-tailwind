const StatusDisplay = ({ status }) => {
  function getColor(status) {
    let color = "bg-slate-200";
    switch (status.toLowerCase()) {
      case "end":
        color = "bg-green-400";
        return color;
      case "started":
        color = "bg-yellow-400";
        return color;
      case "not started":
        color = "bg-red-400";
        return color;
    }
    return color;
  }
  return (
    <span className={`inline-block rounded-full px-2 py-2 text-xs font-semibold text-gray-700 ${getColor(status)} `}>
      {status}
    </span>
  );
};

export default StatusDisplay;
