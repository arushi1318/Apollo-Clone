# Apollo 24/7 Clone

A modern, full-stack clone of the Apollo 24/7 doctor consultation platform, built with Next.js, React, MongoDB, and Tailwind CSS. This project demonstrates a real-world healthcare web app with advanced features, beautiful UI, and robust backend integration.

---

## 🚀 Features

- 🩺 Doctor listing with advanced filters (specialty, experience, fees, language, mode)
- 🔍 Real-time search functionality
- 📱 Responsive, mobile-first design
- 🗂️ Doctor profile view with details
- 🏥 Book consultations (online/hospital)
- 🌐 RESTful API endpoints
- 🗄️ MongoDB integration for persistent data
- ⚡ Fast, modern UI with Tailwind CSS

---

## 🖼️ Application Screenshots

### 🏠 Landing Page
![Landing Page](public/screenshots/Screenshot%202025-05-01%20214554.png)
*The welcoming homepage with a clean, modern design and quick access to doctor search.*

### 👨‍⚕️ Doctor List
![Doctor List](public/screenshots/Screenshot%202025-05-01%20214622.png)
*Browse a comprehensive list of doctors with specialties, ratings, and quick filters.*

### 🧰 Filters Panel
![Filters Panel](public/screenshots/Screenshot%202025-05-01%20214716.png)
*Powerful filters for experience, fees, language, and consultation mode to find the perfect doctor.*

### 🔎 Search Results
![Search Results](public/screenshots/Screenshot%202025-05-01%20214734.png)
*Instant search results as you type, with highlighted matches and relevant doctor cards.*

### 📝 Doctor Profile
![Doctor Profile](public/screenshots/Screenshot%202025-05-01%20214749.png)
*Detailed doctor profile with bio, experience, languages, and booking options.*

### 🏥 Book Consultation
![Book Consultation](public/screenshots/Screenshot%202025-05-01%20214804.png)
*Seamless booking interface for online or hospital consultations.*

### 📱 Mobile Responsive View
![Mobile View](public/screenshots/Screenshot%202025-05-01%20214823.png)
*Fully responsive design for a smooth experience on all devices.*

---

## 🛠️ Technologies Used
- **Next.js 13** (App Router)
- **React**
- **MongoDB**
- **Tailwind CSS**
- **Heroicons**
- **Headless UI**

---

## 📦 Project Structure
- `/app` - Next.js app router pages and API routes
- `/components` - React components
- `/lib` - Utility functions and database connection
- `/models` - MongoDB schemas
- `/public` - Static assets (including screenshots)

---

## ⚙️ Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/arushi1318/Apollo-Clone.git
   cd Apollo-Clone
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```
   MONGODB_URI=mongodb://localhost:27017/apollo247
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ```
4. **Start the development server**
   ```bash
   npm run dev
   ```
5. **Open** [http://localhost:3000](http://localhost:3000) **in your browser**

---

## 📚 API Endpoints

### `GET /api/doctors`
Fetch doctors with optional filters:
- `page` (default: 1)
- `limit` (default: 10)
- `experience` (format: "min-max")
- `fees` (format: "min-max")
- `language`
- `mode` ("online" or "hospital")

---

## 📖 Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Apollo 24/7](https://www.apollo247.com/)

---

## 📝 License

This project is licensed under the MIT License.

---

## 🙏 Credits

- Inspired by [Apollo 24/7](https://www.apollo247.com/)
- Built by [Arushi](https://github.com/arushi1318)

---

> **Feel free to fork, star, and contribute to this project!**
