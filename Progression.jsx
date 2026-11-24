import ProgressionLevel from './ProgressionLevel'
import { useState, useEffect } from 'react'
import Popup from './Popup'

function Progression() {
    const [progress, setProgress] = useState(() => {
        const saved = localStorage.getItem('progression')
        if (saved) {
            return JSON.parse(saved)
        }
        return 0
    })
    const [showPopup, setShowPopup] = useState(false)
    function getIsCompleted(number) {
        return number < progress
    }
    
    useEffect(() => {
        localStorage.setItem('progression', JSON.stringify(progress))
    }, [progress])
    
    function getIsUnlocked(number) {
        return number === progress
    }
    
    function handleCircleClick(number) {
        if (number === progress) {
            setProgress(prev => prev + 1)
        } else if (number < progress) {
            setProgress(prev => prev - 1)
        }
    }
    
    useEffect(() => {
        if (progress === 8) {
            setShowPopup(true)
        }
    }, [progress])
    
    return (
        <div className='page-scroll'>
            <ProgressionLevel title="Beginner's Method" subtitle='Solve your first Cube' number={0} isCompleted={getIsCompleted(0)} isUnlocked={getIsUnlocked(0)} onCircleClick={() => handleCircleClick(0)} />
            <ProgressionLevel title="Tips for Beginner's Method" subtitle='Get more efficient with the Method' number={1} isCompleted={getIsCompleted(1)} isUnlocked={getIsUnlocked(1)} onCircleClick={() => handleCircleClick(1)} />
            <ProgressionLevel title='Beginner CFOP' subtitle='Cross, Intuitive F2L, 4-Look-LL' number={2} isCompleted={getIsCompleted(2)} isUnlocked={getIsUnlocked(2)} onCircleClick={() => handleCircleClick(2)} />
            <ProgressionLevel title='Cross Tips' subtitle='Get more efficient with the Cross' number={3} isCompleted={getIsCompleted(3)} isUnlocked={getIsUnlocked(3)} onCircleClick={() => handleCircleClick(3)} />
            <ProgressionLevel title='Full PLL' subtitle='Learn 21 Algorithms' number={4} isCompleted={getIsCompleted(4)} isUnlocked={getIsUnlocked(4)} onCircleClick={() => handleCircleClick(4)} />
            <ProgressionLevel title='Advanced Intuitive F2L' subtitle='Get more efficient in F2L' number={5} isCompleted={getIsCompleted(5)} isUnlocked={getIsUnlocked(5)} onCircleClick={() => handleCircleClick(5)} />
            <ProgressionLevel title='Full OLL' subtitle='The last 57 Algs you have to learn' number={6} isCompleted={getIsCompleted(6)} isUnlocked={getIsUnlocked(6)} onCircleClick={() => handleCircleClick(6)} />
            <ProgressionLevel title='Reduce Pauses' subtitle='Learn to look ahead' number={7} isCompleted={getIsCompleted(7)} isUnlocked={getIsUnlocked(7)} onCircleClick={() => handleCircleClick(7)} />
            {showPopup && (
                <Popup title='Congrats!' message='You completed the entire Progression!' onConfirm={() => setShowPopup(false)} onCancel={() => setShowPopup(false)} />
            )}
        </div>
    )
}

export default Progression
