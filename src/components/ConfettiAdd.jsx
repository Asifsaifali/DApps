import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
const ConfettiAdd = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default ConfettiAdd