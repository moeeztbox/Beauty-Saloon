function Counter() {
  const stats = [
    { label: "Clients", target: 500 },
    { label: "Staff", target: 50 },
    { label: "Service", target: 100 },
    { label: "Treatments", target: 100 },
  ];

  return (
    <div className="bg-[#ffc4009e] text-white py-16">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="p-6 border-white great-vibes border-4 text-5xl"
          >
            <h1>{stat.label}</h1>
            <span className="font-bold">{stat.target}+</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Counter;
