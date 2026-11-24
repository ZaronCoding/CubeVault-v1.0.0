

function HomeCard({ onCardClick, title, message, color }) {
    const border = ['solid 3px', color].join(" ")
    const glow = ['0 0 15px', color].join(" ")
    
    return (
        <div style={{
            background: '#111111',
            border: border,
            borderRadius: '15px',
            boxShadow: glow,
            color: 'white',
            padding: '5px',
            boxSizing: 'border-box',
            margin: '5px',
            height: '210px'
        }} onClick={onCardClick}>
            <h2 style={{ fontWeight: 'bold', textShadow: '0 0 10px #666666' }}>{title}</h2>
            <p style={{ fontSize: '13px', textShadow: '0 0 10px #666666' }}>{message}</p>
        </div>
    )
}

export default HomeCard
