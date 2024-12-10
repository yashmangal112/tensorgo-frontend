import React, { useState } from "react";
import axios from "axios";

const CustomerServiceForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [category, setCategory] = useState("General Queries");
  const [comments, setComments] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user._id || !category || !comments) {
      alert("Please provide all required fields.");
      return;
    }

    try {
      // Post request to backend API
      const response = await axios.post('http://localhost:5000/requests', {
        userId: user._id,
        category,
        comments,
      });

      if (response.status === 201) {
        alert("Request submitted successfully!");
        setComments("");
      }
    } catch (error) {
      console.error("Error submitting request:", error);
      alert("Failed to submit request. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Submit a Request</h2>
      <div className="mb-4">
        <label htmlFor="category" className="block text-gray-700 font-medium mb-2">Category</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option>General Queries</option>
          <option>Product Features Queries</option>
          <option>Product Pricing Queries</option>
          <option>Product Feature Implementation Requests</option>
        </select>
      </div>
      <div className="mb-6">
        <label htmlFor="comments" className="block text-gray-700 font-medium mb-2">Comments</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
          placeholder="Add your comments"
          rows="4"
          className="block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
      >
        Submit
      </button>
    </form>
  );
};

export default CustomerServiceForm;
