import React from "react";

function Cards({ icon, title, description }) {
  return (
    <div className="rounded-lg flex flex-col border shadow-sm border-gray-200 p-4 bg-white gap-4 justify-between">
      <div className="flex flex-col gap-2">
        {icon}
        <p className="text-xs text-gray-500">{description}</p>
      </div>

      <h5 className="text-base font-medium text-gray-900">{title}</h5>
    </div>
  );
}

export default Cards;
