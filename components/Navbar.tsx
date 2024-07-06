"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const routes = [
    { label: "Home", href: "/home" },
    { label: "Admin", href: "/admin" },
    { label: "Login", href: "/logout" },
  ];

  const pathname = usePathname();
  return (
    <div className="bg-red-200/30 p-4">
      <div className="flex items-center justify-around">
        {routes.map((route) => (
          <Link href={route.href} key={route.href}>
            <div
              className={`${
                pathname === route.href
                  ? "border-b-4 border-black transition duration-200"
                  : ""
              }`}
            >
              {route.label}
            </div>
          </Link>
        ))}

        <div />
      </div>
    </div>
  );
};

export default Navbar;
