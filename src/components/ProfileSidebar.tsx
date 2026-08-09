import { profile } from '../data/profile'

type ProfileSidebarProps = {
  /** Hide the sidebar when the layout stacks (below 1200px). */
  hideWhenStacked?: boolean
}

export default function ProfileSidebar({
  hideWhenStacked = false,
}: ProfileSidebarProps) {
  return (
    <aside
      className={`w-full shrink-0 pt-2 side:w-[280px] ${
        hideWhenStacked ? 'hidden side:block' : ''
      }`}
    >
      <img
        src={profile.avatar}
        alt={profile.name}
        className="mb-6 block size-50 rounded-full object-cover"
      />
      <h1 className="mb-3.5 text-3xl font-bold text-gray-900">
        {profile.name}
      </h1>
      <p className="mb-1.5 leading-snug text-gray-500">
        <strong>{profile.title}</strong>
      </p>
      <p className="mb-1.5 leading-snug text-gray-500">
        {profile.stack.map((line, i) => (
          <span key={line}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </p>
      <p className="mb-1.5 leading-snug text-gray-500">
        {profile.origin}
        <br />
        {profile.location}
      </p>
    </aside>
  )
}
