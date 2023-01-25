'use client'

// ** Lib Imports
import Link from 'next/link'
import { useRouter } from 'next/navigation'

// ** Context Imports
import { useSetting, ISetting, getNewDocumentCookie } from '@contexts/SettingContext'

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
        <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z' />
        </svg>
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
