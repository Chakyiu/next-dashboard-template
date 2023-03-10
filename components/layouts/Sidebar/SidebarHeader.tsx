'use client'

// ** Lib Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// ** Context Imports
import { useSetting, ISetting, getNewDocumentCookie } from '@contexts/SettingContext'

// ** Icons Imports
import { RxArrowLeft } from 'react-icons/rx'

const SidebarHeader = () => {
  const router = useRouter()
  const [setting, setSetting] = useSetting()

  const changeSidebarOpened = () => {
    const newCookie: ISetting = {
      ...setting,
      isSidebarOpened: !setting.isSidebarOpened
    }

    setSetting(newCookie)

    document.cookie = getNewDocumentCookie(newCookie)
    router.refresh()
  }

  return (
    <div className='flex justify-between mb-10 pr-3 sm:px-2'>
      <button
        className='lg:hidden text-slate-500 hover:text-slate-400'
        onClick={changeSidebarOpened}
        aria-controls='sidebar'
        aria-expanded={setting.isSidebarOpened || false}
      >
        <span className='sr-only'>Close sidebar</span>
        <RxArrowLeft className='w-6 h-6 text-gray-400 ' />
      </button>

      <Link href='/' className='block'>
        <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg' stroke='null'>
          <g stroke='null'>
            <ellipse
              ry='12'
              rx='12'
              id='svg_3'
              cy='20'
              cx='20'
              strokeDasharray={'5,2,2,2,2,2'}
              strokeWidth='0'
              stroke='#000'
              fill='#ffffff'
            />
            <ellipse
              ry='12'
              rx='12'
              id='svg_2'
              cy='12'
              cx='12'
              strokeDasharray={'5,2,2,2,2,2'}
              strokeWidth='0'
              stroke='#000'
              fill='#000000'
            />
          </g>
        </svg>
      </Link>
    </div>
  )
}

export default SidebarHeader
