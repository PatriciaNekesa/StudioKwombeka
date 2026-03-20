import { useState } from "react";

// ─── Design tokens ────────────────────────────────────────────────────────────
const T = {
  dark:       "#0B1A13",
  darkMid:    "#112019",
  darkSurface:"#172821",
  jade:       "#3BBF85",
  jadeDark:   "#2A9668",
  jadeLight:  "#70D4A4",
  jadeFaint:  "#091A10",
  cream:      "#F5F0E8",
  creamMid:   "#EAE3D6",
  sand:       "#C8BEA8",
  sandDark:   "#8A8070",
  white:      "#FFFFFF",
  teal:       "#1D9E75",
  tealFaint:  "#0D2A1F",
  purple:     "#7F77DD",
  purpleFaint:"#1A1830",
  amber:      "#C4922D",
  amberFaint: "#261E0A",
  steel:      "#5A7080",
  steelFaint: "#101820",
  success:    "#1D9E75",
  border:     "rgba(255,255,255,0.08)",
  borderMid:  "rgba(255,255,255,0.14)",
};

// ─── Project data ─────────────────────────────────────────────────────────────
const PROJECT = {
  name: "Atelier Loft",
  ref:  "AL-2025",
  phase: "Phase 6 — Internal Finishes",
};

const ROOMS = {
  "R01": {
    name: "Open Studio",
    level: "Ground floor",
    area: "240 m²",
    height: "6500 mm",
    drawingRef: "GA-GF-01 Rev C",
    specs: {
      painter: {
        sections: [
          { title: "Walls — concrete panels", rows: [
            { k: "Treatment", v: "Board-formed — no paint" },
            { k: "Note", v: "Leave raw, patching exposed" },
          ]},
          { title: "Brick columns", rows: [
            { k: "Treatment", v: "No paint — brick exposed" },
            { k: "Mortar", v: "Natural lime, repointed" },
          ]},
          { title: "Steel structure", rows: [
            { k: "Treatment", v: "Black oxide — ST-02" },
            { k: "Finish", v: "Hot-rolled, no topcoat" },
          ]},
        ]
      },
      joiner: {
        sections: [
          { title: "Mezzanine railing", rows: [
            { k: "Material", v: "Blackened steel flat bar" },
            { k: "Top rail", v: "50 × 10 mm, continuous" },
            { k: "Posts", v: "25 × 25 mm @ 300 c/c" },
            { k: "Height", v: "1100 mm from FFL" },
          ]},
          { title: "Work surfaces", rows: [
            { k: "Material", v: "White oak, 40 mm thick" },
            { k: "Finish", v: "Natural oil — WD-04" },
            { k: "Edge", v: "Live edge, sanded smooth" },
          ]},
        ]
      },
      contractor: {
        sections: [
          { title: "Room data", rows: [
            { k: "Area", v: "240 m²" },
            { k: "Height", v: "6500 mm double height" },
            { k: "Mezzanine at", v: "+3000 mm AFF" },
            { k: "Drawing ref", v: "GA-GF-01 Rev C" },
          ]},
          { title: "Key finishes", rows: [
            { k: "Floor", v: "FL-05 Polished concrete" },
            { k: "Walls", v: "Raw board-formed concrete" },
            { k: "Ceiling", v: "Sawtooth structure exposed" },
            { k: "Columns", v: "BK-03 Reclaimed brick" },
          ]},
          { title: "Services", rows: [
            { k: "Heating", v: "UFH in-slab hydronic" },
            { k: "Ventilation", v: "MVHR — 5 terminals" },
            { k: "Lighting", v: "Pendant DOM × 3 — E-01" },
          ]},
        ]
      },
    }
  },
  "R04": {
    name: "Entry & Reception",
    level: "Ground floor",
    area: "28 m²",
    height: "3200 mm",
    drawingRef: "GA-GF-04 Rev B",
    specs: {
      painter: {
        sections: [
          { title: "Feature wall — brick", rows: [
            { k: "Treatment", v: "No paint — brick exposed" },
            { k: "Note", v: "Repoint in lime mortar only" },
          ]},
          { title: "Side walls — plaster", rows: [
            { k: "Colour", v: "CF-01 Warm Plaster", swatch: "#C8C0B2" },
            { k: "Finish", v: "Matt emulsion" },
            { k: "Coats", v: "2 full coats" },
            { k: "Primer", v: "Alkali-resistant" },
          ]},
          { title: "Ceiling", rows: [
            { k: "Colour", v: "CF-02 Raw Concrete", swatch: "#9B9690" },
            { k: "Finish", v: "Flat — no sheen" },
            { k: "Coats", v: "1 mist + 1 full" },
          ]},
        ]
      },
      joiner: {
        sections: [
          { title: "Reception desk", rows: [
            { k: "Top material", v: "White oak — WD-04" },
            { k: "Top thickness", v: "50 mm solid" },
            { k: "Top finish", v: "Natural oiled" },
            { k: "Base", v: "Poured concrete — CF-03" },
            { k: "Overall height", v: "1100 mm" },
            { k: "Overall width", v: "2400 mm" },
          ]},
          { title: "Entry door", rows: [
            { k: "Type", v: "Double leaf — blackened steel" },
            { k: "Width total", v: "1800 mm" },
            { k: "Height", v: "2800 mm" },
            { k: "Glazing", v: "Clear toughened 8 mm" },
            { k: "Handle", v: "WD-04 white oak bar" },
          ]},
        ]
      },
      contractor: {
        sections: [
          { title: "Room data", rows: [
            { k: "Area", v: "28 m²" },
            { k: "Height", v: "3200 mm" },
            { k: "Level", v: "Ground floor" },
            { k: "Drawing ref", v: "GA-GF-04 Rev B" },
          ]},
          { title: "Key finishes", rows: [
            { k: "Floor", v: "Stone tile — large format" },
            { k: "Feature wall", v: "BK-03 Reclaimed brick" },
            { k: "Side walls", v: "CF-01 Warm plaster" },
            { k: "Ceiling", v: "CF-02 Board-formed" },
          ]},
          { title: "Services", rows: [
            { k: "Heating", v: "UFH in-slab" },
            { k: "Lighting", v: "Pendant × 3 — E-04" },
            { k: "Access control", v: "Intercom — see E-04a" },
          ]},
        ]
      },
    }
  },
  "R05": {
    name: "Meeting Room",
    level: "Ground floor",
    area: "42 m²",
    height: "3200 mm",
    drawingRef: "GA-GF-05 Rev B",
    specs: {
      painter: {
        sections: [
          { title: "Walls", rows: [
            { k: "Colour", v: "CF-01 Warm Plaster", swatch: "#C8C0B2" },
            { k: "Finish", v: "Matt emulsion" },
            { k: "Coats", v: "2 full coats" },
            { k: "Primer", v: "Alkali-resistant" },
          ]},
          { title: "Ceiling", rows: [
            { k: "Colour", v: "CF-02 Raw Concrete", swatch: "#9B9690" },
            { k: "Finish", v: "Flat — no sheen" },
            { k: "Note", v: "Leave beam exposed unpainted" },
          ]},
          { title: "Acoustic panels", rows: [
            { k: "Treatment", v: "No paint — felt surface" },
            { k: "Ref", v: "AC-06 Warm Grey felt" },
            { k: "Note", v: "West wall only" },
          ]},
        ]
      },
      joiner: {
        sections: [
          { title: "Entry door", rows: [
            { k: "Type", v: "Single leaf, solid core" },
            { k: "Width", v: "900 mm" },
            { k: "Height", v: "2400 mm" },
            { k: "Material", v: "White oak, oiled — WD-04" },
            { k: "Frame", v: "Blackened steel — ST-02" },
            { k: "Handle", v: "Brushed bronze lever" },
          ]},
          { title: "Skirting", rows: [
            { k: "Profile", v: "75 × 18 mm flat" },
            { k: "Material", v: "MDF primed" },
            { k: "Finish", v: "Match wall — CF-01" },
            { k: "Fix", v: "Adhesive + pin" },
          ]},
          { title: "Glazed partition", rows: [
            { k: "Frame", v: "ST-02 blackened steel" },
            { k: "Mullion", v: "50 × 20 mm @ 900 c/c" },
            { k: "Glazing", v: "10 mm toughened clear" },
            { k: "Height", v: "Floor to ceiling — full" },
          ]},
        ]
      },
      contractor: {
        sections: [
          { title: "Room data", rows: [
            { k: "Area", v: "42 m²" },
            { k: "Height", v: "3200 mm" },
            { k: "Level", v: "Ground floor" },
            { k: "Drawing ref", v: "GA-GF-05 Rev B" },
          ]},
          { title: "Key finishes", rows: [
            { k: "Floor", v: "WD-04 White oak wide board" },
            { k: "Walls", v: "CF-01 Warm plaster" },
            { k: "Ceiling", v: "Board-formed concrete exposed" },
            { k: "West wall", v: "AC-06 Acoustic felt panels" },
          ]},
          { title: "Services", rows: [
            { k: "Heating", v: "UFH in-slab hydronic" },
            { k: "Ventilation", v: "MVHR terminal × 2" },
            { k: "Lighting", v: "Pendant bar — see E-05" },
            { k: "AV", v: "Screen drop + HDMI — see E-05a" },
          ]},
        ]
      },
    }
  },
  "R06": {
    name: "Material Library",
    level: "Ground floor",
    area: "38 m²",
    height: "3200 mm",
    drawingRef: "GA-GF-06 Rev A",
    specs: {
      painter: {
        sections: [
          { title: "Walls", rows: [
            { k: "Colour", v: "CF-01 Warm Plaster", swatch: "#C8C0B2" },
            { k: "Finish", v: "Matt emulsion" },
            { k: "Coats", v: "2 full coats" },
          ]},
          { title: "Shelving unit", rows: [
            { k: "Treatment", v: "No paint — dark stained oak" },
            { k: "Note", v: "Factory finished — do not coat" },
          ]},
        ]
      },
      joiner: {
        sections: [
          { title: "Shelving unit", rows: [
            { k: "Material", v: "Dark stained oak ply" },
            { k: "Overall width", v: "Full wall — 4800 mm" },
            { k: "Overall height", v: "2800 mm" },
            { k: "Shelf depth", v: "350 mm" },
            { k: "Shelf spacing", v: "380 mm (adjustable)" },
            { k: "Fix", v: "Bolted to wall — see D-06" },
          ]},
          { title: "Work counter", rows: [
            { k: "Top material", v: "Concrete — CF-03" },
            { k: "Top thickness", v: "80 mm cast in-situ" },
            { k: "Height", v: "920 mm" },
            { k: "Base", v: "Dark steel angle frame" },
          ]},
        ]
      },
      contractor: {
        sections: [
          { title: "Room data", rows: [
            { k: "Area", v: "38 m²" },
            { k: "Height", v: "3200 mm" },
            { k: "Level", v: "Ground floor" },
            { k: "Drawing ref", v: "GA-GF-06 Rev A" },
          ]},
          { title: "Key finishes", rows: [
            { k: "Floor", v: "FL-05 Polished concrete" },
            { k: "Walls", v: "CF-01 Warm plaster" },
            { k: "Feature shelving", v: "Dark stained oak — full wall" },
            { k: "Counter", v: "CF-03 Cast concrete" },
          ]},
          { title: "Services", rows: [
            { k: "Heating", v: "UFH in-slab" },
            { k: "Lighting", v: "Track spots × 5 — E-06" },
          ]},
        ]
      },
    }
  },
  "R07": {
    name: "Mezzanine Lounge",
    level: "Mezzanine +3.0m",
    area: "88 m²",
    height: "3200 mm",
    drawingRef: "GA-M1-01 Rev B",
    specs: {
      painter: {
        sections: [
          { title: "Walls", rows: [
            { k: "Colour", v: "CF-01 Warm Plaster", swatch: "#C8C0B2" },
            { k: "Finish", v: "Matt emulsion" },
            { k: "Coats", v: "2 full coats" },
          ]},
          { title: "Shelving wall", rows: [
            { k: "Treatment", v: "No paint — dark stained" },
            { k: "Note", v: "Factory finished unit — do not touch" },
          ]},
        ]
      },
      joiner: {
        sections: [
          { title: "Library shelving", rows: [
            { k: "Material", v: "Dark stained oak ply" },
            { k: "Width", v: "Full east wall — 6200 mm" },
            { k: "Height", v: "Floor to ceiling — 3200 mm" },
            { k: "Shelf depth", v: "280 mm" },
            { k: "Fix", v: "Structural wall fixings — see D-07" },
          ]},
          { title: "Mezzanine railing", rows: [
            { k: "Material", v: "Blackened steel — ST-02" },
            { k: "Top rail", v: "50 × 10 mm flat bar" },
            { k: "Posts", v: "20 × 20 mm @ 300 c/c" },
            { k: "Height", v: "1100 mm from FFL" },
          ]},
        ]
      },
      contractor: {
        sections: [
          { title: "Room data", rows: [
            { k: "Area", v: "88 m²" },
            { k: "Height", v: "3200 mm" },
            { k: "Level", v: "Mezzanine +3000 mm" },
            { k: "Drawing ref", v: "GA-M1-01 Rev B" },
          ]},
          { title: "Key finishes", rows: [
            { k: "Floor", v: "WD-04 White oak wide board" },
            { k: "Walls", v: "CF-01 Warm plaster" },
            { k: "East wall", v: "Full-height library shelving" },
            { k: "North edge", v: "Glazed to studio below" },
          ]},
          { title: "Services", rows: [
            { k: "Heating", v: "Perimeter radiators — HE-07" },
            { k: "Lighting", v: "Pendant track — E-07" },
          ]},
        ]
      },
    }
  },
};

const TRADES = [
  { id: "painter",    label: "Painter",           sub: "Colours, finishes, coats",    color: T.jade,       faint: T.jadeFaint  },
  { id: "joiner",     label: "Joiner / finisher",  sub: "Doors, skirting, dimensions", color: T.teal,       faint: T.tealFaint  },
  { id: "contractor", label: "Main contractor",    sub: "Full spec + drawings",        color: T.purple,     faint: T.purpleFaint},
  { id: "other",      label: "Other / general",    sub: "Overview only",               color: T.sandDark,   faint: T.darkSurface},
];

// ─── Icons ────────────────────────────────────────────────────────────────────
const Icon = {
  Brush: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
      <path d="M14.5 17.5 4.5 15"/>
    </svg>
  ),
  Grid: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="9" rx="1.5"/>
      <rect x="14" y="3" width="7" height="5" rx="1.5"/>
      <rect x="14" y="12" width="7" height="9" rx="1.5"/>
      <rect x="3" y="16" width="7" height="5" rx="1.5"/>
    </svg>
  ),
  Home: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  Clock: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9"/>
      <polyline points="12 7 12 12 15 15"/>
    </svg>
  ),
  ChevronRight: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6"/>
    </svg>
  ),
  ChevronLeft: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6"/>
    </svg>
  ),
  Check: () => (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={T.teal} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Camera: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
      <circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  Warning: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/>
      <line x1="12" y1="9" x2="12" y2="13"/>
      <line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  ),
};

// ─── Shared components ────────────────────────────────────────────────────────

const NavBar = () => (
  <div style={{
    background: T.dark, padding: "14px 20px",
    display: "flex", justifyContent: "space-between", alignItems: "center",
    borderBottom: `1px solid ${T.border}`,
    position: "sticky", top: 0, zIndex: 10,
  }}>
    <span style={{ color: T.jade, fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'DM Mono', monospace" }}>
      Atelier Loft
    </span>
    <span style={{ color: T.sandDark, fontSize: 11, fontFamily: "'DM Mono', monospace", letterSpacing: "0.04em" }}>
      {PROJECT.ref}
    </span>
  </div>
);

const RoomHeader = ({ room, sub }) => (
  <div style={{ background: T.dark, padding: "20px 24px 22px", borderBottom: `1px solid ${T.border}` }}>
    <div style={{ fontSize: 11, color: T.jade, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: 6 }}>
      {PROJECT.name} · {sub || "Scan confirmed"}
    </div>
    <div style={{ fontSize: 26, fontWeight: 500, color: T.cream, lineHeight: 1.2, letterSpacing: "-0.01em" }}>
      {room.name}
    </div>
    <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
      <span style={{ fontSize: 11, color: T.sandDark, fontFamily: "'DM Mono', monospace" }}>
        {Object.keys(ROOMS).find(k => ROOMS[k] === room)} · {room.level}
      </span>
      <span style={{ fontSize: 11, color: T.sandDark, fontFamily: "'DM Mono', monospace" }}>
        {room.area}
      </span>
    </div>
  </div>
);

const BackButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    style={{
      display: "flex", alignItems: "center", gap: 4, background: "none", border: "none",
      color: T.sand, fontSize: 13, cursor: "pointer", padding: "14px 24px 4px",
      fontFamily: "inherit",
    }}
  >
    <Icon.ChevronLeft />
    {label}
  </button>
);

// ─── Screen 1: Room selector (simulates QR landing with no room preset) ───────
const RoomSelector = ({ onSelect }) => {
  const roomList = Object.entries(ROOMS);
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: T.dark }}>
      <NavBar />
      <div style={{ background: T.dark, padding: "24px 24px 20px" }}>
        <div style={{ fontSize: 11, color: T.jade, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: 6 }}>
          {PROJECT.name}
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: T.cream, lineHeight: 1.2 }}>
          Select a room
        </div>
        <div style={{ fontSize: 13, color: T.sandDark, marginTop: 8, lineHeight: 1.6 }}>
          In a live deployment, scanning a room QR code loads this screen automatically. Select any room below to preview.
        </div>
      </div>
      <div style={{ flex: 1, padding: "12px 20px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
        {roomList.map(([id, room]) => (
          <button
            key={id}
            onClick={() => onSelect(room)}
            style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "16px 18px", background: T.darkMid, border: `0.5px solid ${T.border}`,
              borderRadius: 14, cursor: "pointer", width: "100%", textAlign: "left",
              transition: "all 0.15s",
            }}
            onMouseEnter={e => e.currentTarget.style.borderColor = T.jade}
            onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: T.jade, letterSpacing: "0.06em" }}>{id}</span>
                <span style={{ fontSize: 16, fontWeight: 500, color: T.cream }}>{room.name}</span>
              </div>
              <div style={{ fontSize: 12, color: T.sandDark, marginTop: 4, fontFamily: "'DM Mono', monospace" }}>
                {room.level} · {room.area}
              </div>
            </div>
            <span style={{ color: T.sandDark }}><Icon.ChevronRight /></span>
          </button>
        ))}
      </div>
    </div>
  );
};

// ─── Screen 2: Trade selection ────────────────────────────────────────────────
const TradeSelector = ({ room, onSelect, onBack }) => (
  <div style={{ flex: 1, display: "flex", flexDirection: "column", background: T.dark }}>
    <NavBar />
    <RoomHeader room={room} sub="Select your trade" />
    <BackButton label="All rooms" onClick={onBack} />
    <div style={{ flex: 1, padding: "12px 20px 32px", display: "flex", flexDirection: "column", gap: 10 }}>
      <p style={{ fontSize: 13, color: T.sandDark, padding: "0 4px 6px", lineHeight: 1.6 }}>
        Select your trade to see specifications for this room. Each session is independent.
      </p>
      {TRADES.map(trade => (
        <button
          key={trade.id}
          onClick={() => onSelect(trade)}
          style={{
            display: "flex", alignItems: "center", gap: 16, padding: "18px 18px",
            background: T.darkMid, border: `0.5px solid ${T.border}`,
            borderRadius: 14, cursor: "pointer", width: "100%", textAlign: "left",
            transition: "all 0.15s",
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = trade.color; e.currentTarget.style.background = trade.faint; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.darkMid; }}
        >
          <div style={{
            width: 46, height: 46, borderRadius: 12, background: trade.faint,
            border: `1px solid ${trade.color}30`, display: "flex", alignItems: "center",
            justifyContent: "center", color: trade.color, flexShrink: 0,
          }}>
            {trade.id === "painter"    && <Icon.Brush />}
            {trade.id === "joiner"     && <Icon.Grid />}
            {trade.id === "contractor" && <Icon.Home />}
            {trade.id === "other"      && <Icon.Clock />}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 500, color: T.cream }}>{trade.label}</div>
            <div style={{ fontSize: 11, color: T.sandDark, marginTop: 3 }}>{trade.sub}</div>
          </div>
          <span style={{ color: T.sandDark }}><Icon.ChevronRight /></span>
        </button>
      ))}
    </div>
  </div>
);

// ─── Screen 3: Spec view ──────────────────────────────────────────────────────
const SpecRow = ({ label, value, swatch }) => (
  <div style={{
    display: "flex", justifyContent: "space-between", alignItems: "center",
    padding: "11px 0", borderBottom: `0.5px solid ${T.border}`,
  }}>
    <span style={{ fontSize: 13, color: T.sandDark, flex: 1 }}>{label}</span>
    <span style={{ fontSize: 13, fontWeight: 500, color: T.cream, textAlign: "right", flex: 1.2, display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 8 }}>
      {swatch && (
        <span style={{ width: 18, height: 18, borderRadius: 4, background: swatch, border: `1px solid ${T.border}`, flexShrink: 0, display: "inline-block" }} />
      )}
      {value}
    </span>
  </div>
);

const SpecView = ({ room, trade, onBack, onRaiseQuery }) => {
  const spec = room.specs[trade.id] || room.specs["contractor"];

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: T.dark }}>
      <NavBar />
      <div style={{ background: T.dark, padding: "20px 24px 22px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontSize: 11, color: T.jade, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: 6 }}>
          {room.name} · {Object.keys(ROOMS).find(k => ROOMS[k] === room)}
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: T.cream, lineHeight: 1.2 }}>
          {trade.id === "painter"    && "Paint specification"}
          {trade.id === "joiner"     && "Joinery specification"}
          {trade.id === "contractor" && "Room overview"}
          {trade.id === "other"      && "General information"}
        </div>
        <div style={{ marginTop: 10 }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: trade.faint, border: `0.5px solid ${trade.color}40`,
            borderRadius: 20, padding: "4px 12px",
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: trade.color, flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: 11, fontWeight: 500, color: trade.color }}>{trade.label}</span>
          </span>
        </div>
      </div>

      <BackButton label="Change trade" onClick={onBack} />

      <div style={{ flex: 1, padding: "12px 24px 32px" }}>
        {spec && spec.sections ? spec.sections.map((section, si) => (
          <div key={si} style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 10, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase",
              color: T.sandDark, padding: "0 0 10px", borderBottom: `0.5px solid ${T.borderMid}`,
              marginBottom: 2,
            }}>
              {section.title}
            </div>
            {section.rows.map((row, ri) => (
              <SpecRow key={ri} label={row.k} value={row.v} swatch={row.swatch} />
            ))}
          </div>
        )) : (
          <div style={{ padding: "24px 0", color: T.sandDark, fontSize: 13, lineHeight: 1.6 }}>
            Specifications for this room are available via the project management portal. Raise a query below if you need specific information.
          </div>
        )}

        <div style={{
          background: T.amberFaint, border: `0.5px solid ${T.amber}30`,
          borderRadius: 10, padding: "12px 14px", display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <span style={{ flexShrink: 0, marginTop: 1 }}><Icon.Warning /></span>
          <div style={{ fontSize: 11, color: T.sand, lineHeight: 1.6 }}>
            Always verify against the latest issued drawing before committing to work.{" "}
            <span style={{ fontFamily: "'DM Mono', monospace", color: T.amber }}>{room.drawingRef}</span>
          </div>
        </div>
      </div>

      <div style={{ padding: "16px 24px 28px", borderTop: `0.5px solid ${T.border}`, background: T.dark }}>
        <button
          onClick={onRaiseQuery}
          style={{
            width: "100%", padding: "17px", background: T.jade, color: T.cream,
            border: "none", borderRadius: 12, fontSize: 15, fontWeight: 500,
            cursor: "pointer", letterSpacing: "0.01em", transition: "all 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.background = T.jadeDark}
          onMouseLeave={e => e.currentTarget.style.background = T.jade}
        >
          Raise a query for this room
        </button>
      </div>
    </div>
  );
};

// ─── Screen 4: Query form ─────────────────────────────────────────────────────
const QueryForm = ({ room, trade, onBack, onSubmit }) => {
  const [name, setName]       = useState("");
  const [query, setQuery]     = useState("");
  const [photo, setPhoto]     = useState(false);
  const [urgent, setUrgent]   = useState(false);
  const roomId = Object.keys(ROOMS).find(k => ROOMS[k] === room);

  const canSubmit = name.trim().length > 1 && query.trim().length > 8;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: T.dark }}>
      <NavBar />
      <div style={{ background: T.dark, padding: "20px 24px 22px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontSize: 11, color: T.jade, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: 6 }}>
          {room.name} · {roomId}
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: T.cream }}>Raise a query</div>
      </div>

      <BackButton label="Back to spec" onClick={onBack} />

      <div style={{ flex: 1, padding: "12px 24px 32px", display: "flex", flexDirection: "column", gap: 18 }}>

        <div>
          <label style={{ display: "block", fontSize: 11, fontWeight: 500, color: T.sandDark, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
            Your name
          </label>
          <input
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. James Okafor"
            style={{
              width: "100%", padding: "14px 16px", background: T.darkMid,
              border: `0.5px solid ${name.length > 1 ? T.jade + "60" : T.border}`,
              borderRadius: 10, color: T.cream, fontSize: 15, fontFamily: "inherit",
              outline: "none", transition: "border-color 0.15s", boxSizing: "border-box",
            }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: 11, fontWeight: 500, color: T.sandDark, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
            Trade
          </label>
          <div style={{
            padding: "14px 16px", background: T.darkSurface,
            border: `0.5px solid ${T.border}`, borderRadius: 10,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: trade.color, flexShrink: 0, display: "inline-block" }} />
            <span style={{ fontSize: 15, color: T.sand }}>{trade.label}</span>
          </div>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 11, fontWeight: 500, color: T.sandDark, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 6 }}>
            Query
          </label>
          <textarea
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={"Describe what you need clarified.\nBe specific about the location within the room."}
            rows={5}
            style={{
              width: "100%", padding: "14px 16px", background: T.darkMid,
              border: `0.5px solid ${query.length > 8 ? T.jade + "60" : T.border}`,
              borderRadius: 10, color: T.cream, fontSize: 14, fontFamily: "inherit",
              outline: "none", resize: "none", lineHeight: 1.6, transition: "border-color 0.15s",
              boxSizing: "border-box",
            }}
          />
          <div style={{ fontSize: 11, color: T.sandDark, marginTop: 5, textAlign: "right" }}>
            {query.length} characters
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { state: photo, set: setPhoto, icon: <Icon.Camera />, label: "Attach a photo of the issue" },
            { state: urgent, set: setUrgent, icon: <Icon.Warning />, label: "Mark as urgent" },
          ].map(({ state, set, icon, label }) => (
            <label key={label} style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer", padding: "12px 16px", background: T.darkMid, borderRadius: 10, border: `0.5px solid ${state ? T.jade + "50" : T.border}`, transition: "all 0.15s" }}>
              <span style={{ color: state ? T.jade : T.sandDark }}>{icon}</span>
              <span style={{ fontSize: 13, color: T.sand, flex: 1 }}>{label}</span>
              <div style={{
                width: 44, height: 26, background: state ? T.jade : T.darkSurface,
                borderRadius: 13, position: "relative", transition: "background 0.2s",
                border: `0.5px solid ${state ? T.jade : T.border}`,
              }}>
                <div style={{
                  width: 20, height: 20, borderRadius: "50%", background: T.cream,
                  position: "absolute", top: 2, left: state ? 20 : 2, transition: "left 0.2s",
                }} />
              </div>
              <input type="checkbox" checked={state} onChange={e => set(e.target.checked)} style={{ display: "none" }} />
            </label>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 24px 28px", borderTop: `0.5px solid ${T.border}`, background: T.dark }}>
        <button
          onClick={() => canSubmit && onSubmit({ name, query, photo, urgent })}
          style={{
            width: "100%", padding: "17px", background: canSubmit ? T.jade : T.darkSurface,
            color: canSubmit ? T.cream : T.sandDark,
            border: `0.5px solid ${canSubmit ? T.jade : T.border}`,
            borderRadius: 12, fontSize: 15, fontWeight: 500,
            cursor: canSubmit ? "pointer" : "not-allowed",
            transition: "all 0.2s", letterSpacing: "0.01em",
          }}
        >
          {canSubmit ? "Submit query" : "Fill in name and query to submit"}
        </button>
      </div>
    </div>
  );
};

// ─── Screen 5: Success ────────────────────────────────────────────────────────
const QuerySuccess = ({ room, trade, submission, onDone }) => {
  const roomId = Object.keys(ROOMS).find(k => ROOMS[k] === room);
  const refNum = `AL-${roomId}-${String(Math.floor(Math.random() * 900) + 100).padStart(4, "0")}`;

  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", background: T.dark }}>
      <NavBar />
      <div style={{ background: T.dark, padding: "20px 24px 22px", borderBottom: `1px solid ${T.border}` }}>
        <div style={{ fontSize: 11, color: T.teal, letterSpacing: "0.10em", textTransform: "uppercase", fontWeight: 500, marginBottom: 6 }}>
          Query submitted
        </div>
        <div style={{ fontSize: 26, fontWeight: 500, color: T.cream }}>Received</div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 32px", gap: 20, textAlign: "center" }}>
        <div style={{
          width: 64, height: 64, borderRadius: "50%",
          background: T.tealFaint, border: `1px solid ${T.teal}40`,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <Icon.Check />
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, color: T.cream }}>Query logged</div>
        <div style={{ fontSize: 14, color: T.sandDark, lineHeight: 1.7, maxWidth: 360 }}>
          Your query for <span style={{ color: T.cream }}>{room.name}</span> has been sent to the project architect. You will be notified when it is answered.
        </div>

        <div style={{ background: T.darkMid, border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "14px 20px", width: "100%" }}>
          <div style={{ fontSize: 10, color: T.sandDark, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 6 }}>Reference number</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 18, color: T.jade, fontWeight: 500 }}>{refNum}</div>
          <div style={{ fontSize: 11, color: T.sandDark, marginTop: 5 }}>Keep this — you may need it when following up</div>
        </div>

        <div style={{ background: T.darkMid, border: `0.5px solid ${T.border}`, borderRadius: 10, padding: "14px 16px", width: "100%", textAlign: "left" }}>
          {[
            { k: "Submitted by", v: submission.name },
            { k: "Trade",        v: trade.label },
            { k: "Room",         v: `${room.name} (${roomId})` },
            { k: "Urgent",       v: submission.urgent ? "Yes" : "No" },
          ].map(({ k, v }) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", borderBottom: `0.5px solid ${T.border}` }}>
              <span style={{ fontSize: 12, color: T.sandDark }}>{k}</span>
              <span style={{ fontSize: 12, color: T.cream, fontWeight: 500 }}>{v}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "16px 24px 28px", borderTop: `0.5px solid ${T.border}`, background: T.dark }}>
        <button
          onClick={onDone}
          style={{
            width: "100%", padding: "17px", background: T.darkMid,
            color: T.cream, border: `0.5px solid ${T.border}`,
            borderRadius: 12, fontSize: 15, fontWeight: 500,
            cursor: "pointer", transition: "all 0.15s",
          }}
          onMouseEnter={e => e.currentTarget.style.borderColor = T.jade}
          onMouseLeave={e => e.currentTarget.style.borderColor = T.border}
        >
          Scan another room
        </button>
      </div>
    </div>
  );
};

// ─── App shell ────────────────────────────────────────────────────────────────
export default function AtelierLoftApp() {
  const [screen, setScreen]         = useState("room-select");
  const [room, setRoom]             = useState(null);
  const [trade, setTrade]           = useState(null);
  const [submission, setSubmission] = useState(null);

  const navigate = (to) => setScreen(to);

  return (
    <div style={{
      minHeight: "100vh", background: T.dark,
      fontFamily: "'DM Sans', system-ui, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(59,191,133,0.18); border-radius: 4px; }
        input::placeholder, textarea::placeholder { color: #3a5a47; }
      `}</style>

      <div style={{
        flex: 1, display: "flex", flexDirection: "column",
        width: "100%", maxWidth: 680, margin: "0 auto",
      }}>
        {screen === "room-select" && (
          <RoomSelector onSelect={r => { setRoom(r); navigate("trade-select"); }} />
        )}
        {screen === "trade-select" && room && (
          <TradeSelector
            room={room}
            onSelect={t => { setTrade(t); navigate("spec"); }}
            onBack={() => navigate("room-select")}
          />
        )}
        {screen === "spec" && room && trade && (
          <SpecView
            room={room}
            trade={trade}
            onBack={() => navigate("trade-select")}
            onRaiseQuery={() => navigate("query")}
          />
        )}
        {screen === "query" && room && trade && (
          <QueryForm
            room={room}
            trade={trade}
            onBack={() => navigate("spec")}
            onSubmit={data => { setSubmission(data); navigate("success"); }}
          />
        )}
        {screen === "success" && room && trade && submission && (
          <QuerySuccess
            room={room}
            trade={trade}
            submission={submission}
            onDone={() => { setRoom(null); setTrade(null); setSubmission(null); navigate("room-select"); }}
          />
        )}
      </div>
    </div>
  );
}
