import type { LucideIcon } from 'lucide-react'

export type Social = {
  name: string
  handle: string
  href: string
  icon: LucideIcon
  className: string
}

export default function SocialCard({
  name,
  handle,
  href,
  icon: Icon,
  className,
}: Social) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`flex flex-col justify-between rounded-[20px] p-5 text-white transition-transform duration-250 hover:scale-[1.02] ${className}`}
    >
      <Icon className="size-7 text-white" />
      <div>
        <p className="mb-[3px] text-[0.9rem] font-semibold">{name}</p>
        <p className="text-sm opacity-80">{handle}</p>
      </div>
    </a>
  )
}
