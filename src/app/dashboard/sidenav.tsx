"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Analytics", href: "/dashboard/analytics", icon: ChartBarIcon },
  { name: "Users", href: "/dashboard/users", icon: UserIcon },
  { name: "Settings", href: "/dashboard/settings", icon: Cog6ToothIcon },
  { name: "Logout", href: "/logout", icon: ArrowRightOnRectangleIcon },
];

export default function SideNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-xl font-bold">My Dashboard</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md hover:bg-gray-700 transition"
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button> 
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-white w-64 h-full fixed md:static top-0 left-0 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        {/* Logo / Brand */}
        <div className="p-6 text-center border-b border-gray-700">
          <h2 className="text-2xl font-extrabold tracking-wide">
            🚀 Dashboard
          </h2>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col space-y-1">
          {menuItems.map((item) => {
            const Icon =item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center px-5 py-3 space-x-3 text-sm font-medium rounded-md transition-all ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 w-full p-4 text-center text-gray-400 text-xs border-t border-gray-700">
          © 2025 My Dashboard
        </div>
      </aside>
    </>
  );
}
