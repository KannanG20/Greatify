import React from "react";

function LineCard({ name, percentage, status }) {
  return (
    <div className="bg-gray-100 rounded-lg border border-gray-200 text-xs p-2 flex gap-4 justify-between">
      <h6 className="flex-1 font-medium text-gray-900">{name}</h6>
      <span className="w-10">{percentage}</span>
      <span className="w-20 text-orange-500">{status}</span>
    </div>
  );
}

export default LineCard;
