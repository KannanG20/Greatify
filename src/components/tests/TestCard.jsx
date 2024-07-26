import React from "react";
import { useNavigate } from "react-router-dom";

function TestCard({ title, description, text, status }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/tests/1");
  };
  return (
    <div className="p-4 rounded-lg w-[250px] border border-gray-200 bg-white flex flex-col gap-4 justify-between">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">
          <h5 className="font-semibold text-gray-900">{title}</h5>
          <p className="font-medium">{description}</p>
        </div>

        <div className="flex justify-between gap-4 items-center">
          <span className="bg-green-100 font-medium px-3 text-xs py-1 w-max rounded-md text-green-500 border border-green-500">
            {status}
          </span>

          {text && (
            <span className="text-green-500 font-medium text-xs">{text}</span>
          )}
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between gap-4  items-center">
        <div className="flex flex-col">
          <h5 className="text-sm font-medium text-gray-500">Total marks</h5>
          <span className="text-gray-900 font-medium text-lg">100</span>
        </div>

        {text && (
          <button
            onClick={handleNavigate}
            onCl
            className="border text-sm border-[#00373A]/60 text-white font-medium px-3 py-2 rounded-lg bg-gradient-to-r from-green-500 from-80% to-green-600"
          >
            Start test
          </button>
        )}
      </div>
    </div>
  );
}

export default TestCard;
