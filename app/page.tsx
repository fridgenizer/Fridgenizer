export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">

        <span className="mb-4 rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
          🚀 Coming Soon
        </span>

        <h1 className="max-w-5xl text-6xl font-bold leading-tight md:text-8xl">
          Your fridge should do
          <br />
          more than keep food cold.
        </h1>

        <p className="mt-8 max-w-2xl text-xl text-gray-400">
          Meet Fridgenizer — the AI-powered kitchen assistant that helps you
          reduce food waste, save money and discover recipes with ingredients
          you already have.
        </p>

        <div className="mt-12 flex gap-5">

          <button className="rounded-full bg-green-500 px-8 py-4 text-lg font-semibold transition hover:bg-green-400">
            Get Early Access
          </button>

          <button className="rounded-full border border-gray-600 px-8 py-4 text-lg transition hover:border-white">
            Learn More
          </button>

        </div>

      </section>

      {/* Features */}

      <section className="mx-auto grid max-w-7xl gap-8 px-8 pb-32 md:grid-cols-3">

        <div className="rounded-3xl bg-[#141A21] p-8">
          <div className="mb-5 text-5xl">🥬</div>
          <h2 className="text-2xl font-bold">
            Reduce Food Waste
          </h2>
          <p className="mt-3 text-gray-400">
            Never forget what's inside your fridge again.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141A21] p-8">
          <div className="mb-5 text-5xl">🤖</div>
          <h2 className="text-2xl font-bold">
            AI Recipes
          </h2>
          <p className="mt-3 text-gray-400">
            Cook delicious meals with ingredients you already own.
          </p>
        </div>

        <div className="rounded-3xl bg-[#141A21] p-8">
          <div className="mb-5 text-5xl">💰</div>
          <h2 className="text-2xl font-bold">
            Save Money
          </h2>
          <p className="mt-3 text-gray-400">
            Waste less. Spend less.
          </p>
        </div>

      </section>

    </main>
  );
}