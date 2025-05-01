'use client'

import { useState } from 'react'
import Image from 'next/image'
import { InformationCircleIcon } from '@heroicons/react/24/outline'

const doctors = [
  {
    id: 1,
    name: 'Dr. Syed Ismail Ali',
    speciality: 'General Practitioner',
    experience: '7 YEARS • MBBS',
    location: 'Hyderabad',
    clinic: 'Apollo 24|7 Virtual Clinic - Telangana, Hyderabad',
    fee: 399
  },
  {
    id: 2,
    name: 'Dr. Md Yusuf Shareef',
    speciality: 'General Practitioner',
    experience: '8 YEARS • MBBS',
    location: 'Hyderabad',
    clinic: 'Apollo 24|7 Virtual Clinic - Telangana, Hyderabad',
    fee: 399
  },
  {
    id: 3,
    name: 'Dr. Mohammed Kamran',
    speciality: 'General Practitioner',
    experience: '6 YEARS • MBBS',
    location: 'Hyderabad',
    clinic: 'Apollo 24|7 Virtual Clinic - Telangana, Hyderabad',
    fee: 399
  },
  {
    id: 4,
    name: 'Dr. Shaik Abdul Kalam',
    speciality: 'General Practitioner',
    experience: '3 YEARS • MD (PHYSICIAN)',
    location: 'Visakhapatnam',
    clinic: 'Apollo 24|7 Virtual Clinic - Andhra Pradesh, Visakhapatnam',
    fee: 399
  }
]

export default function DoctorList() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleConsult = (doctorId) => {
    setSelectedDoctor(doctorId);
    // Here you would typically handle the consultation booking
    alert(`Booking consultation with doctor ${doctorId}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-medium">
          Consult General Physicians Online - Internal Medicine Specialists
          <span className="block text-gray-500 text-base mt-1">(763 doctors)</span>
        </h1>
        <select className="border rounded-lg px-4 py-2">
          <option>Relevance</option>
          <option>Experience</option>
          <option>Fee: Low to High</option>
          <option>Fee: High to Low</option>
        </select>
      </div>

      <div className="space-y-4">
        {doctors.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg p-6 shadow-sm flex justify-between items-center">
            <div>
              <h2 className="text-lg font-medium">{doctor.name}</h2>
              <p className="text-gray-600">{doctor.speciality}</p>
              <p className="text-purple-600 text-sm mt-1">{doctor.experience}</p>
              <p className="text-gray-600 mt-1">{doctor.location}</p>
              <p className="text-gray-500 text-sm mt-1">{doctor.clinic}</p>
            </div>

            <div className="text-right">
              <p className="text-xl font-medium mb-2">₹{doctor.fee}</p>
              <button 
                onClick={() => handleConsult(doctor.id)}
                className="bg-teal-700 text-white rounded-lg px-6 py-2 hover:bg-teal-800 transition-colors"
              >
                Consult Online
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 