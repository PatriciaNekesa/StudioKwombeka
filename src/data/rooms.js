// rooms.js — Atelier Loft design data
// Each room contains specs keyed by trade discipline.
// This file is the single source of truth the app reads from.
// In production, this would be fetched from the architect's backend API.

export const PROJECT = {
  id: 'atelier-loft-001',
  name: 'Atelier Loft',
  address: '14 Foundry Lane, London EC1',
  architect: 'Studio Forma',
  pm: 'Patricia Nakamura',
  phase: 'Phase 6 — Internal Finishes',
  revision: 'Rev B — March 2026',
}

export const TRADES = [
  { id: 'painter',    label: 'Painter',         sub: 'Colours, finishes, coats',   color: '#D85A30', bg: '#FAECE7' },
  { id: 'joiner',     label: 'Joiner / finisher',sub: 'Doors, skirting, dims',      color: '#0F6E56', bg: '#E1F5EE' },
  { id: 'contractor', label: 'Main contractor',  sub: 'Full spec + drawings',       color: '#534AB7', bg: '#EEEDFE' },
  { id: 'mep',        label: 'MEP contractor',   sub: 'Services, heating, lighting',color: '#BA7517', bg: '#FAEEDA' },
  { id: 'other',      label: 'Other / general',  sub: 'Overview only',              color: '#5F5E5A', bg: '#F1EFE8' },
]

export const ROOMS = [
  {
    id: 'R01',
    slug: 'main-studio',
    name: 'Main Studio',
    level: 'Ground floor',
    area: '240 m²',
    height: '6500 mm',
    drawingRef: 'GA-GF-01 Rev B',
    token: 'tok_r01_a7f3k9',
    specs: {
      painter: {
        sections: [
          {
            title: 'Walls — north + south',
            rows: [
              { key: 'Colour', value: 'CF-01 Warm Plaster', swatch: '#C8C0B2' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 full coats' },
              { key: 'Primer', value: 'Alkali-resistant, 1 coat' },
            ]
          },
          {
            title: 'Exposed brick columns',
            rows: [
              { key: 'Treatment', value: 'No paint — leave raw' },
              { key: 'Joints', value: 'Natural lime mortar repoint only' },
              { key: 'Note', value: 'Protect brick during all painting works' },
            ]
          },
          {
            title: 'Ceiling + beams',
            rows: [
              { key: 'Colour', value: 'CF-02 Raw Concrete', swatch: '#9B9690' },
              { key: 'Finish', value: 'Flat — zero sheen' },
              { key: 'Steel beams', value: 'No paint — blackened steel only' },
            ]
          },
          {
            title: 'Mezzanine soffit',
            rows: [
              { key: 'Colour', value: 'CF-03 Charcoal', swatch: '#3C3A37' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 coats' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Mezzanine railing',
            rows: [
              { key: 'Material', value: 'Blackened mild steel ST-02' },
              { key: 'Top rail', value: '50 × 10 mm flat bar' },
              { key: 'Balusters', value: '12 mm round bar @ 100 mm c/c' },
              { key: 'Height', value: '1100 mm to top of rail' },
            ]
          },
          {
            title: 'Plan drawers unit',
            rows: [
              { key: 'Carcass', value: 'Birch ply, 18 mm' },
              { key: 'Drawers', value: '5 off, A0 format' },
              { key: 'Fronts', value: 'Smoked oak veneer, oiled' },
              { key: 'Handles', value: 'Recessed pull, brushed steel' },
              { key: 'Location', value: 'Against west wall — see GA-GF-01' },
            ]
          },
          {
            title: 'Work tables',
            rows: [
              { key: 'Top', value: 'White oak solid, 40 mm thick, oiled' },
              { key: 'Legs', value: 'Blackened steel box section 50 × 50' },
              { key: 'Size', value: '2400 × 900 mm each (×2)' },
              { key: 'Height', value: '750 mm finished' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '240 m²' },
              { key: 'Floor to soffit', value: '6500 mm (double height)' },
              { key: 'Mezzanine level', value: '+3000 mm AFF' },
              { key: 'Drawing ref', value: 'GA-GF-01 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'FL-05 Polished concrete, 75 mm' },
              { key: 'Walls', value: 'CF-01 Warm plaster + brick columns' },
              { key: 'Ceiling', value: 'Exposed board-formed concrete' },
              { key: 'Columns', value: 'ST-02 Blackened steel I-beams' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'In-slab hydronic UFH' },
              { key: 'Ventilation', value: 'MVHR — 5 terminals, see M-03' },
              { key: 'Lighting', value: 'Pendant track — see E-01' },
              { key: 'Data', value: 'Floor box × 6 — see IT-01' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Heating',
            rows: [
              { key: 'System', value: 'Hydronic UFH in slab' },
              { key: 'Manifold', value: 'Zone 1 — north wall cupboard' },
              { key: 'Pipe centres', value: '200 mm' },
              { key: 'Flow temp', value: '45°C max' },
            ]
          },
          {
            title: 'Ventilation',
            rows: [
              { key: 'Unit', value: 'MVHR — Zehnder ComfoAir Q600' },
              { key: 'Terminals', value: '5 off — see M-03 for locations' },
              { key: 'Extract rate', value: '600 m³/h total' },
              { key: 'Duct material', value: 'Acoustic-lined circular, 250 mm dia' },
            ]
          },
          {
            title: 'Lighting',
            rows: [
              { key: 'Circuit', value: 'L1A — 3-phase ring' },
              { key: 'Pendants', value: '3 off — drop from beam at 3500 mm AFF' },
              { key: 'Lamp', value: 'LED 3000K CRI>95, 2000lm each' },
              { key: 'Control', value: 'DALI dimmer — panel DP-01' },
            ]
          }
        ]
      }
    }
  },
  {
    id: 'R02',
    slug: 'mezzanine-lounge',
    name: 'Mezzanine Lounge',
    level: 'Mezzanine +3.0m',
    area: '88 m²',
    height: '3200 mm',
    drawingRef: 'GA-MEZ-01 Rev B',
    token: 'tok_r02_b8g4l2',
    specs: {
      painter: {
        sections: [
          {
            title: 'Walls',
            rows: [
              { key: 'Colour', value: 'CF-01 Warm Plaster', swatch: '#C8C0B2' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 coats' },
            ]
          },
          {
            title: 'Shelving unit',
            rows: [
              { key: 'Treatment', value: 'No paint — oak veneer, factory oiled' },
              { key: 'Note', value: 'Protect with dust sheets during wall painting' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Full-height shelving',
            rows: [
              { key: 'Material', value: 'White oak veneer, 18 mm ply carcass' },
              { key: 'Finish', value: 'Natural Osmo oil, 2 coats' },
              { key: 'Height', value: 'Floor to ceiling — 3200 mm' },
              { key: 'Shelf spacing', value: 'Adjustable @ 32 mm pitch' },
              { key: 'Shelves', value: '25 mm solid oak, max span 900 mm' },
              { key: 'Divisions', value: '9 off vertical — see JN-MEZ-01' },
            ]
          },
          {
            title: 'Lounge coffee table',
            rows: [
              { key: 'Top', value: 'White oak solid, 35 mm, oiled' },
              { key: 'Base', value: 'Blackened steel plate, 6 mm' },
              { key: 'Size', value: '1200 × 600 mm' },
              { key: 'Height', value: '380 mm' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '88 m²' },
              { key: 'Floor to ceiling', value: '3200 mm' },
              { key: 'Level', value: 'Mezzanine +3.0m' },
              { key: 'Drawing ref', value: 'GA-MEZ-01 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'WD-04 White oak, 150 mm wide plank' },
              { key: 'Walls', value: 'CF-01 Warm plaster' },
              { key: 'Shelving', value: 'White oak floor-to-ceiling unit' },
              { key: 'Railing', value: 'ST-02 Blackened steel to studio side' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'UFH — zone 3' },
              { key: 'Lighting', value: 'Pendant track + shelf strip — see E-04' },
              { key: 'Data', value: '2 floor boxes — see IT-04' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Heating',
            rows: [
              { key: 'Zone', value: 'Zone 3 — mezzanine' },
              { key: 'Manifold', value: 'Inside storage cupboard MEZ-ST-01' },
              { key: 'Screed', value: '65 mm liquid screed over insulation' },
            ]
          },
          {
            title: 'Lighting',
            rows: [
              { key: 'Circuit', value: 'L4A' },
              { key: 'Pendant', value: '2 off — 1800 mm drop from ceiling' },
              { key: 'Shelf strip', value: 'LED strip under each shelf — 2700K' },
              { key: 'Control', value: 'Rotary dimmer SW-MEZ-01' },
            ]
          }
        ]
      }
    }
  },
  {
    id: 'R03',
    slug: 'entry-reception',
    name: 'Entry & Reception',
    level: 'Ground floor',
    area: '28 m²',
    height: '3200 mm',
    drawingRef: 'GA-GF-02 Rev B',
    token: 'tok_r03_c9h5m3',
    specs: {
      painter: {
        sections: [
          {
            title: 'Feature brick wall',
            rows: [
              { key: 'Treatment', value: 'No paint — raw reclaimed brick' },
              { key: 'Mortar', value: 'Natural lime — leave as laid' },
              { key: 'Note', value: 'Do NOT seal or coat brick under any circumstances' },
            ]
          },
          {
            title: 'Side walls (plaster)',
            rows: [
              { key: 'Colour', value: 'CF-04 Light Stone', swatch: '#DDD5C4' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 coats' },
            ]
          },
          {
            title: 'Ceiling',
            rows: [
              { key: 'Colour', value: 'CF-02 Raw Concrete', swatch: '#9B9690' },
              { key: 'Finish', value: 'Flat — no sheen' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Reception desk',
            rows: [
              { key: 'Top', value: 'White oak solid, 50 mm thick, oiled' },
              { key: 'Top overhang', value: '50 mm each side' },
              { key: 'Base', value: 'Concrete-effect render over blockwork' },
              { key: 'Size', value: '2000 × 700 mm' },
              { key: 'Counter height', value: '1100 mm' },
              { key: 'Below counter', value: '730 mm — staff side' },
            ]
          },
          {
            title: 'Entry door frame',
            rows: [
              { key: 'Frame', value: 'ST-02 Blackened steel, welded' },
              { key: 'Door leaf', value: 'Steel + glass — factory supplied' },
              { key: 'Threshold', value: 'Stainless steel flat bar, 3 mm' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '28 m²' },
              { key: 'Floor to ceiling', value: '3200 mm' },
              { key: 'Drawing ref', value: 'GA-GF-02 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'FL-06 Honed limestone 600×600' },
              { key: 'Feature wall', value: 'BK-03 Raw reclaimed brick' },
              { key: 'Side walls', value: 'CF-04 Light stone plaster' },
              { key: 'Door', value: 'ST-02 Blackened steel + clear glass' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'UFH — zone 4' },
              { key: 'Lighting', value: '3 pendants — see E-02' },
              { key: 'Security', value: 'Access control panel — see SC-01' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Heating',
            rows: [
              { key: 'Zone', value: 'Zone 4 — entry' },
              { key: 'Floor build-up', value: '100 mm insulation + 65 mm screed' },
            ]
          },
          {
            title: 'Lighting',
            rows: [
              { key: 'Pendants', value: '3 off — 1200 mm drop' },
              { key: 'Lamp', value: '3000K CRI>95, 1500lm' },
              { key: 'Control', value: 'DALI — panel DP-02' },
              { key: 'Emergency', value: 'Maintained exit sign above door' },
            ]
          }
        ]
      }
    }
  },
  {
    id: 'R04',
    slug: 'library-archive',
    name: 'Library / Archive',
    level: 'Ground floor',
    area: '38 m²',
    height: '3200 mm',
    drawingRef: 'GA-GF-04 Rev B',
    token: 'tok_r04_d1i6n4',
    specs: {
      painter: {
        sections: [
          {
            title: 'Walls',
            rows: [
              { key: 'Colour', value: 'CF-05 Deep Slate', swatch: '#4A4845' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 coats — dark colour, ensure full coverage' },
              { key: 'Primer', value: 'Tinted primer to match — apply 1 coat first' },
            ]
          },
          {
            title: 'Ceiling',
            rows: [
              { key: 'Colour', value: 'CF-05 Deep Slate — match walls', swatch: '#4A4845' },
              { key: 'Finish', value: 'Flat' },
              { key: 'Note', value: 'Ceiling and walls continuous — no break' },
            ]
          },
          {
            title: 'Shelving',
            rows: [
              { key: 'Treatment', value: 'No paint — powder coated at factory' },
              { key: 'Colour', value: 'RAL 9005 Jet Black — factory applied' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Archive shelving',
            rows: [
              { key: 'Material', value: 'Powder-coated steel, RAL 9005' },
              { key: 'Shelf depth', value: '350 mm' },
              { key: 'Shelf height', value: 'Adjustable @ 25 mm pitch' },
              { key: 'Bay width', value: '900 mm' },
              { key: 'Height', value: 'Floor to ceiling — 3200 mm' },
              { key: 'Qty', value: '6 bays — see LB-01' },
            ]
          },
          {
            title: 'Reading table',
            rows: [
              { key: 'Top', value: 'Black linoleum on MDF, 25 mm' },
              { key: 'Base', value: 'Blackened steel trestle' },
              { key: 'Size', value: '1800 × 900 mm' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '38 m²' },
              { key: 'Floor to ceiling', value: '3200 mm' },
              { key: 'Drawing ref', value: 'GA-GF-04 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'FL-05 Polished concrete' },
              { key: 'Walls + ceiling', value: 'CF-05 Deep slate, all surfaces' },
              { key: 'Shelving', value: 'Steel RAL 9005, floor to ceiling' },
              { key: 'Door', value: 'WD-04 Solid oak, blackened frame' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'UFH — zone 5' },
              { key: 'Lighting', value: 'Track spots × 6 — see E-03' },
              { key: 'Data', value: '1 floor box — see IT-03' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Lighting',
            rows: [
              { key: 'Track', value: '3-circuit track — 4000 mm long' },
              { key: 'Spots', value: '6 off adjustable — 3000K' },
              { key: 'Lux target', value: '300 lux on shelf face' },
              { key: 'Control', value: 'Single switch SW-LB-01' },
            ]
          },
          {
            title: 'Heating',
            rows: [
              { key: 'Zone', value: 'Zone 5' },
              { key: 'Note', value: 'Timber archive — maintain 18–22°C, max 60% RH' },
            ]
          }
        ]
      }
    }
  },
  {
    id: 'R05',
    slug: 'meeting-room',
    name: 'Meeting Room',
    level: 'Ground floor',
    area: '42 m²',
    height: '3200 mm',
    drawingRef: 'GA-GF-03 Rev B',
    token: 'tok_r05_e2j7o5',
    specs: {
      painter: {
        sections: [
          {
            title: 'Walls',
            rows: [
              { key: 'Colour', value: 'CF-01 Warm Plaster', swatch: '#C8C0B2' },
              { key: 'Finish', value: 'Matt emulsion' },
              { key: 'Coats', value: '2 full coats' },
              { key: 'Primer', value: 'Alkali-resistant, 1 coat' },
            ]
          },
          {
            title: 'Ceiling',
            rows: [
              { key: 'Colour', value: 'CF-02 Raw Concrete', swatch: '#9B9690' },
              { key: 'Finish', value: 'Flat — no sheen' },
              { key: 'Note', value: 'Leave steel beam exposed — no paint' },
            ]
          },
          {
            title: 'Acoustic felt panels',
            rows: [
              { key: 'Treatment', value: 'No paint — factory finished' },
              { key: 'Ref', value: 'AC-06 Warm Grey felt — west wall only' },
              { key: 'Note', value: 'Install after all painting complete' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Door',
            rows: [
              { key: 'Type', value: 'Single leaf, solid core' },
              { key: 'Width', value: '900 mm' },
              { key: 'Height', value: '2400 mm' },
              { key: 'Material', value: 'White oak, natural oiled' },
              { key: 'Frame', value: 'ST-02 Blackened steel' },
              { key: 'Handle', value: 'Lever, brushed bronze — ref BZ-01' },
            ]
          },
          {
            title: 'Skirting',
            rows: [
              { key: 'Profile', value: '75 × 18 mm flat, pencil round top' },
              { key: 'Material', value: 'Moisture-resistant MDF' },
              { key: 'Finish', value: 'Paint — match wall CF-01' },
              { key: 'Fix', value: 'Adhesive + pin nail, fill and paint' },
            ]
          },
          {
            title: 'Glazed partition',
            rows: [
              { key: 'Frame', value: 'ST-02 Blackened steel, welded' },
              { key: 'Mullion', value: '50 × 25 mm RHS @ 900 mm c/c' },
              { key: 'Glazing', value: '10 mm toughened clear' },
              { key: 'Height', value: 'Full floor to ceiling — 3200 mm' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '42 m²' },
              { key: 'Floor to ceiling', value: '3200 mm' },
              { key: 'Level', value: 'Ground floor' },
              { key: 'Drawing ref', value: 'GA-GF-03 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'WD-04 White oak, 150 mm plank, oiled' },
              { key: 'Walls', value: 'CF-01 Warm plaster' },
              { key: 'Ceiling', value: 'Exposed board-formed concrete' },
              { key: 'Acoustic', value: 'AC-06 Felt panels — west wall only' },
              { key: 'Partition', value: 'ST-02 Glazed — east wall full height' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'UFH — zone 2' },
              { key: 'Ventilation', value: 'MVHR terminals × 2 — see M-05' },
              { key: 'Lighting', value: 'Pendant bar × 5 — see E-05' },
              { key: 'AV', value: 'Projector + screen — see AV-01' },
              { key: 'Data', value: '4 floor boxes — see IT-05' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Heating',
            rows: [
              { key: 'Zone', value: 'Zone 2 — meeting room' },
              { key: 'Manifold', value: 'Corridor cupboard COR-01' },
              { key: 'Pipe centres', value: '150 mm' },
              { key: 'Screed', value: '65 mm liquid screed over insulation' },
            ]
          },
          {
            title: 'Ventilation',
            rows: [
              { key: 'Terminals', value: '2 off — see M-05 for locations' },
              { key: 'Extract rate', value: '120 m³/h per terminal' },
              { key: 'Duct', value: '200 mm circular, acoustic lined' },
            ]
          },
          {
            title: 'Lighting',
            rows: [
              { key: 'Circuit', value: 'L5A — pendant bar' },
              { key: 'Pendants', value: '5 off on bar, 3000K CRI>95' },
              { key: 'Bar height', value: '2200 mm AFF to underside' },
              { key: 'Control', value: 'DALI rotary dimmer SW-MR-01' },
              { key: 'Emergency', value: 'Non-maintained fitting above door' },
            ]
          }
        ]
      }
    }
  },
  {
    id: 'R06',
    slug: 'wc-welfare',
    name: 'WC / Welfare',
    level: 'Ground floor',
    area: '22 m²',
    height: '2800 mm',
    drawingRef: 'GA-GF-05 Rev B',
    token: 'tok_r06_f3k8p6',
    specs: {
      painter: {
        sections: [
          {
            title: 'Walls',
            rows: [
              { key: 'Colour', value: 'CF-06 Off-White', swatch: '#F0EBE2' },
              { key: 'Finish', value: 'Silk emulsion — moisture-resistant' },
              { key: 'Coats', value: '2 coats' },
              { key: 'Primer', value: 'Moisture-resistant primer 1 coat' },
              { key: 'Note', value: 'Tile splashback area — no paint, see tiler' },
            ]
          },
          {
            title: 'Ceiling',
            rows: [
              { key: 'Colour', value: 'CF-06 Off-White', swatch: '#F0EBE2' },
              { key: 'Finish', value: 'Moisture-resistant matt' },
              { key: 'Coats', value: '2 coats' },
            ]
          }
        ]
      },
      joiner: {
        sections: [
          {
            title: 'Vanity unit',
            rows: [
              { key: 'Carcass', value: 'Moisture-resistant MDF, 18 mm' },
              { key: 'Top', value: 'Compact laminate, 12 mm — matt white' },
              { key: 'Doors', value: 'Push-to-open — no handles' },
              { key: 'Width', value: '1200 mm' },
              { key: 'Height', value: '850 mm to top' },
            ]
          },
          {
            title: 'Mirror cabinet',
            rows: [
              { key: 'Size', value: '1100 × 700 mm' },
              { key: 'Frame', value: 'Blackened steel, 20 mm' },
              { key: 'Fix', value: 'Wall-hung — structural fixings required' },
            ]
          }
        ]
      },
      contractor: {
        sections: [
          {
            title: 'Room data',
            rows: [
              { key: 'Area', value: '22 m²' },
              { key: 'Floor to ceiling', value: '2800 mm' },
              { key: 'Drawing ref', value: 'GA-GF-05 Rev B' },
            ]
          },
          {
            title: 'Key finishes',
            rows: [
              { key: 'Floor', value: 'Porcelain tile 300×600, Matt Concrete' },
              { key: 'Walls', value: 'CF-06 Off-white silk + tile splashback' },
              { key: 'Splashback', value: 'Zellige tile — white, 100×100' },
              { key: 'Fittings', value: 'Vola — brushed chrome range' },
            ]
          },
          {
            title: 'Services',
            rows: [
              { key: 'Heating', value: 'Towel rail — electric, 300W' },
              { key: 'Ventilation', value: 'Extract fan — see M-06' },
              { key: 'Lighting', value: 'IP44 downlights × 4 — see E-06' },
            ]
          }
        ]
      },
      mep: {
        sections: [
          {
            title: 'Ventilation',
            rows: [
              { key: 'Fan', value: 'Humidity-sensing extract fan' },
              { key: 'Extract rate', value: '54 m³/h' },
              { key: 'Duct', value: '100 mm circular to external' },
            ]
          },
          {
            title: 'Lighting',
            rows: [
              { key: 'Fittings', value: '4 × IP44 downlights — 3000K' },
              { key: 'Mirror light', value: '1 × IP44 strip above mirror' },
              { key: 'Control', value: 'PIR auto on/off + manual override' },
            ]
          },
          {
            title: 'Plumbing',
            rows: [
              { key: 'Mains water', value: 'See P-06 for pipework layout' },
              { key: 'WC', value: 'Wall-hung — Geberit Sigma frame' },
              { key: 'Basin', value: 'Counter-top, waste to wall' },
            ]
          }
        ]
      }
    }
  }
]

export function getRoomByToken(token) {
  return ROOMS.find(r => r.token === token) || null
}

export function getRoomBySlug(slug) {
  return ROOMS.find(r => r.slug === slug) || null
}

export function getRoomById(id) {
  return ROOMS.find(r => r.id === id) || null
}
