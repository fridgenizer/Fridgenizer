"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Refrigerator,
  ChefHat,
  ShoppingCart,
  Settings,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "My Fridge",
    icon: Refrigerator,
    href: "/dashboard/fridge",
  },
  {
    title: "Recipes",
    icon: ChefHat,
    href: "/dashboard/recipes",
  },
  {
    title: "Shopping",
    icon: ShoppingCart,
    href: "/dashboard/shopping",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-80 flex-col border-r border-white/5 bg-[#0C1016]/95 backdrop-blur-xl">

      {/* Logo */}

      <div className="border-b border-white/5 p-8">

        <motion.div
          whileHover={{ scale: 1.04 }}
          className="flex items-center gap-4"
        >

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 text-3xl shadow-xl shadow-green-500/30">
            🥬
          </div>

          <div>

            <h1 className="text-2xl font-black tracking-tight">
              Fridgenizer
            </h1>

            <p className="text-sm text-green-400">
              AI Kitchen Assistant
            </p>

          </div>

        </motion.div>

      </div>

      {/* Navigation */}

      <nav className="mt-8 flex-1 px-5">

        <div className="space-y-3">

          {menu.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
              >
                <motion.div
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: .98,
                  }}
                  className={`group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-300 ${
                    active
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 text-black shadow-xl shadow-green-500/25"
                      : "text-gray-400 hover:bg-[#171D26] hover:text-white"
                  }`}
                >
                  <Icon size={22} />

                  <span className="font-semibold">
                    {item.title}
                  </span>
                </motion.div>
              </Link>
            );
          })}

        </div>

      </nav>

      {/* Premium Card */}

      <div className="p-6">

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="rounded-3xl border border-green-500/20 bg-gradient-to-br from-green-500/10 to-emerald-500/5 p-6"
        >

          <div className="mb-4 flex items-center gap-3">

            <Sparkles className="text-green-400" />

            <h3 className="font-bold">
              AI Premium
            </h3>

          </div>

          <p className="text-sm leading-6 text-gray-400">
            Barcode Scanner
            <br />
            AI Recipes
            <br />
            Expiration Detection
            <br />
            Shopping Assistant
          </p>

          <button className="mt-6 w-full rounded-2xl bg-gradient-to-r from-green-500 to-emerald-500 py-3 font-bold text-black transition hover:scale-105">
            Upgrade
          </button>

        </motion.div>

      </div>

      {/* User */}

      <div className="border-t border-white/5 p-6">

        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/150?img=12"
            className="h-14 w-14 rounded-full border-2 border-green-500"
            alt="User"
          />

          <div>

            <h3 className="font-semibold">
              Nico
            </h3>

            <p className="text-sm text-green-400">
              Premium Member
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}