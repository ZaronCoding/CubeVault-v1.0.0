

function ProgressionCard({ isCompleted, title, subTitle }) {
    return (
        <div style={{
            display: 'grid',
            height: '60px',
            boxSizing: 'border-box',
            border: isCompleted ? 'solid 2px #008800' : 'solid 2px #000011',
            boxShadow: isCompleted ? '0 0 20px #008800' : '0 0 20px #777788',
            backgroundColor: '#111122',
            borderRadius: '10px',
            textAlign: 'left',
            padding: '7px'
        }}>
            <h3 style={{ margin: 0 }}>{title}</h3>
            <p style={{ margin: 0 }}>{subTitle}</p>
        </div>
    )
}

export default ProgressionCard