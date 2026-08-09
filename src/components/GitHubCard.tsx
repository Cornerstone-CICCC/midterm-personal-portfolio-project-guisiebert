import { Github } from 'lucide-react'
import { profile } from '../data/profile'

export default function GitHubCard() {
  return (
    <div className="col-span-2 row-span-2 flex flex-col gap-3 rounded-[20px] border-2 border-gray-200 bg-white p-8">
      <div className="flex items-center gap-2.5">
        <div className="flex size-[50px] shrink-0 items-center justify-center rounded-lg bg-gray-900">
          <Github className="size-[30px] text-white" />
        </div>
        <span className="flex-1 text-xl font-bold text-gray-900">
          My GitHub Profile
        </span>
        <a
          href={`https://github.com/${profile.github}`}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border-[1.5px] border-gray-300 bg-white px-4 py-[5px] text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Follow
        </a>
      </div>

      <div className="my-auto max-h-40 flex-1 overflow-x-auto overflow-y-hidden">
        <img
          src={`https://ghchart.rshah.org/${profile.github}`}
          alt="GitHub contribution chart"
          className="h-full max-w-none"
        />
      </div>

      <p className="text-sm text-gray-500">
        Lots of contributions in the last year
      </p>
    </div>
  )
}
