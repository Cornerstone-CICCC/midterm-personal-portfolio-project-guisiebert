import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="rounded-[20px] bg-white p-8">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Page not found</h1>
      <p className="mb-6 text-gray-500">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="flex items-center gap-1.5 text-[0.9rem] font-medium text-gray-500 transition-colors hover:text-gray-900"
      >
        <ArrowLeft className="size-4" />
        Back to portfolio
      </Link>
    </div>
  )
}
