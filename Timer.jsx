import { useState, useEffect, useRef } from 'react'

function Timer({ onStop }) {
    const [elapsedTime, setElapsedTime] = useState(0)
    const [isRunning, setIsRunning] = useState(false)
    const [isReady, setIsReady] = useState(false)
    const [isHolding, setIsHolding] = useState(false)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)
    const justStoppedRef = useRef(false)
    const holdTimeoutRef = useRef(null)
    
    useEffect(() => {
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 1)
        }
        
        return () => {
            clearInterval(intervalIdRef.current)
        }
        
    }, [isRunning])
    
    function handlePressDown() {
        if (isRunning) {
            stop()
            justStoppedRef.current = true
        } else {
            justStoppedRef.current = false
            setIsHolding(true)
            setIsReady(false)
            holdTimeoutRef.current = setTimeout(() => {
                setIsReady(true)
                setIsHolding(false)
            }, 330)
        }
    }
    
    function handleRelease() {
        clearTimeout(holdTimeoutRef.current)
        setIsHolding(false)
        if (!isRunning && !justStoppedRef.current && isReady) {
            start()
        }
    }
    
    function start() {
        setElapsedTime(0)
        setIsRunning(true)
        startTimeRef.current = Date.now()
        setIsHolding(false)
        setIsReady(false)
    }
    
    function stop() {
        const finalTime = Date.now() - startTimeRef.current
        setIsRunning(false)
        setElapsedTime(finalTime)
        onStop(finalTime)
    }
    
    function formatTime() {
        let minutes = Math.floor(elapsedTime / (1000 * 60) % 60)
        let seconds = Math.floor(elapsedTime / (1000) % 60)
        let milliseconds = Math.floor(elapsedTime % 1000)
        
        milliseconds = String(milliseconds).padStart(3, '0')
        
        let time = ""
        
        if (minutes == 0) {
            time = `${seconds}.${milliseconds}`
        } else if (minutes >= 1) {
            seconds = String(seconds).padStart(2, '0')
            time = `${minutes}:${seconds}.${milliseconds}`
        }
        
        return time
    }
    
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            justifySelf: 'stretch',
            alignSelf: 'stretch',
            touchAction: 'none'
        }} onPointerDown={(e) => {
            handlePressDown()
            e.target.setPointerCapture(e.pointerId)
        }} onPointerUp={handleRelease}>
            <h1 style={{
                fontSize: '60px',
                textShadow: isReady ? '0 0 10px #00DD00, 0 0 20px #00AA00, 0 0 30px #00AA00' : isHolding ? '0 0 10px #790000, 0 0 20px #790000, 0 0 30px #790000' : '0 0 10px #777979, 0 0 20px #777979, 0 0 30px #777979',
                color: isReady ? 'lime' : isHolding ? 'red' : 'white'
            }}>{formatTime()}</h1>
        </div>
    )
}

export default Timer









