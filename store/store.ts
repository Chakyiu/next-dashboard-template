'use client'

// ** Cookies Imports
import { getCookie, setCookie, deleteCookie } from 'cookies-next'

// ** Types Imports
import { StateStorage } from 'zustand/middleware'

// TODO: cleansing comment if cookies-next work well
const customStorage: StateStorage = {
  getItem: async (...args) =>
    new Promise(resolve => {
      // if (typeof window === 'undefined') resolve(null)
      // else
      //   setTimeout(() => {
      //     resolve(window.sessionStorage.getItem(...args))
      //   }, 0)

      if (typeof window === 'undefined') resolve(null)
      resolve(getCookie(...args) as string)
    }),
  setItem: (...args) => {
    // window.sessionStorage.setItem(...args)

    setCookie(...args)
  },
  removeItem: (...args) => {
    // window.sessionStorage.removeItem(...args)

    deleteCookie(...args)
  }
}

export { customStorage }
