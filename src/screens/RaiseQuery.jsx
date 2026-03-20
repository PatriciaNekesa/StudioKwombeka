import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getRoomById, TRADES } from '../data/rooms'

export function RaiseQuery() {
  const { roomId, trade } = useParams()
  const navigate = useNavigate()
  const room      = getRoomById(roomId)
  const tradeInfo = TRADES.find(t => t.id === trade)

  const [name,    setName]    = useState('')
  const [message, setMessage] = useState('')
  const [photo,   setPhoto]   = useState(false)
  const [sending, setSending] = useState(false)
  const [error,   setError]   = useState('')

  function validate() {
    if (!name.trim())    { setError('Please enter your name.'); return false }
    if (!message.trim()) { setError('Please describe your query.'); return false }
    return true
  }

  async function submit(e) {
    e.preventDefault()
    if (!validate()) return
    setError('')
    setSending(true)

    // Simulate network request
    // In production: POST to /api/queries with { roomId, trade, name, message, photo }
    await new Promise(r => setTimeout(r, 900))
    setSending(false)
    navigate(`/room/${roomId}/${trade}/query/success`, {
      state: {
        ref: `AL-${roomId}-${String(Date.now()).slice(-4)}`,
        name,
        roomName: room?.name
      }
    })
  }

  return (
    <div className="app-shell">
      <div className="status-bar">
        <span>9:41</span>
        <span>Atelier Loft</span>
      </div>

      <div className="room-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to specs
        </button>
        <div className="room-name" style={{ marginTop: 8 }}>Raise a query</div>
        <div className="room-meta">{room?.name} · {roomId}</div>
        {tradeInfo && (
          <div className="trade-pill">
            <span className="trade-dot" style={{ background: tradeInfo.color }}></span>
            {tradeInfo.label}
          </div>
        )}
      </div>

      <form className="screen-body" onSubmit={submit} style={{ gap: 0 }}>
        <div className="form-group fade-up">
          <label className="form-label">Your name</label>
          <input
            className="form-input"
            type="text"
            placeholder="e.g. James Okafor"
            value={name}
            onChange={e => setName(e.target.value)}
            autoComplete="given-name"
          />
        </div>

        <div className="form-group fade-up fade-up-1">
          <label className="form-label">Trade</label>
          <input
            className="form-input"
            type="text"
            value={tradeInfo?.label || ''}
            readOnly
          />
        </div>

        <div className="form-group fade-up fade-up-2">
          <label className="form-label">Your query</label>
          <textarea
            className="form-input"
            placeholder="Describe what you need clarified. Be specific about the location within the room — e.g. 'north wall above skirting' rather than just 'the wall'."
            value={message}
            onChange={e => setMessage(e.target.value)}
            rows={6}
          />
        </div>

        <div className="form-group fade-up fade-up-3">
          <label
            className="photo-attach"
            style={{ cursor: 'pointer', userSelect: 'none', color: photo ? 'var(--teal)' : 'var(--text-2)' }}
          >
            <input
              type="checkbox"
              checked={photo}
              onChange={e => setPhoto(e.target.checked)}
              style={{ display: 'none' }}
            />
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <polyline points="21 15 16 10 5 21"/>
            </svg>
            <span>{photo ? 'Photo attached — tap to remove' : 'Attach a photo of the issue'}</span>
          </label>
        </div>

        {error && (
          <div style={{ fontSize: 13, color: 'var(--accent)', padding: '4px 0 12px', fontFamily: 'var(--mono)' }}>
            {error}
          </div>
        )}
      </form>

      <div className="bottom-bar">
        <button
          className="btn-primary"
          onClick={submit}
          disabled={sending}
          style={{ opacity: sending ? 0.7 : 1 }}
        >
          {sending ? 'Sending…' : 'Submit query'}
        </button>
      </div>
    </div>
  )
}

export function QuerySuccess() {
  const navigate  = useNavigate()
  const { roomId, trade } = useParams()

  // Get state passed from RaiseQuery
  const ref      = window.history.state?.usr?.ref      || `AL-${roomId}-0001`
  const name     = window.history.state?.usr?.name     || 'you'
  const roomName = window.history.state?.usr?.roomName || roomId

  return (
    <div className="app-shell">
      <div className="status-bar">
        <span>9:41</span>
        <span>Atelier Loft</span>
      </div>

      <div className="room-header">
        <div className="room-name">Query sent</div>
        <div className="room-meta">{roomName} · {roomId}</div>
      </div>

      <div className="success-screen fade-up">
        <div className="success-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f6e56" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div className="success-title">Query received</div>
        <p className="success-body">
          Your query has been logged and sent to the project architect. You'll be notified when it is answered.
        </p>
        <div className="ref-badge">{ref}</div>
        <div className="ref-sub">Keep this reference number</div>
      </div>

      <div className="bottom-bar" style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <button className="btn-secondary" onClick={() => navigate(`/room/${roomId}/${trade}`)}>
          Back to {roomName} specs
        </button>
        <button className="btn-secondary" onClick={() => navigate('/')}>
          Scan another room
        </button>
      </div>
    </div>
  )
}
