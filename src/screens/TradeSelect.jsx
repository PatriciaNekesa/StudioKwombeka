import { useNavigate, useSearchParams } from 'react-router-dom'
import { getRoomById } from '../data/rooms'
import { TRADES } from '../data/rooms'

const ICONS = {
  painter: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7.5C20 7.5 18 5 12 5C6 5 4 9 4 12C4 15 6 17 9 17H10"/>
      <path d="M10 17C10 17 8 19.5 8 21H16V19C16 19 14 17 14 15C14 13 16 12 16 12"/>
      <circle cx="16" cy="8" r="2"/>
    </svg>
  ),
  joiner: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="8" height="10" rx="1"/>
      <rect x="13" y="3" width="8" height="6" rx="1"/>
      <rect x="13" y="13" width="8" height="8" rx="1"/>
      <rect x="3" y="17" width="8" height="4" rx="1"/>
    </svg>
  ),
  contractor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  mep: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"/>
      <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
    </svg>
  ),
  other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="8" x2="12" y2="12"/>
      <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  ),
}

export default function TradeSelect() {
  const [params] = useSearchParams()
  const navigate  = useNavigate()

  const roomId = params.get('room')
  const room   = getRoomById(roomId)

  if (!room) {
    return (
      <div className="app-shell" style={{ alignItems: 'center', justifyContent: 'center', padding: '40px 24px', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Invalid or expired QR code. Please scan the code on the room wall again.</p>
        <button className="btn-secondary" style={{ marginTop: 20, width: 'auto', padding: '12px 24px' }} onClick={() => navigate('/')}>
          Back to demo
        </button>
      </div>
    )
  }

  function selectTrade(tradeId) {
    navigate(`/room/${room.id}/${tradeId}`)
  }

  return (
    <div className="app-shell">
      <div className="status-bar">
        <span>9:41</span>
        <span>Atelier Loft</span>
      </div>

      <div className="room-header">
        <div className="room-tag">Scanned room</div>
        <div className="room-name">{room.name}</div>
        <div className="room-meta">{room.id} · {room.level} · {room.area}</div>
      </div>

      <div className="screen-body">
        <p className="trade-prompt fade-up">
          Select your trade to see specifications for this room
        </p>

        {TRADES.map((trade, i) => {
          const hasSpec = room.specs[trade.id]
          if (!hasSpec && trade.id !== 'other') return null
          return (
            <button
              key={trade.id}
              className={`trade-btn fade-up fade-up-${i + 1}`}
              onClick={() => selectTrade(trade.id)}
            >
              <div className="trade-icon" style={{ background: trade.bg, color: trade.color }}>
                {ICONS[trade.id]}
              </div>
              <div>
                <div className="trade-label">{trade.label}</div>
                <div className="trade-sublabel">{trade.sub}</div>
              </div>
              <svg style={{ marginLeft: 'auto', color: 'var(--text-3)', flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </button>
          )
        })}
      </div>
    </div>
  )
}
