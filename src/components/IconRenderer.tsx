"use client";
import { TbHeartHandshake } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { TbMoodSmile } from "react-icons/tb";
import { TbDatabase } from "react-icons/tb";

const icons = {
  bag: TbShoppingBag,
  smile: TbMoodSmile,
  database: TbDatabase,
  handshake: TbHeartHandshake,
};

export default function IconRenderer({ name, className }: { name: string; className?: string }) {
  const IconComponent = icons[name as keyof typeof icons];
  if (!IconComponent) {
    console.error("❌ 无效的 icon name:", name);
    return null;
  }
  return <IconComponent className={className} />;
}