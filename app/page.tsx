"use client";

import Navbar from "../components/Navbar";
import ProductPreview from "../components/ProductPreview.tsx";
import { useState } from "react";
import WaitlistModal from "../components/WaitlistModal";
import AppPreview from "../components/AppPreview";
import StatsSection from "../components/StatsSection";
import PhoneMockup from "../components/PhoneMockup";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

const handleEarlyAccess = () => {
  setIsModalOpen(true);
};

  

  return (
    <main className="min-h-screen bg-[#0B0F14] text-white">
      <Navbar />

      {/* Rest deiner Seite */}
      {/* Hero */}
     <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center">
      <div className="absolute inset-0 -z-10">
  <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/20 blur-[120px]" />
  <div className="absolute bottom-20 right-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />
</div>
        <span className="mb-4 rounded-full border border-green-500 px-4 py-2 text-sm text-green-400">
          🚀 Coming Soon
        </span>

        <h1 className="max-w-5xl bg-gradient-to-r from-white via-gray-200 to-green-400 bg-clip-text text-6xl font-extrabold leading-tight text-transparent md:text-8xl">
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

          <button
  onClick={handleEarlyAccess}
  className="rounded-full bg-green-500 px-8 py-4 text-lg font-semibold transition hover:bg-green-400"
>
  Get Early Access
</button>

          <button className="rounded-full border border-gray-600 px-8 py-4 text-lg transition hover:border-white">
            Learn More
          </button>

        </div>
<div className="mt-20 w-full max-w-5xl">
  <div className="mx-auto max-w-md rounded-[40px] border border-white/10 bg-[#141A21] p-6 shadow-2xl shadow-green-500/20">

    <div className="mb-6 flex items-center justify-between">
      <h3 className="text-xl font-bold">Fridgenizer</h3>
      <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-semibold">
        AI Active
      </span>
    </div>

    <div className="space-y-4">

      <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
        <div>
          <p className="font-semibold">🥛 Milk</p>
          <p className="text-sm text-gray-400">
            Expires in 2 days
          </p>
        </div>
        <span className="text-green-400">Fresh</span>
      </div>

      <div className="flex items-center justify-between rounded-2xl bg-[#1E252E] p-4">
        <div>
          <p className="font-semibold">🍅 Tomatoes</p>
          <p className="text-sm text-gray-400">
            Expires tomorrow
          </p>
        </div>
        <span className="text-yellow-400">Soon</span>
      </div>

      <div className="rounded-2xl bg-green-500 p-5 text-black">
        <h4 className="text-lg font-bold">
          🍝 AI Recipe Suggestion
        </h4>

        <p className="mt-2">
          Creamy Tomato Pasta with fresh basil
        </p>
      </div>

    </div>

  </div>
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
<ProductPreview />
<WaitlistModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
/><AppPreview />
<AppPreview />
<PhoneMockup />
<StatsSection />
    </main>
  );
}