"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  ChefHat,
  ShoppingCart,
  TriangleAlert,
} from "lucide-react";

export default function AIAssistant() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-10 rounded-3xl border border-green-500/20 bg-[#11161D] p-8 shadow-2xl shadow-green-500/10"
    >
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-3">
          <Sparkles className="text-black" size={24} />
        </div>

        <div>
          <h2 className="text-2xl font-bold">
            AI Kitchen
          </h2>

          <p className="text-sm text-green-400">
            Powered by Fridgenizer AI
          </p>
        </div>
      </div>

      <div className="space-y-5">

        <div className="rounded-2xl bg-[#1B222C] p-5">
          <div className="mb-2 flex items-center gap-2">
            <TriangleAlert className="text-yellow-400" size={20} />
            <h3 className="font-semibold">
              Expiring Soon
            </h3>
          </div>

          <p className="text-gray-400">
            Milk expires tomorrow.
          </p>
        </div>

        <div className="rounded-2xl bg-[#1B222C] p-5">
          <div className="mb-2 flex items-center gap-2">
            <ChefHat className="text-green-400" size={20} />
            <h3 className="font-semibold">
              Recipe Suggestion
            </h3>
          </div>

          <p className="text-gray-400">
            Creamy Tomato Pasta 🍝
          </p>
        </div>

        <div className="rounded-2xl bg-[#1B222C] p-5">
          <div className="mb-2 flex items-center gap-2">
            <ShoppingCart className="text-blue-400" size={20} />
            <h3 className="font-semibold">
              Missing Ingredient
            </h3>
          </div>

          <p className="text-gray-400">
            Parmesan Cheese
          </p>
        </div>

      </div>

      <button className="mt-8 w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 py-4 font-bold text-black transition hover:scale-105 hover:shadow-xl hover:shadow-green-500/40">
        Generate Recipe
      </button>
    </motion.div>
  );
}