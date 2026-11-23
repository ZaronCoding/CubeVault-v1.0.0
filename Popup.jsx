import { useEffect } from 'react'
import './App.css'

function Popup({ title, message, onConfirm, onCancel }) {
  return (
    <div
      onClick={onCancel}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: '#111111',
          color: 'white',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 0 30px #556666',
          boxSizing: 'border-box',
          border: 'solid 3px #000101'
        }}
      >
        <h2 id="popup-title">{title}</h2>
        <p>{message}</p>
        <div style={{display: 'flex', gap: '5px'}}>
            <p className='popup-button' onClick={onConfirm}>Okay</p>
            <p className='popup-button' onClick={onCancel}>Cancel</p>
        </div>
      </div>
    </div>
  )
}

export default Popup