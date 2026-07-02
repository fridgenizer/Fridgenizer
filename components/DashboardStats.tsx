"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import {
  Refrigerator,
  TriangleAlert,
  CircleX,
} from "lucide-react";

type Food = {
  id: number;
  expires_at: string;
};

export default function DashboardStats() {
  const [items, setItems] = useState(0);
  const [expiring, setExpiring] = useState(0);
  const [expired, setExpired] = useState(0);

  useEffect(() => {
    loadStats();
  }, []);

  async function loadStats() {
    const { data } = await supabase
      .from("foods")
      .select("id, expires_at");

    if (!data) return;

    setItems(data.length);

    const today = new Date();

    let expiringCount = 0;
    let expiredCount = 0;

    data.forEach((food) => {
      const expiry = new Date(food.expires_at);

      const diff =
        (expiry.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff < 0) {
        expiredCount++;
      } else if (diff <= 3) {
        expiringCount++;
      }
    });

    setExpiring(expiringCount);
    setExpired(expiredCount);
  }

  const cards = [
    {
      title: "Items in Fridge",
      value: items,
      subtitle: "Everything currently stored",
      icon: Refrigerator,
      color: "from-green-500/30 to-green-600/10",
      iconColor: "text-green-400",
    },
    {
      title: "Expiring Soon",
      value: expiring,
      subtitle: "Within the next 3 days",
      icon: TriangleAlert,
      color: "from-yellow-500/30 to-yellow-600/10",
      iconColor: "text-yellow-400",
    },
    {
      title: "Expired",
      value: expired,
      subtitle: "Needs your attention",
      icon: CircleX,
      color: "from-red-500/30 to-red-600/10",
      iconColor: "text-red-400",
    },
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className={`rounded-3xl border border-white/10 bg-gradient-to-br ${card.color} p-7 shadow-xl backdrop-blur-xl transition`}
          >
            <div className="mb-6 flex items-center justify-between">
              <div
                className={`rounded-2xl bg-black/20 p-3 ${card.iconColor}`}
              >
                <Icon size={28} />
              </div>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300">
                Live
              </span>
            </div>

            <h2 className="text-5xl font-extrabold">
              {card.value}
            </h2>

            <h3 className="mt-3 text-xl font-semibold">
              {card.title}
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              {card.subtitle}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}