import { ArrowUpRight, type LucideIcon } from 'lucide-react'

export type NarrowLink = {
  label: string
  href: string
  icon: LucideIcon
}

export default function NarrowLinkCard({ label, href, icon: Icon }: NarrowLink) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative flex items-center gap-3 rounded-2xl bg-white px-5 text-gray-900 transition-transform duration-250 hover:scale-[1.02]"
    >
      <Icon className="size-5 shrink-0 text-[#767f8c]" />
      <span className="font-medium">{label}</span>
      <ArrowUpRight className="absolute top-4 right-4 size-4 text-gray-400 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </a>
  )
}
