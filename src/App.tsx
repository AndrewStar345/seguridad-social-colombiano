
const BRANCHES = [
  {
    id: "salud", icon: "🏥", color: "#1D4ED8", bg: "#EFF6FF", border: "#93C5FD",
    angle: -90,
    title: "Sistema de Salud",
    items: [
      ["¿Qué es?", "Normas y entidades que garantizan atención médica a todos los colombianos"],
      ["Estructura", "EPS · IPS · ADRES · Ministerio de Salud y Protección Social"],
      ["Funcionamiento", "Régimen contributivo (formales) y subsidiado (vulnerables)"],
      ["Actores", "Estado · Empleadores · Trabajadores · EPS · IPS"],
      ["Objetivos", "Prevención, promoción de la salud y atención médica integral"],
    ]
  },
  {
    id: "arl", icon: "⛑️", color: "#C2410C", bg: "#FFF7ED", border: "#FDBA74",
    angle: -45,
    title: "Riesgos Laborales (ARL)",
    items: [
      ["¿Qué es?", "Sistema que cubre accidentes y enfermedades derivadas del trabajo"],
      ["Estructura", "ARL · Empresas afiliadas · Ministerio de Trabajo"],
      ["Funcionamiento", "Empleador paga el 100% del aporte según clase de riesgo"],
      ["Actores", "ARL · Empleador · Trabajador · Ministerio de Trabajo"],
      ["Objetivos", "Prevención de accidentes y protección laboral integral"],
    ]
  },
  {
    id: "pension", icon: "🏦", color: "#047857", bg: "#ECFDF5", border: "#6EE7B7",
    angle: 0,
    title: "Sistema Pensional",
    items: [
      ["¿Qué es?", "Protección económica en vejez, invalidez o muerte del trabajador"],
      ["Estructura", "Colpensiones (RPM) · Fondos Privados AFP (RAIS)"],
      ["Funcionamiento", "Cotización 16%: empleador 12% + trabajador 4%"],
      ["Actores", "Estado · Empleador · Trabajador · AFP · Colpensiones"],
      ["Objetivos", "Garantizar ingresos en la vejez e invalidez"],
    ]
  },
  {
    id: "parafiscales", icon: "📋", color: "#6D28D9", bg: "#F5F3FF", border: "#A78BFA",
    angle: 45,
    title: "Aportes Parafiscales",
    items: [
      ["SENA", "4% sobre la nómina — Formación profesional"],
      ["ICBF", "3% sobre la nómina — Bienestar familiar"],
      ["Caja de Compensación", "4% sobre la nómina — Subsidios y recreación"],
      ["Base", "Solo empleadores con trabajadores dependientes"],
      ["Objetivos", "Formación laboral, bienestar familiar y subsidios sociales"],
    ]
  },
  {
    id: "prima", icon: "💰", color: "#B91C1C", bg: "#FFF1F2", border: "#FCA5A5",
    angle: 90,
    title: "Prima de Servicio",
    items: [
      ["¿Qué es?", "Prestación equivalente a 30 días de salario por año laborado"],
      ["1er Semestre", "15 días de salario — pago antes del 30 de junio"],
      ["2do Semestre", "15 días de salario — pago antes del 20 de diciembre"],
      ["Objetivo", "Reconocer la labor continua del trabajador durante el año"],
    ]
  },
  {
    id: "cesantias", icon: "🏠", color: "#0F766E", bg: "#F0FDFA", border: "#5EEAD4",
    angle: 135,
    title: "Cesantías",
    items: [
      ["¿Qué son?", "Un (1) mes de salario por año trabajado — ahorro obligatorio"],
      ["Fondo de Cesantías", "Depósito anual al fondo antes del 14 de febrero"],
      ["Usos permitidos", "Desempleo · Adquisición de vivienda · Educación"],
      ["Objetivos", "Apoyo económico al trabajador en momentos de necesidad"],
    ]
  },
  {
    id: "intereses", icon: "📈", color: "#B45309", bg: "#FFFBEB", border: "#FCD34D",
    angle: 180,
    title: "Intereses s/ Cesantías",
    items: [
      ["Tasa anual", "12% anual sobre el saldo de cesantías acumuladas"],
      ["Pago", "Directo al trabajador — antes del 31 de enero de cada año"],
      ["Base de cálculo", "Saldo de cesantías al 31 de diciembre del año anterior"],
      ["Objetivo", "Compensar el valor financiero del dinero retenido en el fondo"],
    ]
  },
  {
    id: "vacaciones", icon: "🌴", color: "#BE185D", bg: "#FDF2F8", border: "#F9A8D4",
    angle: 225,
    title: "Vacaciones",
    items: [
      ["Duración", "15 días hábiles de descanso por cada año trabajado"],
      ["Tipo", "Descanso remunerado — salario completo durante el periodo"],
      ["Acumulación", "Se pueden acumular hasta 2 periodos con acuerdo escrito"],
      ["Objetivo", "Bienestar laboral, salud mental y calidad de vida del trabajador"],
    ]
  },
];

const SVG_W = 1820;
const SVG_H = 1250;
const CX = 910;
const CY = 625;
const RADIUS = 390;
const CARD_W = 228;

function getPos(angleDeg: number, r: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: CX + r * Math.cos(rad), y: CY + r * Math.sin(rad) };
}

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(150deg, #F0F4FF 0%, #F8FAFC 45%, #F0FDFA 100%)",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    }}>
      <style>{`
        @keyframes float-center {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes dash-rotate {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -28; }
        }
        .center-float { animation: float-center 4s ease-in-out infinite; }
        .ring-dash { animation: dash-rotate 12s linear infinite; }
        .branch-card {
          transition: transform 0.22s cubic-bezier(.34,1.56,.64,1), box-shadow 0.22s ease;
        }
        .branch-card:hover {
          transform: translateY(-6px) scale(1.028) !important;
          z-index: 30 !important;
        }
        .legend-pill {
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .legend-pill:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.12) !important;
        }
        ::-webkit-scrollbar { height: 6px; width: 6px; }
        ::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 99px; }
        ::-webkit-scrollbar-track { background: transparent; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ textAlign: "center", padding: "22px 24px 4px" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "linear-gradient(135deg, #1E3A8A, #2563EB)",
          color: "white", padding: "5px 22px", borderRadius: "99px",
          fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px",
          textTransform: "uppercase", marginBottom: "11px",
          boxShadow: "0 4px 16px rgba(37,99,235,0.35)",
        }}>
          🇨🇴 &nbsp;Derecho Laboral Colombiano · Presentación Académica
        </div>
        <h1 style={{
          margin: "0 0 5px",
          fontSize: "clamp(20px, 2.2vw, 30px)",
          fontWeight: 900,
          background: "linear-gradient(135deg, #1E3A8A 0%, #2563EB 45%, #7C3AED 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          lineHeight: 1.15,
          letterSpacing: "-0.5px",
        }}>
          Sistema General de Seguridad Social en Colombia
        </h1>
        <p style={{ margin: 0, color: "#64748B", fontSize: "12.5px", fontWeight: 500 }}>
          Mapa Conceptual · Ley 100 de 1993 · Código Sustantivo del Trabajo · Prestaciones Sociales
        </p>
      </div>

      {/* ── LEGEND ── */}
      <div style={{
        display: "flex", justifyContent: "center", gap: "7px",
        flexWrap: "wrap", padding: "10px 20px 4px",
      }}>
        {BRANCHES.map(b => (
          <div key={b.id} className="legend-pill" style={{
            display: "flex", alignItems: "center", gap: "5px",
            padding: "4px 12px 4px 8px",
            borderRadius: "99px",
            background: b.bg,
            border: `1.5px solid ${b.border}`,
            fontSize: "10.5px", fontWeight: 700, color: b.color,
            boxShadow: `0 2px 6px ${b.color}15`,
          }}>
            <span style={{ fontSize: "14px" }}>{b.icon}</span>
            {b.title}
          </div>
        ))}
      </div>

      {/* ── MAP CANVAS ── */}
      <div style={{ overflowX: "auto", overflowY: "hidden", paddingBottom: "4px" }}>
        <div style={{ position: "relative", width: SVG_W, height: SVG_H, margin: "0 auto" }}>

          {/* Decorative background blobs */}
          {[
            { x: 160, y: 200, r: 55, c: "#BFDBFE" },
            { x: 1660, y: 220, r: 65, c: "#BBF7D0" },
            { x: 110, y: 1060, r: 45, c: "#DDD6FE" },
            { x: 1710, y: 1010, r: 50, c: "#FED7AA" },
            { x: 490, y: 110, r: 30, c: "#FBCFE8" },
            { x: 1330, y: 1150, r: 38, c: "#FDE68A" },
            { x: 900, y: 80, r: 22, c: "#BAE6FD" },
            { x: 900, y: 1170, r: 22, c: "#BAE6FD" },
          ].map((dot, i) => (
            <div key={i} style={{
              position: "absolute",
              left: dot.x - dot.r, top: dot.y - dot.r,
              width: dot.r * 2, height: dot.r * 2,
              borderRadius: "50%", background: dot.c, opacity: 0.5,
              zIndex: 0, pointerEvents: "none",
            }} />
          ))}

          {/* SVG layer */}
          <svg
            width={SVG_W} height={SVG_H}
            style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
          >
            <defs>
              <radialGradient id="cGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="55%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#1E3A8A" />
              </radialGradient>
              <filter id="cGlow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="12" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="lineShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {BRANCHES.map(b => {
                const end = getPos(b.angle, RADIUS - 10);
                return (
                  <linearGradient key={b.id} id={`lg-${b.id}`}
                    x1={CX} y1={CY} x2={end.x} y2={end.y}
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.9" />
                    <stop offset="100%" stopColor={b.color} stopOpacity="0.9" />
                  </linearGradient>
                );
              })}
            </defs>

            {/* Outer dashed rotating ring */}
            <circle
              className="ring-dash"
              cx={CX} cy={CY} r="118"
              fill="none"
              stroke="#3B82F6"
              strokeWidth="1.2"
              strokeOpacity="0.18"
              strokeDasharray="7 7"
            />
            {/* Mid ring */}
            <circle cx={CX} cy={CY} r="108"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="0.8"
              strokeOpacity="0.2"
            />

            {/* Connection lines */}
            {BRANCHES.map(b => {
              const end = getPos(b.angle, RADIUS - 22);
              const mid = getPos(b.angle, RADIUS * 0.52);
              const perpAngle = b.angle + 90;
              const perpRad = (perpAngle * Math.PI) / 180;
              const offset = 30;
              const cpX = mid.x + offset * Math.cos(perpRad);
              const cpY = mid.y + offset * Math.sin(perpRad);
              return (
                <g key={b.id}>
                  {/* Glow shadow */}
                  <path
                    d={`M ${CX} ${CY} Q ${cpX} ${cpY} ${end.x} ${end.y}`}
                    fill="none" stroke={b.color}
                    strokeWidth="6" strokeOpacity="0.09" strokeLinecap="round"
                  />
                  {/* Main line */}
                  <path
                    d={`M ${CX} ${CY} Q ${cpX} ${cpY} ${end.x} ${end.y}`}
                    fill="none"
                    stroke={`url(#lg-${b.id})`}
                    strokeWidth="2.5" strokeLinecap="round"
                  />
                  {/* End dot */}
                  <circle cx={end.x} cy={end.y} r="5.5" fill={b.color} opacity="0.95" />
                  <circle cx={end.x} cy={end.y} r="10" fill={b.color} opacity="0.12" />
                </g>
              );
            })}

            {/* Center circle */}
            <circle cx={CX} cy={CY} r="106" fill="url(#cGrad)" filter="url(#cGlow)" />
            <circle cx={CX} cy={CY} r="99" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
            <circle cx={CX} cy={CY} r="91" fill="none" stroke="rgba(255,255,255,0.12)"
              strokeWidth="1.5" strokeDasharray="3 5" />
          </svg>

          {/* Center node label */}
          <div className="center-float" style={{
            position: "absolute",
            left: CX - 98, top: CY - 98,
            width: 196, height: 196,
            borderRadius: "50%",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            zIndex: 10, textAlign: "center", padding: "10px",
          }}>
            <div style={{ fontSize: "30px", marginBottom: "3px", lineHeight: 1 }}>🇨🇴</div>
            <div style={{
              fontSize: "9.5px", fontWeight: 900, color: "white",
              lineHeight: 1.4, textTransform: "uppercase", letterSpacing: "0.4px",
            }}>
              Sistema<br />General de<br />Seguridad<br />Social
            </div>
            <div style={{
              marginTop: "6px", fontSize: "8px",
              color: "rgba(255,255,255,0.65)", fontWeight: 600,
              background: "rgba(255,255,255,0.15)",
              padding: "2px 9px", borderRadius: "99px",
            }}>
              Ley 100 · 1993
            </div>
          </div>

          {/* Branch cards */}
          {BRANCHES.map(b => {
            const pos = getPos(b.angle, RADIUS);
            return (
              <div
                key={b.id}
                className="branch-card"
                style={{
                  position: "absolute",
                  left: pos.x - CARD_W / 2,
                  top: pos.y - 84,
                  width: CARD_W,
                  zIndex: 5,
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: `0 6px 28px ${b.color}22, 0 2px 8px rgba(0,0,0,0.07)`,
                  border: `2px solid ${b.border}`,
                }}
              >
                {/* Header */}
                <div style={{
                  background: `linear-gradient(135deg, ${b.color} 0%, ${b.color}DD 100%)`,
                  padding: "10px 13px 9px",
                  display: "flex", alignItems: "center", gap: "9px",
                }}>
                  <div style={{
                    width: "34px", height: "34px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.22)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0, fontSize: "18px",
                  }}>
                    {b.icon}
                  </div>
                  <div style={{
                    fontSize: "11px", fontWeight: 800,
                    color: "white", lineHeight: 1.25,
                  }}>
                    {b.title}
                  </div>
                </div>

                {/* Items */}
                <div style={{ background: b.bg, padding: "10px 12px 8px" }}>
                  {b.items.map(([label, desc], i) => (
                    <div key={i} style={{
                      marginBottom: i < b.items.length - 1 ? "7px" : 0,
                      paddingBottom: i < b.items.length - 1 ? "7px" : 0,
                      borderBottom: i < b.items.length - 1 ? `1px solid ${b.border}` : "none",
                    }}>
                      <div style={{
                        fontSize: "8px", fontWeight: 800, color: b.color,
                        textTransform: "uppercase", letterSpacing: "0.9px",
                        marginBottom: "2px",
                        display: "flex", alignItems: "center", gap: "4px",
                      }}>
                        <span style={{
                          display: "inline-block", width: "5px", height: "5px",
                          borderRadius: "50%", background: b.color, flexShrink: 0,
                        }} />
                        {label}
                      </div>
                      <div style={{
                        fontSize: "9.5px", color: "#1F2937",
                        lineHeight: 1.45, fontWeight: 500, paddingLeft: "9px",
                      }}>
                        {desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{
        textAlign: "center", padding: "6px 24px 20px",
        fontSize: "10.5px", color: "#94A3B8", fontWeight: 500,
      }}>
        📚 <strong style={{ color: "#64748B" }}>Referencias:</strong>&nbsp;
        Ley 100/1993 · Código Sustantivo del Trabajo · Decreto 1072/2015 · Ley 776/2002 · Ley 52/1975
        &nbsp;·&nbsp;
        <span style={{ color: "#CBD5E1" }}>Elaborado con fines académicos · 2026</span>
      </div>
    </div>
  );
}
