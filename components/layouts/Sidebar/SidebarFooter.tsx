'use client'

// ** Lib Imports
import { useRouter } from 'next/navigation'

// ** Context Imports
import { useSetting, ISetting, getNewDocumentCookie } from '@contexts/SettingContext'

// ** Icons Imports
import { RxPinRight } from 'react-icons/rx'

const SidebarFooter = () => {
  const router = useRouter()
  const [setting, setSetting] = useSetting()

  const changeSidebarExpanded = () => {
    const newCookie: ISetting = {
      ...setting,
      isSidebarExpanded: !setting.isSidebarExpanded
    }
    setSetting(newCookie)

    document.cookie = getNewDocumentCookie(newCookie)
    router.refresh()
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
