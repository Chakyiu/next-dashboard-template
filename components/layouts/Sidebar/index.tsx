// ** Lib Imports
import { cookies } from 'next/headers'

// ** Components Imports
import SidebarBackdrop from './SidebarBackdrop'
import SidebarContainer from './SidebarContainer'

// ** Context Imports
import { SidebarProvider } from './SidebarContext'

const Sidebar = () => {
  const isSidebarOpened = cookies().get('_is_sidebar_opened')?.value === 'true'
  const isSidebarExpanded = cookies().get('_is_sidebar_expanded')?.value === 'true'

  return (
    <SidebarProvider initialState={{ isSidebarOpened: isSidebarOpened, isSidebarExpanded: isSidebarExpanded }}>
      <SidebarBackdrop />
      <SidebarContainer />
    </SidebarProvider>
  )
}

export default Sidebar
