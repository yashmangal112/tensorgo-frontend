import React, { useEffect, useState } from "react";
import axios from "axios";

const RequestList = ({ category }) => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const encodedCategory = encodeURIComponent(category);
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/requests/${encodedCategory}`
        );
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching requests:", error);
      }
    };

    fetchRequests();
  }, [category]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      {requests.length === 0 ? (
        <p className="text-center text-gray-600">No requests in this category.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((req) => (
            <li
              key={req._id}
              className="border-b border-gray-200 pb-4 hover:bg-gray-50 transition duration-300 ease-in-out"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold text-lg text-gray-800">{req.user.name}</p>
              </div>
              <p className="text-gray-700 mt-2"><strong>Request</strong> - {req.comments}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestList;
