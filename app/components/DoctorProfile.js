'use client'

import { useState } from 'react'
import './DoctorProfile.css'

export default function DoctorProfile({ doctor, onClose }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedDoctor, setEditedDoctor] = useState(doctor)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setEditedDoctor(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    // Here you would typically make an API call to update the doctor's information
    setIsEditing(false)
  }

  return (
    <div className="profile-modal">
      <div className="profile-content">
        <div className="profile-header">
          <h2>Doctor Profile</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="profile-body">
          <div className="profile-image-section">
            <img src={doctor.image} alt={doctor.name} className="profile-image" />
            <div className="profile-basic-info">
              <h3>{doctor.name}</h3>
              <p className="specialty">{doctor.specialty}</p>
              <div className="rating">
                <span className="rating-value">{doctor.rating} ★</span>
                <span className="consultations">{doctor.consultations} consultations</span>
              </div>
            </div>
          </div>

          <div className="profile-details">
            <div className="detail-section">
              <h4>Contact Information</h4>
              {isEditing ? (
                <>
                  <div className="input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={editedDoctor.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={editedDoctor.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Email:</strong> {doctor.email}</p>
                  <p><strong>Phone:</strong> {doctor.phone}</p>
                </>
              )}
            </div>

            <div className="detail-section">
              <h4>Consultation Fees</h4>
              {isEditing ? (
                <>
                  <div className="input-group">
                    <label>Online Consultation Fee</label>
                    <input
                      type="number"
                      name="onlineFee"
                      value={editedDoctor.onlineFee}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Offline Consultation Fee</label>
                    <input
                      type="number"
                      name="offlineFee"
                      value={editedDoctor.offlineFee}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Online Consultation:</strong> ₹{doctor.onlineFee}</p>
                  <p><strong>Offline Consultation:</strong> ₹{doctor.offlineFee}</p>
                </>
              )}
            </div>

            <div className="detail-section">
              <h4>Professional Information</h4>
              {isEditing ? (
                <>
                  <div className="input-group">
                    <label>Experience</label>
                    <input
                      type="text"
                      name="experience"
                      value={editedDoctor.experience}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="input-group">
                    <label>Education</label>
                    <input
                      type="text"
                      name="education"
                      value={editedDoctor.education}
                      onChange={handleInputChange}
                    />
                  </div>
                </>
              ) : (
                <>
                  <p><strong>Experience:</strong> {doctor.experience}</p>
                  <p><strong>Education:</strong> {doctor.education}</p>
                </>
              )}
            </div>

            <div className="detail-section">
              <h4>Languages Spoken</h4>
              {isEditing ? (
                <div className="input-group">
                  <input
                    type="text"
                    name="languages"
                    value={editedDoctor.languages}
                    onChange={handleInputChange}
                  />
                </div>
              ) : (
                <p>{doctor.languages}</p>
              )}
            </div>
          </div>
        </div>

        <div className="profile-footer">
          {isEditing ? (
            <button className="save-button" onClick={handleSave}>Save Changes</button>
          ) : (
            <button className="edit-button" onClick={() => setIsEditing(true)}>Edit Profile</button>
          )}
        </div>
      </div>
    </div>
  )
} 