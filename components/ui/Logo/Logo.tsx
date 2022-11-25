import Link from 'next/link';
import { LogoIcon } from 'components/icons';

export default function Logo() {
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
