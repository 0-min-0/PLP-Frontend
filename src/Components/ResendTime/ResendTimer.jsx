import React, { useState, useEffect } from 'react'

export const ResendTimer = ({ onTimerEnd, initialTime = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime)

  useEffect(() => {
    if (timeLeft === 0) {
      onTimerEnd()
      return
    }

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [timeLeft, onTimerEnd])

  return (
    <div className="text-center">
      <p className="text text-[color:var(--color-card-text)]">
        Podrás reenviar el correo en {timeLeft} segundos
      </p>
    </div>
  )
}