import {useState, useEffect} from 'react'
import './index.css'

export default function StopWatch() {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isTimestarted, setIstimeStarted] = useState(false)

  let interval

  useEffect(() => {
    interval =
      isTimestarted &&
      setInterval(() => {
        setSeconds(seconds + 1)
        if (seconds === 59) {
          setMinutes(minutes + 1)
          setSeconds(0)
        }
      }, 1000)
    return () => clearInterval(interval)
  })

  const startTime = () => {
    setIstimeStarted(true)
  }

  const stopButton = () => {
    setIstimeStarted(false)
  }
  const resetButton = () => {
    setMinutes(0)
    setSeconds(0)
    setIstimeStarted(false)
  }

  return (
    <div className="stop-watch-container">
      <div className="header">
        <h1 className="heading">Stopwatch</h1>
      </div>
      <div className="stop-watch-timer-container">
        <div className="timer-text-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
            alt="stopwatch"
            className="logo"
          />
          <p className="Timer">Timer</p>
        </div>
        <div className="timer-container">
          <h1 className="start-time">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
        </div>
        <div className="start-stop-reset-buttons">
          <button className="start-button" type="button" onClick={startTime}>
            Start
          </button>
          <button className="stop-button" type="button" onClick={stopButton}>
            Stop
          </button>
          <button className="reset-button" type="button" onClick={resetButton}>
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}
