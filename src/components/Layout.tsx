import { Outlet, useLocation } from 'react-router-dom'
import ProfileSidebar from './ProfileSidebar'

export default function Layout() {
  const { pathname } = useLocation()
  // The case-study pages give the content the full width on smaller screens.
  const hideSidebarWhenStacked = pathname !== '/'

  return (
    <div className="mx-auto flex max-w-[500px] flex-col items-start gap-12 px-4 py-20 bento:max-w-[800px] side:max-w-[1160px] side:flex-row">
      <ProfileSidebar hideWhenStacked={hideSidebarWhenStacked} />
      <div className="w-full flex-1">
        <Outlet />
      </div>
    </div>
  )
}
