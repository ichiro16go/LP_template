// src/components/header.tsx
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  title: string;
  links: { label: string, href: string }[];
}

export default function Header({ title, links }: HeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="font-bold text-xl">{title}</div>
          <nav className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="text-sm hover:text-gray-600">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button className="bg-black text-white hover:bg-gray-800">ログイン</Button>
      </div>
    </header>
  );
}