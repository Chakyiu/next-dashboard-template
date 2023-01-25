'use client'

// ** Context Imports
import { useSetting } from '@contexts/SettingContext'

const SidebarBackdrop = () => {
  const [{ isSidebarOpened }] = useSetting()

  return (
    <div
      className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
        isSidebarOpened ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden='true'
    />
  )
}

export default SidebarBackdrop
