'use client'

// ** Context Imports
import { useSetting } from '@contexts/SettingContext'

// ** Components Imports
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'

const SidebarContainer = () => {
  const [{ isSidebarOpened, isSidebarExpanded }] = useSetting()

  return (
    <div className={`${isSidebarExpanded ? 'sidebar-expanded' : ''}`}>
      <div
        id='sidebar'
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          isSidebarOpened ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <SidebarHeader />

        <div className='space-y-8"'></div>

        <SidebarFooter />
      </div>
    </div>
  )
}

export default SidebarContainer
