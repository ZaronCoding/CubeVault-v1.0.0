import 'cubing/twisty'
import { useRef } from 'react'

function AlgCard({ alg, name, algSet }) {
    function handleVisualization(algSet) {
        if (algSet === 'PBL') return '3D'
        if (algSet === 'OLL') return 'experimental-2D-LL'
        if (algSet === 'PLL') return 'experimental-2D-LL'
    }
    
    function handleEvent(algSet) {
        if (algSet === 'OLL') return '3x3x3'
        if (algSet === 'PLL') return '3x3x3'
        if (algSet === 'PBL') return '2x2x2'
    }
    
    function handleStickering(algSet) {
        if (algSet === 'OLL') return 'OLL'
        if (algSet === 'PLL') return 'PLL'
        if (algSet === 'PBL') return null
    }
    
    function handleGlowColor(algSet) {
        if (algSet === 'PBL') return '0 0 10px green'
        if (algSet === 'OLL') return '0 0 10px yellow'
        if (algSet === 'PLL') return '0 0 10px orange'
    }
    
    function getInverse(alg) {
        const inverse = alg.split(' ').reverse().map(move => {
            if (move.endsWith("'")) return move.replace("'", "")
            if (move.endsWith("2")) return move
            return move + "'"
        }).join(" ")
        return inverse
    }
    
    const setup = getInverse(alg)
    const visualization = handleVisualization(algSet)
    const stickering = handleStickering(algSet)
    const glowColor = handleGlowColor(algSet)
    const event = handleEvent(algSet)
    
    return (
        <div style={{
            boxSizing: 'border-box',
            height: '230px',
            textAlign: 'center',
            backgroundColor: '#222222',
            border: 'solid 2px #226666',
            borderRadius: '15px',
            fontSize: '15px',
            padding: '5px',
            margin: '2px',
            boxShadow: '0 0 20px #556666'
        }}>
            <twisty-player style={{
                width: '140px',
                height: '140px',
                justifySelf: 'center',
                boxShadow: glowColor
            }} alg={alg} experimental-setup-alg={setup} background='none' control-panel='none' hint-facelets='none' visualization={visualization} experimental-stickering={stickering} puzzle={event}></twisty-player>
            <h3>{name}</h3>
            <p style={{ marginBottom: '5px', fontSize: '14px' }}>{alg}</p>
        </div>
    )
}

export default AlgCard













