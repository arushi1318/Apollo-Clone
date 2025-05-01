import Link from 'next/link'

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm mb-6">
      <Link href="/" className="text-blue-600 hover:underline">Home</Link>
      <span className="text-gray-500">/</span>
      <Link href="/doctors" className="text-blue-600 hover:underline">Doctors</Link>
      <span className="text-gray-500">/</span>
      <span className="text-gray-600">General Physicians</span>
    </div>
  )
} 