export default function AppPreview() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-32">

      <div className="overflow-hidden rounded-[40px] border border-white/10 bg-[#141A21] shadow-2xl">

        <div className="border-b border-white/10 px-8 py-5">
          <p className="text-lg font-semibold text-white">
            Fridgenizer Dashboard
          </p>
        </div>

        <div className="grid gap-8 p-8 md:grid-cols-2">

          {/* Left */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              My Fridge
            </h3>

            <div className="space-y-4">

              <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
                <span>🥛 Milk</span>
                <span className="text-red-400">1 day</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
                <span>🍅 Tomatoes</span>
                <span className="text-yellow-400">3 days</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
                <span>🥚 Eggs</span>
                <span className="text-green-400">8 days</span>
              </div>

              <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
                <span>🧀 Cheese</span>
                <span className="text-green-400">12 days</span>
              </div>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              AI Suggestion
            </h3>

            <div className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-700 p-8">

              <div className="text-6xl">
                🍝
              </div>

              <h4 className="mt-6 text-3xl font-bold">
                Creamy Tomato Pasta
              </h4>

              <p className="mt-4 text-white/80">
                You already have every ingredient needed.
                Estimated cooking time: 20 minutes.
              </p>

              <button className="mt-8 rounded-full bg-white px-6 py-3 font-bold text-black">
                Cook now
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}