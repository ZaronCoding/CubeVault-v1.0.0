

function ProgressionCircle({ isCompleted, isUnlocked, onClicking }) {
    const content = isCompleted ? '✓' : isUnlocked ? '🔓' : '🔒'
    return (
        <div style={{
            height: '40px',
            width: '40px',
            backgroundColor: isCompleted ? '#00AA00' : '#777788',
            border: isCompleted ? 'solid 2px #008800' : 'solid 2px #555566',
            borderRadius: '50%',
            boxShadow: isCompleted ? '0 0 20px #008800' : '0 0 20px #BBBBCC',
            display: 'flex',
            textAlign: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
        }} onClick={onClicking}>
            <p>{content}</p>
        </div>
    )
}

export default ProgressionCircle