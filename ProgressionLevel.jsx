import ProgressionCard from './ProgressionCard'
import ProgressionCircle from './ProgressionCircle'

function ProgressionLevel({ isCompleted, isUnlocked, onCircleClick, title, subtitle, number }) {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '50px 1fr',
            alignItems: 'center',
            padding: '5px'
        }}>
            <ProgressionCircle onClicking={onCircleClick} isCompleted={isCompleted} isUnlocked={isUnlocked} />
            <ProgressionCard isCompleted={isCompleted} title={title} subTitle={subtitle} />
        </div>
    )
}

export default ProgressionLevel