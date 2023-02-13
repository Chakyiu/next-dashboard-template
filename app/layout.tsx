// ** Styles Imports
import '@styles/globals.css'

// ** Components Imports
import Sidebar from '@components/layouts/Sidebar'

// ** Store Imports
import StoreInitializer from '@store/StoreInitializer'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head />
      <body className='font-inter antialiased bg-slate-100 text-slate-600'>
        <div className='flex h-screen overflow-hidden'>
          <Sidebar />
          <div>{children}</div>
        </div>
      </body>
    </html>
  )
}
