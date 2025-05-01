'use client'

import { useState } from 'react'
import './Filters.css'

export default function Filters() {
  const [filters, setFilters] = useState({
    availability: 'all',
    experience: 'all',
    rating: 'all',
    price: 'all'
  })

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }))
  }

  return (
    <div className="filters-panel">
      <h3 className="filters-title">Filters</h3>
      
      <div className="filter-section">
        <h4 className="filter-label">Availability</h4>
        <select 
          className="filter-select"
          value={filters.availability}
          onChange={(e) => handleFilterChange('availability', e.target.value)}
        >
          <option value="all">All</option>
          <option value="today">Today</option>
          <option value="tomorrow">Tomorrow</option>
          <option value="this-week">This Week</option>
        </select>
      </div>

      <div className="filter-section">
        <h4 className="filter-label">Experience</h4>
        <select 
          className="filter-select"
          value={filters.experience}
          onChange={(e) => handleFilterChange('experience', e.target.value)}
        >
          <option value="all">All</option>
          <option value="0-5">0-5 years</option>
          <option value="5-10">5-10 years</option>
          <option value="10+">10+ years</option>
        </select>
      </div>

      <div className="filter-section">
        <h4 className="filter-label">Rating</h4>
        <select 
          className="filter-select"
          value={filters.rating}
          onChange={(e) => handleFilterChange('rating', e.target.value)}
        >
          <option value="all">All</option>
          <option value="4+">4+ stars</option>
          <option value="3+">3+ stars</option>
          <option value="2+">2+ stars</option>
        </select>
      </div>

      <div className="filter-section">
        <h4 className="filter-label">Price</h4>
        <select 
          className="filter-select"
          value={filters.price}
          onChange={(e) => handleFilterChange('price', e.target.value)}
        >
          <option value="all">All</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>
    </div>
  )
} 