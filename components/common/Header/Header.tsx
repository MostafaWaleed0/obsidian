import { useTheme } from 'next-themes';
import Link from 'next/link';
import { List } from 'components/icons';
import { Logo } from 'components/ui';
import { useState } from 'react';

export default function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useTheme();

  return (
    <header
      role="banner"
      className="py-3 h-fit w-full z-50 flex items-center justify-center sticky top-0 bg-white dark:bg-gray-900 shadow"
    >
      <div className="container">
        <div className="flex flex-col">
          <div className="flex items-center	justify-between gap-2">
            <Logo />
            <nav
              aria-label="primary"
              tabIndex={-1}
              className={`md:flex p-3 lg:p-0 absolute top-full left-0 right-0 md:static md:h-fit text-lg dark:bg-gray-800 md:dark:bg-transparent bg-gray-100 md:bg-transparent ${
                toggle ? 'hidden' : 'flex'
              }`}
            >
              <ul
                className="flex flex-col md:flex-row gap-10 md:gap-5 text-lg text-gray-600 dark:text-white capitalize font-medium"
                role="list"
              >
                <li className="md:mx-3">
                  <Link href="#home">home</Link>
                </li>
                <li className="md:mx-3">
                  <Link href="#methods">methods</Link>
                </li>
                <li className="md:mx-3">
                  <Link href="#course">course</Link>
                </li>
                <li className="md:mx-3">
                  <Link href="#testimony">Testimony</Link>
                </li>
                <li className="md:mx-3">
                  <Link href="#contact">contact us</Link>
                </li>
              </ul>
            </nav>
            <div className="flex gap-3 items-center">
              <button
                type="button"
                className="w-12 h-12 bg-gray-200 rounded-lg dark:bg-gray-700 grid place-content-center hover:ring-2 ring-gray-400 dark:ring-white transition-all"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label={`Switch to ${
                  theme === 'dark' ? 'light' : 'dark'
                } Theme`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-6 h-6 text-gray-800 dark:text-gray-200"
                >
                  {theme === 'dark' ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  )}
                </svg>
              </button>
              <button
                type="button"
                className="w-12 h-12 bg-gray-200 rounded-lg dark:bg-gray-700 grid place-content-center hover:ring-2 ring-gray-400 dark:ring-white transition-all md:hidden"
                onClick={() => setToggle((x) => !x)}
                aria-label="Toggle Menu"
              >
                <List />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
