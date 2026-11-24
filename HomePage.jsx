import HomeCard from './HomeCard'

function HomePage({ onTimerClick, onAlgsClick, onProgressionClick, onTutorialsClick }) {
    return (
        <div className='home-page' style={{
            backgroundColor: 'black'
        }}>
            <div className='home-page__header' style={{
                margin: '0px',
                marginBottom: '5px'
            }}>
                <h1 style={{
                    fontSize: '60px',
                    textAlign: 'center',
                    color: '#00FFFF',
                    backgroundColor: 'black',
                    boxShadow: '0 0 40px #557777, 0 0 30px #557777, 0 0 20px #557777, 0 0 10px #557777',
                    border: 'solid 4px #00FFFF',
                    borderRadius: '40px',
                    fontWeight: 'bold',
                    marginLeft: '5px',
                    marginRight: '5px',
                    textShadow: '0 0 20px #556666',
                    marginBottom: '0px'
                }}>CubeVault</h1>
                <p style={{
                    fontSize: '25px',
                    textAlign: 'right',
                    paddingRight: '10px',
                    color: '#00FFCC',
                    fontStyle: 'italic',
                    textShadow: '0 0 20px #576622'
                }}>Unlock Your Speed!</p>
            </div>
            <div className='home-page__cards' style={{
                display: 'grid',
                overflowY: 'auto'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <HomeCard onCardClick={onTimerClick} title='Timer ⏱️' message='Professional Cubing Timer with computer-generated Scrambles, a PB Tracker and every WCA Event, including FTO.' color='#01FF24' />
                    <HomeCard onCardClick={onAlgsClick} title='Algs 🧩' message='All the Algorithms you need to become a good Speedcuber: Full OLL, Full PLL and Algorithms for other Events like 2x2.' color='#FF0101' />
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <HomeCard onCardClick={onProgressionClick} title='Progression 📈' message='A clear path you can take to become faster, instead of not knowing what to do next.' color='#0124FF' />
                    <HomeCard onCardClick={onTutorialsClick} title='Tutorials 🎥' message='Self-made videos that teach everything that is really important to become fast at Cubing.' color='yellow' />
                </div>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    whiteSpace: 'pre-line'
                }}>
                    <HomeCard title='Why CubeVault?' message="Because you don't need 4 Websites, you just need one Vault for everything you need in your Cubing Journey (except Speedcubes). You don't need a separate website for Algorithms, a Timer and Tutorials, you just need one, and that is CubeVault." color='#008888' />
                    <HomeCard title='About the Creator' message='I am a 14-year-old Speedcuber from Germany, that achieved sub 20 in less than 9 months and has a PB Single of 9.37s. I put all my knowledge into this Website to make it possible for other Speedcubers to do the same. Good luck and have fun!' color='orange' />
                    <HomeCard title='Special Thanks' message={"My Friend\nVideo Editing, Investor, Marketing & Design Ideas"} color='#DD01DD' />
                </div>
            </div>
        </div>
    )
}

export default HomePage
