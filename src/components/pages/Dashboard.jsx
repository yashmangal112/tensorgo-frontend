import React, { useState } from "react";
import CustomerServiceForm from "../CustomerServiceForm";
import RequestList from "../RequestsList";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedCategory, setSelectedCategory] = useState("General Queries");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome, {user?.name}</h1>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <CustomerServiceForm />

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Requests</h2>
            <div className="flex items-center mb-4">
              <label htmlFor="category" className="mr-4 text-gray-600">Filter by Category:</label>
              <select
                id="category"
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="p-2 border border-gray-300 rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option>General Queries</option>
                <option>Product Features Queries</option>
                <option>Product Pricing Queries</option>
                <option>Product Feature Implementation Requests</option>
              </select>
            </div>
            <RequestList category={selectedCategory} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
