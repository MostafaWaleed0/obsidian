import Link from "next/link";
import { LogoIcon } from "app/components/icons";

export function Logo() {
  return (
    <Link
      href="/"
      aria-label="Brand Logo"
      className="flex items-center gap-2 font-medium"
    >
      <LogoIcon />
      Obsidian
    </Link>
  );
}
