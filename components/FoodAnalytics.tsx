"use client";

import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";

const COLORS = ["#22c55e", "#facc15", "#ef4444"];

export default function FoodAnalytics() {
  const [chartData, setChartData] = useState([
    { name: "Fresh", value: 0 },
    { name: "Soon", value: 0 },
    { name: "Expired", value: 0 },
  ]);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data, error } = await supabase
      .from("foods")
      .select("expires_at");

    if (error || !data) return;

    let fresh = 0;
    let soon = 0;
    let expired = 0;

    const today = new Date();

    data.forEach((food) => {
      const expiry = new Date(food.expires_at);

      const diff =
        (expiry.getTime() - today.getTime()) /
        (1000 * 60 * 60 * 24);

      if (diff < 0) {
        expired++;
      } else if (diff <= 3) {
        soon++;
      } else {
        fresh++;
      }
    });

    setChartData([
      {
        name: "Fresh",
        value: fresh,
      },
      {
        name: "Soon",
        value: soon,
      },
      {
        name: "Expired",
        value: expired,
      },
    ]);
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="rounded-3xl border border-white/5 bg-[#11161D] p-8"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Food Overview
      </h2>

      <div className="h-72">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={chartData}
              dataKey="value"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={5}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-6 space-y-4">

        {chartData.map((item, index) => (

          <div
            key={item.name}
            className="flex items-center justify-between"
          >

            <div className="flex items-center gap-3">

              <div
                className="h-4 w-4 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <span>{item.name}</span>

            </div>

            <span className="font-bold">
              {item.value}
            </span>

          </div>

        ))}

      </div>

    </motion.div>
  );
}
git status
