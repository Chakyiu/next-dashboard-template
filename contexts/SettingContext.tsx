'use client'

import React, { useState } from 'react'

export interface ISetting {
  isSidebarExpanded: boolean
  isSidebarOpened: boolean
}

const SettingContext = React.createContext<
  [ISetting, React.Dispatch<React.SetStateAction<null | ISetting>>] | undefined
>(undefined)

const SettingProvider = ({ children, initialSetting }: { children: React.ReactNode; initialSetting: ISetting }) => {
  const [setting, setSetting] = useState<null | ISetting>(null)

  return (
    <SettingContext.Provider value={[setting !== null ? setting : initialSetting, setSetting]}>
      {children}
    </SettingContext.Provider>
  )
}

const useSetting = () => {
  const context = React.useContext(SettingContext)

  if (context === undefined) {
    throw new Error('useSetting Error!')
  }

  return context
}

const getNewDocumentCookie = (newSetting: ISetting) =>
  `_setting=${JSON.stringify(newSetting)}; path=/; max-age=${60 * 60 * 24 * 30}};`

const defaultInitialSetting: ISetting = {
  isSidebarExpanded: true,
  isSidebarOpened: true
}

export { SettingProvider, useSetting, defaultInitialSetting, getNewDocumentCookie }
