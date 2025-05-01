'use client'

import { useEffect, useState } from 'react'
import Navbar from './Navbar'

export default function AppWrapper({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <Navbar />
      {children}
    </>
  )
} 