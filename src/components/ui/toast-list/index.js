import React from 'react'
import { Toast } from '../..'
import { TOAST_OFFSET } from '../../../constants'
import { useToast } from '../../../hooks/toast'

const ToastList = () => {
  const { toastData, removeToast } = useToast()

  return (
    <>
      {!!toastData.length &&
        toastData.map((data, index) => (
          <Toast
            key={`toast-${data.id}`}
            message={data.message}
            type={data.type}
            style={{ top: `${TOAST_OFFSET * index + 2}rem` }}
            onClear={() => removeToast(index)}
          />
        ))}
    </>
  )
}

export default ToastList
