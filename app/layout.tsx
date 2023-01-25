// ** Lib Imports
import { cookies } from 'next/headers'

// ** Styles Imports
import '@styles/globals.css'

// ** Components Imports
import Sidebar from '@components/layouts/Sidebar'

// ** Context Imports
import { SettingProvider, defaultInitialSetting } from '@contexts/SettingContext'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const setting = cookies().get('_setting')?.value
    ? JSON.parse(cookies().get('_setting')!.value)
    : defaultInitialSetting

  return (
    <html lang='en'>
      <head />
      <body className='font-inter antialiased bg-slate-100 text-slate-600'>
        <SettingProvider initialSetting={setting}>
          <div className='flex h-screen overflow-hidden'>
            <Sidebar />
            <div>{children}</div>
          </div>
        </SettingProvider>
      </body>
    </html>
  )
}
