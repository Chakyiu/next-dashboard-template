// ** Libs Imports
import { customStorage } from './store'
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type TSetting = {
  isSidebarExpanded: boolean
  isSidebarOpened: boolean
}

type TAction = {
  updateSetting: (_setting: TSetting) => void
}

type TState = {
  setting: TSetting
}

const useSetting = create<TState & TAction>()(
  persist(
    set => ({
      setting: {
        isSidebarExpanded: true,
        isSidebarOpened: true
      },
      updateSetting: _setting => {
        set(state => ({ ...state, setting: _setting }))
      }
    }),
    {
      name: '_setting',
      storage: createJSONStorage(() => customStorage)
    }
  )
)

export { useSetting }
