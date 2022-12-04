import React, { useState, createContext, useContext } from 'react'

const ToastContext = createContext({})

const ToastContextProvider = ({ children }) => {
  const [toastData, setToastData] = useState([])
  const addToast = newToast =>
    setToastData(prevData => [
      ...prevData,
      { ...newToast, id: window.crypto.randomUUID() },
    ])

  const removeToast = toastIndex =>
    setToastData(prevData =>
      prevData.filter((_, index) => index !== toastIndex)
    )

  return (
    <ToastContext.Provider value={{ toastData, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

const useToast = () => {
  const toastContext = useContext(ToastContext)
  return toastContext
}

export { ToastContextProvider, useToast }
