import React from "react";

function Counter() {
  const stats = [
    { label: "Teachers", target: 50 },
    { label: "Board Affiliation", target: 1 },
    { label: "Members", target: 10 },
    { label: "Graduates", target: 500 },
  ];

  return (
    <div className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-6 bg-blue-800 rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">{stat.target}+</h1>
            <span className="text-lg">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
