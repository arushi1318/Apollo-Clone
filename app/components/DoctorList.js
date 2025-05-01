'use client'

import { useState, useEffect } from 'react'
import './DoctorList.css'
import DoctorProfile from './DoctorProfile'

export default function DoctorList() {
  const [doctors, setDoctors] = useState([])
  const [filteredDoctors, setFilteredDoctors] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [showProfile, setShowProfile] = useState(false)
  const [filters, setFilters] = useState({
    experience: [],
    mode: [],
    fees: [],
    language: []
  })

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const doctorsData = [
        {
          id: 1,
          name: 'Dr. Sarah Johnson',
          specialty: 'General Physician',
          experience: '12 years',
          rating: 4.8,
          consultations: '2.5k+',
          fees: 500,
          onlineFee: 500,
          offlineFee: 800,
          email: 'dr.sarah.johnson@example.com',
          phone: '+91 98765 43210',
          education: 'MBBS, MD (General Medicine)',
          languages: ['English', 'Hindi', 'Spanish'],
          image: '/doctors/dr-sarah-johnson.svg'
        },
        {
          id: 2,
          name: 'Dr. Michael Chen',
          specialty: 'Internal Medicine',
          experience: '8 years',
          rating: 4.9,
          consultations: '1.8k+',
          fees: 600,
          onlineFee: 600,
          offlineFee: 900,
          email: 'dr.michael.chen@example.com',
          phone: '+91 98765 43211',
          education: 'MBBS, MD (Internal Medicine)',
          languages: ['English', 'Mandarin', 'Hindi'],
          image: '/doctors/dr-michael-chen.svg'
        },
        {
          id: 3,
          name: 'Dr. Emily Rodriguez',
          specialty: 'Family Medicine',
          experience: '15 years',
          rating: 4.7,
          consultations: '3.2k+',
          fees: 450,
          onlineFee: 450,
          offlineFee: 700,
          email: 'dr.emily.rodriguez@example.com',
          phone: '+91 98765 43212',
          education: 'MBBS, MD (Family Medicine)',
          languages: ['English', 'Spanish', 'French'],
          image: '/doctors/dr-emily-rodriguez.svg'
        },
        {
          id: 4,
          name: 'Dr. Rajesh Kumar',
          specialty: 'Cardiology',
          experience: '18 years',
          rating: 4.9,
          consultations: '4.2k+',
          fees: 1200,
          onlineFee: 1200,
          offlineFee: 1500,
          email: 'dr.rajesh.kumar@example.com',
          phone: '+91 98765 43213',
          education: 'MBBS, MD (Cardiology)',
          languages: ['English', 'Hindi', 'Tamil'],
          image: '/doctors/dr-rajesh-kumar.svg'
        },
        {
          id: 5,
          name: 'Dr. Priya Sharma',
          specialty: 'Pediatrics',
          experience: '10 years',
          rating: 4.8,
          consultations: '3.5k+',
          fees: 800,
          onlineFee: 800,
          offlineFee: 1000,
          email: 'dr.priya.sharma@example.com',
          phone: '+91 98765 43214',
          education: 'MBBS, MD (Pediatrics)',
          languages: ['English', 'Hindi', 'Bengali'],
          image: '/doctors/dr-priya-sharma.svg'
        },
        {
          id: 6,
          name: 'Dr. James Wilson',
          specialty: 'Orthopedics',
          experience: '14 years',
          rating: 4.7,
          consultations: '3.8k+',
          fees: 1000,
          onlineFee: 1000,
          offlineFee: 1300,
          email: 'dr.james.wilson@example.com',
          phone: '+91 98765 43215',
          education: 'MBBS, MS (Orthopedics)',
          languages: ['English', 'French'],
          image: '/doctors/dr-james-wilson.svg'
        },
        {
          id: 7,
          name: 'Dr. Aisha Patel',
          specialty: 'Dermatology',
          experience: '9 years',
          rating: 4.9,
          consultations: '2.9k+',
          fees: 900,
          onlineFee: 900,
          offlineFee: 1100,
          email: 'dr.aisha.patel@example.com',
          phone: '+91 98765 43216',
          education: 'MBBS, MD (Dermatology)',
          languages: ['English', 'Hindi', 'Gujarati'],
          image: '/doctors/dr-aisha-patel.svg'
        },
        {
          id: 8,
          name: 'Dr. David Thompson',
          specialty: 'Neurology',
          experience: '16 years',
          rating: 4.8,
          consultations: '3.6k+',
          fees: 1500,
          onlineFee: 1500,
          offlineFee: 1800,
          email: 'dr.david.thompson@example.com',
          phone: '+91 98765 43217',
          education: 'MBBS, MD (Neurology)',
          languages: ['English', 'German'],
          image: '/doctors/dr-david-thompson.svg'
        },
        {
          id: 9,
          name: 'Dr. Ananya Reddy',
          specialty: 'Gynecology',
          experience: '11 years',
          rating: 4.9,
          consultations: '3.1k+',
          fees: 1100,
          onlineFee: 1100,
          offlineFee: 1400,
          email: 'dr.ananya.reddy@example.com',
          phone: '+91 98765 43218',
          education: 'MBBS, MD (Gynecology)',
          languages: ['English', 'Hindi', 'Telugu'],
          image: '/doctors/dr-ananya-reddy.svg'
        }
      ]
      setDoctors(doctorsData)
      setFilteredDoctors(doctorsData)
      setLoading(false)
    }, 1500)
  }, [])

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => {
      const newFilters = {
        ...prev,
        [filterType]: prev[filterType].includes(value)
          ? prev[filterType].filter(v => v !== value)
          : [...prev[filterType], value]
      }
      
      // Apply filters
      let filtered = [...doctors]
      
      // Experience filter
      if (newFilters.experience.length > 0) {
        filtered = filtered.filter(doctor => {
          const expYears = parseInt(doctor.experience)
          return newFilters.experience.some(exp => {
            if (exp === '0-5') return expYears <= 5
            if (exp === '6-10') return expYears > 5 && expYears <= 10
            if (exp === '11-15') return expYears > 10 && expYears <= 15
            if (exp === '15+') return expYears > 15
            return false
          })
        })
      }

      // Mode of Consult filter
      if (newFilters.mode.length > 0) {
        filtered = filtered.filter(doctor => 
          newFilters.mode.some(mode => {
            if (mode === 'Hospital Visit') return doctor.offlineFee
            if (mode === 'Online Consult') return doctor.onlineFee
            return false
          })
        )
      }
      
      // Language filter
      if (newFilters.language.length > 0) {
        filtered = filtered.filter(doctor => 
          newFilters.language.some(lang => doctor.languages.includes(lang))
        )
      }
      
      // Fees filter
      if (newFilters.fees.length > 0) {
        filtered = filtered.filter(doctor => {
          const fee = doctor.fees
          return newFilters.fees.some(range => {
            if (range === '0-500') return fee <= 500
            if (range === '500-1000') return fee > 500 && fee <= 1000
            if (range === '1000+') return fee > 1000
            return false
          })
        })
      }
      
      setFilteredDoctors(filtered)
      return newFilters
    })
  }

  const handleClearAll = () => {
    setFilters({
      experience: [],
      mode: [],
      fees: [],
      language: []
    })
    setFilteredDoctors(doctors)
  }

  const handleShowNearMe = () => {
    // This would typically use geolocation
    alert('This feature would use your location to find nearby doctors')
  }

  const handleConsultClick = (doctor) => {
    setSelectedDoctor(doctor)
    const confirmConsult = window.confirm(
      `Confirm online consultation with ${doctor.name}\nConsultation Fee: ₹${doctor.fees}`
    )
    if (confirmConsult) {
      alert('Proceeding to consultation booking...')
    }
  }

  const handleViewProfile = (doctor) => {
    setSelectedDoctor(doctor)
    setShowProfile(true)
  }

  const handleCloseProfile = () => {
    setShowProfile(false)
  }

  if (loading) {
    return (
      <div className="doctor-list">
        {[1, 2, 3].map((i) => (
          <div key={i} className="skeleton skeleton-card" />
        ))}
      </div>
    )
  }

  return (
    <div className="main-container">
      <aside className="filter-sidebar">
        <div className="filter-header">
          <h3>Filters</h3>
          <button className="clear-all" onClick={handleClearAll}>Clear All</button>
        </div>

        <button className="show-near-me" onClick={handleShowNearMe}>
          Show Doctors Near Me
        </button>

        <div className="filter-section">
          <h4>Mode of Consult</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.mode.includes('Hospital Visit')}
              onChange={() => handleFilterChange('mode', 'Hospital Visit')}
            />
            Hospital Visit
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.mode.includes('Online Consult')}
              onChange={() => handleFilterChange('mode', 'Online Consult')}
            />
            Online Consult
          </label>
        </div>

        <div className="filter-section">
          <h4>Experience (In Years)</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.experience.includes('0-5')}
              onChange={() => handleFilterChange('experience', '0-5')}
            />
            0-5
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.experience.includes('6-10')}
              onChange={() => handleFilterChange('experience', '6-10')}
            />
            6-10
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.experience.includes('11-15')}
              onChange={() => handleFilterChange('experience', '11-15')}
            />
            11-15
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.experience.includes('15+')}
              onChange={() => handleFilterChange('experience', '15+')}
            />
            15+
          </label>
        </div>

        <div className="filter-section">
          <h4>Consultation Fees</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.fees.includes('0-500')}
              onChange={() => handleFilterChange('fees', '0-500')}
            />
            ₹0 - ₹500
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.fees.includes('500-1000')}
              onChange={() => handleFilterChange('fees', '500-1000')}
            />
            ₹500 - ₹1000
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.fees.includes('1000+')}
              onChange={() => handleFilterChange('fees', '1000+')}
            />
            ₹1000+
          </label>
        </div>

        <div className="filter-section">
          <h4>Languages</h4>
          <label>
            <input
              type="checkbox"
              checked={filters.language.includes('English')}
              onChange={() => handleFilterChange('language', 'English')}
            />
            English
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.language.includes('Hindi')}
              onChange={() => handleFilterChange('language', 'Hindi')}
            />
            Hindi
          </label>
          <label>
            <input
              type="checkbox"
              checked={filters.language.includes('Spanish')}
              onChange={() => handleFilterChange('language', 'Spanish')}
            />
            Spanish
          </label>
        </div>
      </aside>

      <main className="content-area">
        <div className="doctors-header">
          <h2 className="doctors-title">Consult General Physicians Online</h2>
          <p className="doctors-subtitle">Internal Medicine Specialists • {doctors.length} doctors</p>
        </div>

        <div className="doctor-list">
          {filteredDoctors.map((doctor) => (
            <div key={doctor.id} className="doctor-card">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="doctor-image"
              />
              <div className="doctor-info">
                <h3 className="doctor-name">{doctor.name}</h3>
                <p className="doctor-specialty">{doctor.specialty}</p>
                <div className="doctor-stats">
                  <div className="stat-item">
                    <span className="rating-badge">
                      {doctor.rating} ★
                    </span>
                  </div>
                  <div className="stat-item">
                    {doctor.experience} experience
                  </div>
                  <div className="stat-item">
                    {doctor.consultations} consultations
                  </div>
                  <div className="consultation-fee">
                    ₹{doctor.fees} consultation fee
                  </div>
                </div>
              </div>
              <div className="doctor-actions">
                <button 
                  className="consult-button"
                  onClick={() => handleConsultClick(doctor)}
                >
                  Consult Online
                </button>
                <button 
                  className="view-profile-button"
                  onClick={() => handleViewProfile(doctor)}
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      {showProfile && selectedDoctor && (
        <DoctorProfile
          doctor={selectedDoctor}
          onClose={handleCloseProfile}
        />
      )}
    </div>
  )
} 