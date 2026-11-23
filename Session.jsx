

function Session({ times }) {
    function formatTime(time) {
        if (time == null) {
            return '-'
        }
        let minutes = Math.floor(time / (1000 * 60) % 60)
        let seconds = Math.floor(time / 1000 % 60)
        let ms = Math.floor(time % 1000)
        let formatted = ""

        if (minutes == 0) {
            formatted = `${seconds}.${String(ms).padStart(3, '0')}`
        } else {
            formatted = `${minutes}:${String(seconds).padStart(2, '0')}.${String(ms).padStart(3, '0')}`
        }
        return formatted
    }
    return (
        <div style={{
            padding: '10px',
            maxHeight: '80px',
            overflowY: 'auto',
            overflowX: 'hidden',
            fontSize: '10px'
        }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid #666' }}>
                        <th style={{ padding: '5px', width: '50px', color: '#00FFFF' }}>Nr.</th>
                        <th style={{ padding: '5px', color: '#00FFFF' }}>Time</th>
                        <th style={{padding: '5px', color: '#00FFFF'}}>Ao5</th>
                    </tr>
                </thead>
                <tbody>
                    {[...times].reverse().map((obj, index) => {
                        let realNumber = times.length - index
                    
                        return (
                            <tr key={index}>
                                <td style={{ padding: '3px 5px' }}>{realNumber}.</td>
                                <td style={{ padding: '3px 5px' }}>{formatTime(obj.time)}</td>
                                <td style={{ padding: '3px 5px' }}>{formatTime(obj.averageOfFive)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Session






