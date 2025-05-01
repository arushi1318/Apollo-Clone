'use client'

import { useState } from 'react'
import Navbar from './components/Navbar'
import DoctorList from './components/DoctorList'
import './breadcrumb.css'
import './page.css'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="page-container">
        <div className="content-wrapper">
          {/* Main content */}
          <div className="main-content">
            {/* Breadcrumb */}
            <nav className="breadcrumb-nav mb-4">
              <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                  <a href="/">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="/doctors">Doctors</a>
                </li>
                <li className="breadcrumb-item active">
                  General Physicians
                </li>
              </ol>
            </nav>

            {/* Page Title */}
            <div className="page-header mb-6">
              <h1 className="page-title">
                Consult General Physicians Online
              </h1>
              <p className="page-subtitle">
                Internal Medicine Specialists • 763 doctors
              </p>
            </div>

            {/* Doctors List with integrated filter panel */}
            <DoctorList />
          </div>
        </div>

        {/* Bottom Content Sections */}
        <div className="bottom-content">
          <h2 className="section-title">Book Consult for General Medicine Online</h2>
          <div className="section-content">
            <p>
              Booking an appointment with a top general physician (GP) is now easier than ever with <span className="highlight">Apollo 24|7</span>. Our experienced doctors provide comprehensive care for a wide range of medical conditions, including <span className="highlight">fever, allergies</span>, and diabetes. You can conveniently schedule an online general physician consultation or visit a trusted hospital/clinic near you. Our allergies doctor and diabetes doctor offer flexible appointment slots to suit your needs. With transparent general physician fees and genuine general physician reviews, you can make an informed decision when choosing your healthcare provider. Take charge of your health today by booking a doctor near your location by searching the phrase general physician near me.
            </p>

            <h3 className="section-title">What is General Medicine?</h3>
            <p>
              General medicine is a medical speciality that focuses on the prevention, diagnosis, and treatment of internal diseases in adults. This speciality encompasses a wide range of acute and chronic conditions affecting various parts of the body, including fever, <span className="highlight">asthma, heart disease</span>, liver problems, hypertension, and <span className="highlight">neurological disorders</span>. General medicine plays a crucial role in healthcare by providing comprehensive medical care, managing complex conditions, and addressing multiple co-morbidities. General physicians are essential in preventive healthcare, early diagnosis, and the long-term management of chronic diseases, ultimately improving patient outcomes and quality of life.
            </p>

            <h3 className="section-title">Who is a General Physician?</h3>
            <p>
              A general physician is a medical doctor who specialises in the diagnosis, treatment, and prevention of adult diseases. To become a general physician in the Indian subcontinent, one must complete an MBBS degree followed by postgraduate training in General Medicine or Internal Medicine. General physicians are trained to diagnose and treat a wide range of medical conditions, providing comprehensive care that includes preventive health measures, early detection of diseases, and long-term management of chronic conditions. They play a vital role in coordinating care when patients have multiple co-morbidities or complex presentations, making them essential in preventive healthcare.
            </p>

            <h3 className="section-title">What Do General Physicians Do?</h3>
            <p>
              General physicians (GPs) are the first point of contact for patients seeking medical care. Some of the key responsibilities of doctors include:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Conducting thorough physical examinations and taking detailed medical histories to accurately diagnose health issues</li>
              <li>Ordering and interpreting diagnostic tests, such as blood work, imaging studies, and biopsies, to identify underlying conditions</li>
              <li>Developing personalised treatment plans that may include medications, lifestyle modifications, or referrals to specialists when necessary</li>
              <li>Providing preventive care, such as vaccinations and health screenings, to help patients maintain optimal health and prevent the onset of diseases</li>
            </ul>
          </div>

          <h2 className="section-title">What are the Common Conditions & Diseases that General Physicians Treat?</h2>
          <div className="section-content">
            <p>General physicians are skilled at managing a wide array of health issues. Here are some of the conditions and diseases most commonly treated by doctors:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Fever: A doctor for fever can diagnose and treat various infections causing <span className="highlight">fever</span>, such as viral or bacterial infections.</li>
              <li>Allergies: As allergies doctor, GP can identify allergens and provide treatment options to manage symptoms like <span className="highlight">sneezing</span>, runny nose, and itchy eyes.</li>
              <li>Diabetes: As a diabetes doctor, a GP plays a crucial role in diagnosing and managing diabetes, helping patients maintain healthy blood sugar levels through medication, diet, and lifestyle changes.</li>
              <li>Hypertension: General physicians regularly monitor blood pressure and prescribe medications to control hypertension, reducing the risk of heart disease and <span className="highlight">stroke</span>.</li>
              <li>Respiratory infections: Common colds, flu, <span className="highlight">bronchitis</span>, and pneumonia are frequently managed by doctors, who provide appropriate treatment to alleviate symptoms and prevent complications.</li>
              <li>Gastrointestinal issues: General physicians treat digestive problems like acid reflux, <span className="highlight">irritable bowel syndrome</span>, and constipation, offering dietary advice and medications to relieve symptoms.</li>
              <li>Urinary tract infections (UTIs): General physicians diagnose and treat UTIs, which can cause painful urination, frequent urges to urinate, and abdominal discomfort.</li>
              <li>Skin conditions: <span className="highlight">Rashes, eczema</span>, acne, and other skin problems are addressed by GPs, who may prescribe topical or oral treatments to improve skin health.</li>
              <li>Musculoskeletal pain: General physicians evaluate and treat muscle and joint pain, including <span className="highlight">back pain, arthritis</span>, and sports injuries, recommending exercises, physical therapy, or pain medications as needed.</li>
              <li>Mental health concerns: General physicians can identify and provide initial treatment for mental health issues like anxiety, <span className="highlight">depression</span>, and stress, referring patients to specialists when necessary.</li>
              <li>Headaches: General physicians can diagnose and treat various types of headaches, including tension headaches, migraines, and those caused by underlying health conditions.</li>
              <li>Thyroid disorders: Doctors can detect and manage thyroid disorders like hypothyroidism and hyperthyroidism, which can cause weight changes, fatigue, and mood disturbances.</li>
              <li>Anaemia: GPs can diagnose anaemia, a condition characterised by low haemoglobin levels, and recommend dietary changes or supplements to improve red blood cell production.</li>
              <li>Sleep disorders: General physicians can identify sleep disorders like <span className="highlight">insomnia</span> and <span className="highlight">sleep apnea</span>, offering lifestyle recommendations or referring patients to sleep specialists for further evaluation.</li>
            </ul>
          </div>

          <h2 className="section-title">What are the Other Sub-Specialities of General Medicine?</h2>
          <div className="section-content">
            <p>General medicine encompasses several sub-specialties that focus on specific areas of adult healthcare, These include:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Geriatric Medicine: This sub-speciality focuses on the unique healthcare needs of older adults, addressing age-related conditions and promoting healthy ageing.</li>
              <li>Palliative Care: Palliative care specialists provide compassionate care to patients with serious or life-limiting illnesses, focusing on symptom management and quality of life.</li>
              <li>Sports Medicine: This sub-speciality deals with the prevention, diagnosis, and treatment of sports-related injuries and conditions, helping athletes maintain optimal performance and recover from injuries.</li>
              <li>Preventive Medicine: Preventive medicine specialists focus on promoting health and preventing diseases at the individual and population levels through lifestyle interventions, health education, and public health initiatives.</li>
              <li>Paediatric Medicine: While general medicine primarily focuses on adult care, some general physicians may have additional training in paediatric medicine, allowing them to provide care for children and adolescents.</li>
              <li>Addiction Medicine: This sub-speciality addresses substance use disorders and related health issues, providing evidence-based treatments and support for individuals struggling with addiction.</li>
              <li>Occupational Medicine: Occupational medicine specialists focus on the health and safety of workers, preventing and treating work-related injuries and illnesses, and promoting safe work environments.</li>
              <li>Rural Medicine: General physicians practising in rural areas often have a broad skill set to address the diverse healthcare needs of communities with limited access to specialist care.</li>
            </ul>
          </div>

          <h2 className="section-title">What are the Examinations Conducted Under General Medicine or Tests Performed by a General Physician?</h2>
          <div className="section-content">
            <p>General physicians perform a variety of diagnostic tests and examinations to accurately diagnose and monitor health conditions. Some of the most common tests and examinations include:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Physical Examination: A thorough head-to-toe assessment to evaluate overall health and identify any signs of disease or abnormalities.</li>
              <li>Blood Tests: Various blood tests, such as complete blood count (CBC), metabolic panel, and lipid profile, assess organ function, detect infections, and screen for health issues.</li>
              <li>Urine Analysis: Examination of urine samples to detect <span className="highlight">urinary tract infections</span>, kidney problems, or other health conditions.</li>
              <li>Imaging Studies: X-rays, ultrasounds, CT scans, and MRI scans to visualise internal structures and diagnose conditions such as fractures, tumours, or organ damage.</li>
            </ul>
          </div>

          <h2 className="section-title">Why Choose an Apollo 24|7 General Physician?</h2>
          <div className="section-content">
            <p><span className="highlight">Apollo 24|7</span> doctors for fever and allergies doctor are highly skilled and experienced in providing comprehensive healthcare services. With their expertise and access to advanced facilities, they offer personalised care tailored to each patient's unique needs. Apollo 24|7 diabetes doctors stay up-to-date with the latest medical advancements, ensuring that patients receive the most effective and evidence-based treatments available.</p>
            <p>Patients can easily book general physician appointments through the Apollo 24|7 platform, which offers seamless access to both online and in-clinic consultations. The user-friendly interface allows patients to view general physician reviews, compare general physician fees, and find a doctor near their location by searching for the phrase general physician near me based on their preferences. By choosing an Apollo 24|7 general physician, patients can expect high-quality, patient-centric care that prioritises their health and well-being.</p>
          </div>

          <h2 className="section-title">What to Expect When Visiting a General Physician?</h2>
          <div className="section-content">
            <p>When you visit a general physician, you can expect a comprehensive evaluation of your health concerns and a personalised treatment plan tailored to your needs. Here's what a typical doctor visit may involve:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Medical history review: Your general physician will ask about your medical history, including any pre-existing conditions, medications, <span className="highlight">allergies</span>, and family history of health issues.</li>
              <li>Symptom discussion: You will have the opportunity to discuss your current symptoms, concerns, and any changes in your health status since your last visit.</li>
              <li>Physical examination: Your general physician will perform a thorough physical examination, checking your vital signs, assessing your overall health, and focusing on any areas of concern.</li>
              <li>Diagnostic tests: Depending on your symptoms and medical history, your doctor may order diagnostic tests like blood work, urine tests, or imaging studies to gather more information about your health.</li>
              <li>Diagnosis and treatment plan: Based on the information gathered during your visit, your general physician will provide a diagnosis and develop a treatment plan that may include medications, lifestyle modifications, or referrals to specialists if needed.</li>
            </ul>
          </div>

          <h2 className="section-title">How Can I Get an Appointment With a General Physician?</h2>
          <div className="section-content">
            <p>Getting an appointment with a general physician is easy and convenient with Apollo 24|7. Here are the steps to book a general physician:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Online booking through the website: Visit the <span className="highlight">Apollo 24|7</span> website and navigate to the "Book Appointment" section. Choose your preferred general physician based on their profile, experience, general physician reviews, and general physician fee. Select a suitable date and time for your appointment and complete booking online general physician consultation.</li>
            </ul>
          </div>

          <h2 className="section-title">FAQs</h2>
          <div className="section-content">
            <div className="space-y-4">
              <details className="faq-item">
                <summary className="faq-question">What is the role of a general physician or GP?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">When should I visit a general physician for a fever?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Can a general physician help manage my diabetes?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How can I book an appointment with a general physician near me?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What is the average general physician fee for a consultation?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How can I find reliable general physician reviews before booking an appointment?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What should I expect during my first visit to a general physician?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Can a general physician treat allergies?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How often should I visit my general physician for check-ups?</summary>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What are the qualifications required to become a general physician in India?</summary>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 