export default function PhoneMockup() {
  return (
    <section className="flex justify-center px-6 pb-32">

      <div className="rounded-[45px] border-8 border-zinc-800 bg-black p-4 shadow-2xl">

        <div className="h-[700px] w-[340px] overflow-hidden rounded-[32px] bg-[#0B0F14]">

          <div className="bg-green-500 p-6">
            <h2 className="text-3xl font-bold text-black">
              Fridgenizer
            </h2>

            <p className="mt-2 text-black/70">
              Welcome back 👋
            </p>
          </div>

          <div className="space-y-4 p-6">

            <div className="rounded-2xl bg-[#141A21] p-5">
              <p className="text-sm text-gray-400">
                Expiring Tomorrow
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                🥛 Milk
              </h3>
            </div>

            <div className="rounded-2xl bg-[#141A21] p-5">
              <p className="text-sm text-gray-400">
                AI Recommendation
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                🍝 Creamy Pasta
              </h3>

              <p className="mt-3 text-gray-400">
                Uses your tomatoes, cheese and milk.
              </p>
            </div>

            <div className="rounded-2xl bg-[#141A21] p-5">
              <p className="text-sm text-gray-400">
                This Month
              </p>

              <h3 className="mt-2 text-2xl font-bold text-green-400">
                €42 Saved
              </h3>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}