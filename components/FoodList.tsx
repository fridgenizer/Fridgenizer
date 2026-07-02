"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Trash2, Clock3 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Food = {
  id: number;
  name: string;
  expires_at: string;
};

export default function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    loadFoods();
  }, []);

  async function loadFoods() {
    const { data } = await supabase
      .from("foods")
      .select("*")
      .order("expires_at");

    if (data) setFoods(data);
  }

  async function deleteFood(id: number) {
    await supabase.from("foods").delete().eq("id", id);

    setFoods((foods) =>
      foods.filter((food) => food.id !== id)
    );
  }

  function status(expire: string) {
    const today = new Date();

    const end = new Date(expire);

    const diff =
      (end.getTime() - today.getTime()) /
      (1000 * 60 * 60 * 24);

    if (diff < 0)
      return {
        text: "Expired",
        color: "bg-red-500",
      };

    if (diff <= 3)
      return {
        text: "Soon",
        color: "bg-yellow-500",
      };

    return {
      text: "Fresh",
      color: "bg-green-500",
    };
  }

  return (
    <div className="mt-12">

      <div className="mb-8 flex items-center justify-between">

        <h2 className="text-3xl font-black">
          My Fridge
        </h2>

        <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
          {foods.length} Foods
        </span>

      </div>

      <div className="grid gap-5">

        {foods.map((food, index) => {

          const s = status(food.expires_at);

          return (

            <motion.div
              key={food.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * .08,
              }}
              whileHover={{
                y: -6,
                scale: 1.01,
              }}
              className="group rounded-3xl border border-white/5 bg-[#11161D] p-6 transition hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 text-5xl">

                    🥬

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">
                      {food.name}
                    </h3>

                    <div className="mt-2 flex items-center gap-5 text-gray-400">

                      <div className="flex items-center gap-2">

                        <CalendarDays size={18} />

                        {new Date(food.expires_at).toLocaleDateString()}

                      </div>

                      <div className="flex items-center gap-2">

                        <Clock3 size={18} />

                        Expires

                      </div>

                    </div>

                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <span
                    className={`${s.color} rounded-full px-4 py-2 text-sm font-bold`}
                  >
                    {s.text}
                  </span>

                  <button
                    onClick={() => deleteFood(food.id)}
                    className="rounded-2xl bg-red-500/10 p-4 text-red-400 transition hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}