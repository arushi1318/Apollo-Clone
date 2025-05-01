'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/apollo247.svg" alt="Apollo 24/7" width={120} height={40} priority />
          </Link>

          {/* Location Selector */}
          <div className="flex items-center gap-2 text-gray-600">
            <MapPinIcon className="h-4 w-4" />
            <select className="border-none bg-transparent focus:ring-0">
              <option>Select Address</option>
            </select>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Doctors, Specialities, Conditions etc."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>
          </div>

          {/* Login Button */}
          <button className="flex items-center gap-2 text-teal-700 font-medium">
            <UserIcon className="h-4 w-4" />
            Login
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 py-3 text-sm">
          <Link href="/medicines" className="text-gray-600 hover:text-teal-700">Buy Medicines</Link>
          <Link href="/doctors" className="text-gray-600 hover:text-teal-700">Find Doctors</Link>
          <Link href="/lab-tests" className="text-gray-600 hover:text-teal-700">Lab Tests</Link>
          <Link href="/membership" className="text-gray-600 hover:text-teal-700">Circle Membership</Link>
          <Link href="/records" className="text-gray-600 hover:text-teal-700">Health Records</Link>
          <Link href="/diabetes" className="text-gray-600 hover:text-teal-700">Diabetes Reversal</Link>
          <Link href="/insurance" className="text-gray-600 hover:text-teal-700 flex items-center">
            Buy Insurance
            <span className="ml-1 text-xs text-teal-700 font-medium">New</span>
          </Link>
        </div>
      </div>
    </nav>
  )
} 