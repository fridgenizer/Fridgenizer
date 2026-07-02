export default function ProductPreview() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-[32px] border border-white/10 bg-[#141A21] p-8">
        <h2 className="mb-6 text-3xl font-bold text-white">
          Inside your Fridge
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between rounded-xl bg-[#1E252E] p-4">
            <span>🥛 Milk</span>
            <span className="text-yellow-400">2 days</span>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-[#1E252E] p-4">
            <span>🍅 Tomatoes</span>
            <span className="text-red-400">Tomorrow</span>
          </div>

          <div className="rounded-xl bg-green-500 p-5 text-black">
            <h3 className="font-bold">🍝 AI Recipe</h3>
            <p className="mt-2">Creamy Tomato Pasta</p>
          </div>
        </div>
      </div>
    </section>
  );
}