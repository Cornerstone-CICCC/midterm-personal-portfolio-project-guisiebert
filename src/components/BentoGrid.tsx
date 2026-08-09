import type { ReactNode } from 'react'

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mt-7 mb-3 text-xl font-semibold text-gray-900">{children}</h2>
  )
}

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid auto-rows-[200px] grid-cols-2 gap-4 bento:grid-cols-4">
      {children}
    </div>
  )
}
