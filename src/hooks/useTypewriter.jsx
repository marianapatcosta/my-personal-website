import { useEffect, useState } from 'react'

const useTypeWriter = (stringToType, delayToStart) => {
  const [{ name, nameIndex }, setName] = useState({ name: '', nameIndex: 0 })
  const time = delayToStart && nameIndex === 0 ? delayToStart : 100
  useEffect(() => {
    if (nameIndex > stringToType.length) return
    const delay = setTimeout(() => {
      setName(prevState => ({
        name: stringToType.substring(0, prevState.nameIndex),
        nameIndex: prevState.nameIndex + 1,
      }))
      clearTimeout(delay)
    }, time)
    return () => clearTimeout(delay)
  }, [name, nameIndex, time, stringToType])

  return name
}

export default useTypeWriter
