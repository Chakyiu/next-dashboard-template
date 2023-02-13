'use client'

// ** Libs Imports
import { useRef } from 'react'

// ** Store Imports
import { useStore } from '@store/store'

const StoreInitializer = () => {
  const initialized = useRef<boolean>(false)

  if (!initialized.current && typeof window !== 'undefined') {
    useStore.setState(JSON.parse(sessionStorage.getItem('_store') || '{}')['state'])
    initialized.current = true
  }

  return null
}

export default StoreInitializer
