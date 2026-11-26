import './App.css'

function Scramble({ scramble }) {
    return (
        <h1 onClick={() => navigator.clipboard.writeText(scramble)} className='scramble'>{scramble}</h1>
    )
}

export default Scramble
