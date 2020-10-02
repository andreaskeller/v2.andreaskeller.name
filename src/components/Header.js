import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center py-6 md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <Link href="/">
            <a className="flex font-bold">Andreas Keller</a>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          {isOpen ? (
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              {/* <!-- Heroicon name: x --> */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          ) : (
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => setIsOpen(true)}
            >
              {/* <!-- Heroicon name: menu --> */}
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/contact">
            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Contact
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
              Blog
            </a>
          </Link>
        </nav>
      </div>

      <div
        className={`absolute z-10 bg-white top-0 inset-x-0 mt-16 md:hidden w-full py-8 shadow-xl ${
          isOpen ? 'block' : 'hidden'
        }`}
      >
        <Link href="/contact">
          <a
            className="block py-4 text-center text-3xl leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </Link>
        <Link href="/blog">
          <a
            className="block py-4 text-center text-3xl leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </a>
        </Link>
      </div>
    </div>
  )
}
