import { ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export type Project = {
  title: string
  description: string
  linkLabel: string
  href: string
  /** Internal routes are rendered with react-router's <Link>. */
  internal?: boolean
  badge?: string
  variant: 'gradient' | 'minimal'
}

const variants = {
  gradient: 'bg-linear-135 from-purple-500 to-pink-500 text-white',
  minimal: 'bg-white border-2 border-gray-200 text-gray-900',
} as const

export default function ProjectCard({
  title,
  description,
  linkLabel,
  href,
  internal,
  badge,
  variant,
}: Project) {
  const className = `col-span-2 flex flex-col justify-between rounded-[20px] p-5 transition-transform duration-250 hover:scale-[1.02] ${variants[variant]}`

  const content: ReactNode = (
    <>
      <div>
        {badge && (
          <span className="mb-2.5 inline-block rounded-full bg-gray-900 px-2.5 py-[3px] text-[0.7rem] font-bold tracking-[0.08em] text-white">
            {badge}
          </span>
        )}
        <h3 className="mb-2 text-2xl font-bold">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-3.5 flex items-center gap-1.5 text-sm font-medium">
        <span>{linkLabel}</span>
        <ExternalLink className="size-3.5" />
      </div>
    </>
  )

  if (internal) {
    return (
      <Link to={href} className={className}>
        {content}
      </Link>
    )
  }

  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {content}
    </a>
  )
}
