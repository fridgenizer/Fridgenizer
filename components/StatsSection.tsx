export default function StatsSection() {
  const stats = [
    {
      number: "30%",
      title: "Less Food Waste",
      description: "Reduce unnecessary waste through smart expiration tracking.",
    },
    {
      number: "€450",
      title: "Average Savings",
      description: "Typical yearly savings for an active household.",
    },
    {
      number: "10k+",
      title: "AI Recipes",
      description: "Recipes generated from the ingredients you already have.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">
      <h2 className="mb-12 text-center text-4xl font-bold text-white">
        Why Fridgenizer?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-3xl border border-white/10 bg-[#141A21] p-8 text-center"
          >
            <div className="text-5xl font-bold text-green-400">
              {stat.number}
            </div>

            <h3 className="mt-5 text-2xl font-bold text-white">
              {stat.title}
            </h3>

            <p className="mt-4 text-gray-400">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}