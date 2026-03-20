import { useNavigate, useParams } from 'react-router-dom'
import { getRoomById, TRADES } from '../data/rooms'

export default function RoomSpec() {
  const { roomId, trade } = useParams()
  const navigate = useNavigate()

  const room      = getRoomById(roomId)
  const tradeInfo = TRADES.find(t => t.id === trade)
  const spec      = room?.specs?.[trade]

  if (!room || !tradeInfo) {
    return (
      <div className="app-shell" style={{ alignItems: 'center', justifyContent: 'center', padding: 40 }}>
        <p style={{ color: 'var(--text-2)', fontSize: 14, textAlign: 'center' }}>Room or trade not found.</p>
        <button className="btn-secondary" style={{ marginTop: 20, width: 'auto', padding: '12px 24px' }} onClick={() => navigate('/')}>Back</button>
      </div>
    )
  }

  return (
    <div className="app-shell">
      <div className="status-bar">
        <span>9:41</span>
        <span>Atelier Loft</span>
      </div>

      {/* Room header with back nav */}
      <div className="room-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Change trade
        </button>
        <div className="room-name" style={{ marginTop: 8 }}>{room.name}</div>
        <div className="room-meta">{room.id} · {room.level}</div>
        <div className="trade-pill">
          <span className="trade-dot" style={{ background: tradeInfo.color }}></span>
          {tradeInfo.label}
        </div>
      </div>

      {/* Spec content */}
      <div className="screen-body">
        {!spec ? (
          <div>
            <RoomOverview room={room} />
            <div className="note-box">
              No specific specifications found for {tradeInfo.label} in this room. Raise a query below if you need clarification.
            </div>
          </div>
        ) : (
          spec.sections.map((section, si) => (
            <div key={si} className={`spec-section fade-up`} style={{ animationDelay: `${si * 0.06}s` }}>
              <div className="spec-section-title">{section.title}</div>
              {section.rows.map((row, ri) => (
                <div key={ri} className="spec-row">
                  <span className="spec-key">{row.key}</span>
                  <span className={`spec-value ${row.mono ? 'mono' : ''}`}>
                    {row.swatch ? (
                      <span className="swatch-row">
                        <span className="swatch" style={{ background: row.swatch }}></span>
                        {row.value}
                      </span>
                    ) : row.value}
                  </span>
                </div>
              ))}
            </div>
          ))
        )}

        {/* Drawing reference */}
        <div style={{
          marginTop: 8,
          padding: '12px 14px',
          background: 'var(--surface)',
          borderRadius: 'var(--radius-sm)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <span style={{ fontSize: 11, color: 'var(--text-3)', fontFamily: 'var(--mono)' }}>Drawing reference</span>
          <span style={{ fontSize: 12, fontWeight: 500, fontFamily: 'var(--mono)', color: 'var(--text-1)' }}>{room.drawingRef}</span>
        </div>
      </div>

      <div className="bottom-bar">
        <button className="btn-primary" onClick={() => navigate(`/room/${roomId}/${trade}/query`)}>
          Raise a query for this room
        </button>
      </div>
    </div>
  )
}

function RoomOverview({ room }) {
  const rows = [
    { key: 'Room', value: room.name },
    { key: 'Reference', value: room.id },
    { key: 'Level', value: room.level },
    { key: 'Area', value: room.area },
    { key: 'Height', value: room.height },
    { key: 'Drawing', value: room.drawingRef },
  ]
  return (
    <div className="spec-section">
      <div className="spec-section-title">Room information</div>
      {rows.map((row, i) => (
        <div key={i} className="spec-row">
          <span className="spec-key">{row.key}</span>
          <span className="spec-value mono">{row.value}</span>
        </div>
      ))}
    </div>
  )
}
