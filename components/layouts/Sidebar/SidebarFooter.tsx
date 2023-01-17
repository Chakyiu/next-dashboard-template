'use client'

// ** Context Imports
import { useSidebar } from './SidebarContext'

interface Props {
  isSidebarExpanded: boolean | null
}

const SidebarFooter = ({ isSidebarExpanded }: Props) => {
  const { setIsSidebarExpanded } = useSidebar()

  const triggerSidebarExpanded = () => {
    setIsSidebarExpanded(!isSidebarExpanded)

    document.cookie = `_is_sidebar_expanded=${!isSidebarExpanded}; path=/; max-age=${60 * 60 * 24 * 30}};`
  }

  return (
    <div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
      <div className='px-3 py-2'>
        <button onClick={() => triggerSidebarExpanded()}>
          <span className='sr-only'>Expand / collapse sidebar</span>
          <svg className='w-6 h-6 fill-current sidebar-expanded:rotate-180' viewBox='0 0 24 24'>
            <path className='text-slate-400' d='M19.586 11l-5-5L16 4.586 23.414 12 16 19.414 14.586 18l5-5H7v-2z' />
            <path className='text-slate-600' d='M3 23H1V1h2z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SidebarFooter
