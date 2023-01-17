'use client'

// ** Lib Imports
import React, { useState } from 'react'

interface IContext {
  isSidebarOpened: boolean | null
  isSidebarExpanded: boolean | null
  setIsSidebarOpened: React.Dispatch<React.SetStateAction<boolean | null>>
  setIsSidebarExpanded: React.Dispatch<React.SetStateAction<boolean | null>>
}

const SidebarContext = React.createContext<IContext | undefined>(undefined)

interface Props {
  children: React.ReactNode
  initialState: {
    isSidebarOpened: boolean | null
    isSidebarExpanded: boolean | null
  }
}

const SidebarProvider = ({ children, initialState }: Props) => {
  const [optimisticIsSidebarOpened, setOptimisticIsSidebarOpened] = useState<boolean | null>(null)
  const [optimisticIsSidebarExpanded, setOptimisticIsSidebarExpanded] = useState<boolean | null>(null)

  const isSidebarOpened = optimisticIsSidebarOpened !== null ? optimisticIsSidebarOpened : initialState.isSidebarOpened
  const isSidebarExpanded =
    optimisticIsSidebarExpanded !== null ? optimisticIsSidebarExpanded : initialState.isSidebarExpanded

  return (
    <SidebarContext.Provider
      value={{
        isSidebarOpened: isSidebarOpened,
        isSidebarExpanded: isSidebarExpanded,
        setIsSidebarOpened: setOptimisticIsSidebarOpened,
        setIsSidebarExpanded: setOptimisticIsSidebarExpanded
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

const useSidebar = () => {
  const context = React.useContext(SidebarContext)

  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }

  return context
}

export { SidebarProvider, useSidebar }
