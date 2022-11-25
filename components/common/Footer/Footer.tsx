import { Facebook, Twitter, Instagram } from 'components/icons';
import { Logo } from 'components/ui';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t-2 border-white" role="contentinfo">
      <div className="container">
        <div className="flex justify-between items-center py-4">
          <Logo />
          <ul className="flex items-center gap-5" role="list">
            <li>
              <Link href="" aria-label="Facebook">
                <Facebook />
              </Link>
            </li>
            <li>
              <Link href="" aria-label="Twitter">
                <Twitter />
              </Link>
            </li>
            <li>
              <Link href="" aria-label="Instagram">
                <Instagram />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
