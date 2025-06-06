// src/components/header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  links: { label: string, href: string }[];
}

export default function Header({ links }: HeaderProps) {
  return (
    <header className="border-b bg-white/50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div>
            <Image
              src="/ロゴ.png"
              alt="サービスロゴ"
              width={150}
              height={50}
              className="object-contain"
            />
          </div>
          <nav className="hidden md:flex space-x-6">
            {links.map((link, index) => (
              <Link href={link.href} key={index} className="text-lg hover:text-gray-600">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <Button className="text-lg bg-blue-800 text-white hover:bg-blue-700">ログイン</Button>
      </div>
    </header>
  );
}