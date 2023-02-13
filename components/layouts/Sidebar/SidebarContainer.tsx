'use client'

// ** Lib Imports
import { useState, useEffect } from 'react'

// ** Components Imports
import SidebarHeader from './SidebarHeader'
import SidebarFooter from './SidebarFooter'

// ** Store Imports
import { useSetting } from '@store/useSetting'

const SidebarContainer = () => {
  const { isSidebarOpened, isSidebarExpanded } = useSetting(state => state.setting)
  const [sidebarExpandedClass, setSidebarExpandedClass] = useState<string>('')

  console.log(isSidebarExpanded)

  // useEffect(() => {
  //   setSidebarExpandedClass(isSidebarExpanded ? 'sidebar-expanded' : '')
  // }, [isSidebarExpanded])

  return (
    <div className={`${isSidebarExpanded ? 'sidebar-expanded' : 'aaa'}`}>
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
