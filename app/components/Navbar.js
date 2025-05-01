'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { UserCircleIcon, MapPinIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import './Navbar.css'

export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const [activeTab, setActiveTab] = useState('doctors')
  const [isLocationOpen, setIsLocationOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="navbar">
      {/* Top bar */}
      <div className="navbar-container">
        <div className="navbar-top">
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-text">
              <span className="logo-apollo">Apollo</span>
              <span className="logo-247">24/7</span>
            </div>
          </Link>

          {/* Location selector */}
          <div className="location-selector">
            <button 
              onClick={() => setIsLocationOpen(!isLocationOpen)}
              className="location-button"
            >
              <MapPinIcon className="h-5 w-5 location-icon" />
              <div className="location-text">
                <span className="location-label">Select Location</span>
                <span className="location-value">Select Address</span>
              </div>
              <ChevronDownIcon className={`h-4 w-4 ${isLocationOpen ? 'rotate-180' : ''}`} />
            </button>
            {isLocationOpen && (
              <div className="location-dropdown">
                <button className="dropdown-item">
                  <MapPinIcon className="h-5 w-5 location-icon" />
                  <span>Use Current Location</span>
                </button>
                <button className="dropdown-item">
                  <MapPinIcon className="h-5 w-5 location-icon" />
                  <span>Enter Location Manually</span>
                </button>
              </div>
            )}
          </div>

          {/* Search bar */}
          <div className="search-container">
            <MagnifyingGlassIcon className="search-icon" />
            <input
              type="text"
              placeholder="Search Doctors, Specialities, Conditions etc."
              className="search-input"
            />
          </div>

          {/* Login button */}
          <button className="login-button">
            <UserCircleIcon className="h-5 w-5" />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="nav-container">
        <div className="navbar-container">
          <nav>
            <ul className="nav-list">
              {[
                { href: '/medicines', label: 'Buy Medicines' },
                { href: '/doctors', label: 'Find Doctors' },
                { href: '/lab-tests', label: 'Lab Tests' },
                { href: '/circle', label: 'Circle Membership' },
                { href: '/health-records', label: 'Health Records' },
                { href: '/diabetes', label: 'Diabetes Reversal' },
                { href: '/insurance', label: 'Buy Insurance', isNew: true }
              ].map((item) => (
                <li key={item.href} className="nav-item">
                  <Link
                    href={item.href}
                    onClick={() => setActiveTab(item.href.slice(1))}
                    className={`nav-link ${activeTab === item.href.slice(1) ? 'active' : ''}`}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="new-badge">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 