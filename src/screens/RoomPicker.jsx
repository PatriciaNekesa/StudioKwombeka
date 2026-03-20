import { useNavigate } from 'react-router-dom'
import { ROOMS, PROJECT } from '../data/rooms'

export default function RoomPicker() {
  const navigate = useNavigate()

  function scanRoom(room) {
    // Simulate what happens when a QR code is scanned:
    // The URL would be: /room?project=atelier-loft-001&room=R05&token=tok_r05_...
    // We route to trade select, passing the room via query param
    navigate(`/room?project=${PROJECT.id}&room=${room.id}&token=${room.token}`)
  }

  return (
    <div className="app-shell">
      <div className="picker-header">
        <div className="picker-logo">Atelier Loft · Site App</div>
        <div className="picker-title">Select a room to simulate scanning its QR code</div>
        <div className="picker-sub">
          In production, each room has a QR code on the wall.<br />
          Scanning it opens the app directly to that room.
        </div>
        <div className="demo-badge">DEMO MODE</div>
      </div>

      <div className="room-list">
        {ROOMS.map((room, i) => (
          <button
            key={room.id}
            className={`room-card fade-up fade-up-${Math.min(i + 1, 5)}`}
            onClick={() => scanRoom(room)}
          >
            <div className="room-card-info">
              <span className="room-card-name">{room.name}</span>
              <span className="room-card-meta">{room.level} · {room.area}</span>
            </div>
            <span className="room-card-ref">{room.id}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
