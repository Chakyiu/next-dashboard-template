'use client'

// ** Icons Imports
import { RxPinRight } from 'react-icons/rx'

// ** Store Imports
import { useSetting } from '@store/useSetting'

const SidebarFooter = () => {
  const { setting, updateSetting } = useSetting()

  const changeSidebarExpanded = () => {
    updateSetting({
      ...setting,
      isSidebarExpanded: !setting.isSidebarExpanded
    })
  }

  return (
    <div className='pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto'>
      <div className='px-3 py-2'>
        <button onClick={changeSidebarExpanded}>
          <span className='sr-only'>Expand / collapse sidebar</span>
          <RxPinRight className='w-6 h-6 text-gray-400 sidebar-expanded:rotate-180 transition duration-200' />
        </button>
      </div>
    </div>
  )
}

export default SidebarFooter
