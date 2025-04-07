import React from "react";

function Counter() {
  const stats = [
    { label: "Clients", target: 500 },
    { label: "Staff", target: 50 },
    { label: "Service", target: 100 },
    { label: "Treatments", target: 100 },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 mt-2">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 border-pink-400 border-2 rounded-lg shadow-lg"
          >
            <h1 className="text-4xl font-bold">{stat.target}+</h1>
            <span className="text-4xl">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
