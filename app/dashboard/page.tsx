"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Search } from "lucide-react";
import Sidebar from "../../components/Sidebar";
import DashboardStats from "../../components/DashboardStats";
import FoodList from "../../components/FoodList";
import { supabase } from "@/lib/supabase";
import AIAssistant from "../../components/AIAssistant";
import FoodAnalytics from "../../components/FoodAnalytics";

export default function DashboardPage() {
  const [foodName, setFoodName] = useState("");
  const [expiresAt, setExpiresAt] = useState("");

  async function handleAddFood() {
    if (!foodName || !expiresAt) return;

    const { error } = await supabase
      .from("foods")
      .insert([
        {
          name: foodName,
          expires_at: expiresAt,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    setFoodName("");
    setExpiresAt("");

    location.reload();
  }

  return (
    <main className="flex min-h-screen bg-[#070A0F] text-white">

      <Sidebar />

      <section className="relative flex-1 overflow-hidden p-10">

        {/* Background */}

        <div className="absolute inset-0">

          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-green-500/10 blur-[170px]" />

          <div className="absolute right-0 top-40 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-[180px]" />

          <div className="absolute bottom-0 left-1/3 h-[350px] w-[350px] rounded-full bg-green-400/5 blur-[140px]" />

        </div>

        <div className="relative z-10">

          {/* TOP BAR */}

          <div className="mb-10 flex items-center justify-between">

            <div className="relative">

              <Search
                size={18}
                className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
              />

              <input
                placeholder="Search foods..."
                className="w-96 rounded-2xl border border-white/10 bg-[#11161D] py-4 pl-14 pr-5 outline-none transition focus:border-green-500"
              />

            </div>

            <div className="flex items-center gap-6">

              <button className="rounded-2xl border border-white/10 bg-[#11161D] p-4 transition hover:border-green-500">
                <Bell size={22} />
              </button>

              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#11161D] px-4 py-2">

                <img
                  src="https://i.pravatar.cc/100"
                  className="h-11 w-11 rounded-full"
                />

                <div>

                  <h3 className="font-semibold">
                    Nico
                  </h3>

                  <p className="text-sm text-green-400">
                    Premium
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* HEADER */}

          <motion.div
            initial={{
              opacity: 0,
              y: 35,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
            }}
          >

            <h1 className="text-6xl font-black">

              Welcome back,

              <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">

                {" "}Nico

              </span>

            </h1>

            <p className="mt-4 text-xl text-gray-400">

              Your AI kitchen assistant keeps everything under control.

            </p>

          </motion.div>

          <DashboardStats />

          {/* ADD FOOD */}

          <div className="mt-10 rounded-[32px] border border-white/10 bg-[#11161D]/80 p-8 backdrop-blur-xl">

            <h2 className="mb-6 text-3xl font-bold">
              Add Food
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              <input
                placeholder="Food name"
                value={foodName}
                onChange={(e)=>setFoodName(e.target.value)}
                className="rounded-2xl bg-[#191F27] p-5 outline-none transition focus:ring-2 focus:ring-green-500"
              />

              <input
                type="date"
                value={expiresAt}
                onChange={(e)=>setExpiresAt(e.target.value)}
                className="rounded-2xl bg-[#191F27] p-5 outline-none transition focus:ring-2 focus:ring-green-500"
              />

            </div>

            <button
              onClick={handleAddFood}
              className="mt-7 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 px-10 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/30"
            >
              Add Food
            </button>

          </div>

          <div className="mt-12 grid gap-8 xl:grid-cols-3">

  <div className="xl:col-span-2">
    <FoodList />
  </div>

  <div className="space-y-8">
    <AIAssistant />
    <FoodAnalytics />
  </div>

</div>

        </div>

      </section>

    </main>
  );
}