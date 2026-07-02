"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, Trash2 } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Food = {
  id: number;
  name: string;
  expires_at: string;
};

const foodIcons = [
  { words: ["banane", "bananen", "banana", "bananas"], icon: "🍌" },
  { words: ["milch", "milk"], icon: "🥛" },
  { words: ["ei", "eier", "egg", "eggs"], icon: "🥚" },
  { words: ["käse", "kaese", "cheese"], icon: "🧀" },
  { words: ["apfel", "äpfel", "aepfel", "apple", "apples"], icon: "🍎" },
  { words: ["brot", "bread"], icon: "🍞" },
  { words: ["tomate", "tomaten", "tomato", "tomatoes"], icon: "🍅" },
  { words: ["gurke", "cucumber"], icon: "🥒" },
  { words: ["salat", "lettuce", "salad"], icon: "🥬" },
  { words: ["pizza"], icon: "🍕" },
  { words: ["nudeln", "pasta", "spaghetti"], icon: "🍝" },
  { words: ["reis", "rice"], icon: "🍚" },
  { words: ["fleisch", "meat", "steak"], icon: "🥩" },
  { words: ["fisch", "fish"], icon: "🐟" },
  { words: ["hähnchen", "haehnchen", "chicken"], icon: "🍗" },
  { words: ["wasser", "water"], icon: "💧" },
  { words: ["erdbeere", "erdbeeren", "strawberry"], icon: "🍓" },
  { words: ["orange"], icon: "🍊" },
  { words: ["zitrone", "lemon"], icon: "🍋" },
  { words: ["karotte", "möhre", "moehre", "carrot"], icon: "🥕" },
  { words: ["kartoffel", "kartoffeln", "potato"], icon: "🥔" },
];

function getFoodIcon(name: string) {
  const value = name.toLowerCase();

  const match = foodIcons.find((item) =>
    item.words.some((word) => value.includes(word))
  );

  return match?.icon ?? "🥫";
}

function getStatus(expire: string) {
  const today = new Date();
  const end = new Date(expire);

  const diff = Math.ceil(
    (end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (diff < 0) {
    return {
      text: "Expired",
      color: "bg-red-500 text-white",
      hint: "Already expired",
    };
  }

  if (diff <= 3) {
    return {
      text: "Soon",
      color: "bg-yellow-400 text-black",
      hint: `${diff} day${diff === 1 ? "" : "s"} left`,
    };
  }

  return {
    text: "Fresh",
    color: "bg-green-500 text-black",
    hint: `${diff} days left`,
  };
}

export default function FoodList() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    loadFoods();
  }, []);

  async function loadFoods() {
    const { data, error } = await supabase
      .from("foods")
      .select("*")
      .order("expires_at", { ascending: true });

    if (error) {
      alert(error.message);
      return;
    }

    setFoods(data ?? []);
  }

  async function deleteFood(id: number) {
    const { error } = await supabase.from("foods").delete().eq("id", id);

    if (error) {
      alert(error.message);
      return;
    }

    setFoods((currentFoods) =>
      currentFoods.filter((food) => food.id !== id)
    );
  }

  return (
    <div className="mt-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-black">My Fridge</h2>

        <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
          {foods.length} Foods
        </span>
      </div>

      {foods.length === 0 ? (
        <div className="rounded-3xl border border-white/5 bg-[#11161D] p-8 text-center text-gray-400">
          Your fridge is empty.
        </div>
      ) : (
        <div className="grid gap-5">
          {foods.map((food, index) => {
            const status = getStatus(food.expires_at);
            const icon = getFoodIcon(food.name);

            return (
              <motion.div
                key={food.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-3xl border border-white/5 bg-[#11161D] p-6 transition hover:border-green-500/30 hover:shadow-2xl hover:shadow-green-500/10"
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-5">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 text-5xl">
                      {icon}
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold">{food.name}</h3>

                      <div className="mt-2 flex flex-wrap items-center gap-5 text-gray-400">
                        <div className="flex items-center gap-2">
                          <CalendarDays size={18} />
                          {new Date(food.expires_at).toLocaleDateString(
                            "de-DE"
                          )}
                        </div>

                        <div className="flex items-center gap-2">
                          <Clock3 size={18} />
                          {status.hint}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <span
                      className={`${status.color} rounded-full px-4 py-2 text-sm font-bold`}
                    >
                      {status.text}
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
      )}
    </div>
  );
}