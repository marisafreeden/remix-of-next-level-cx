const DeploymentChart = () => {
  const ganttBars = [
    { label: "Discovery", start: 0, width: 20, color: "rgba(67,181,191,0.7)" },
    { label: "Setup & Config", start: 15, width: 25, color: "rgba(67,181,191,0.5)" },
    { label: "Integration", start: 30, width: 30, color: "rgba(112,66,210,0.5)" },
    { label: "Testing", start: 50, width: 20, color: "rgba(112,66,210,0.35)" },
    { label: "Go Live", start: 65, width: 15, color: "rgba(67,181,191,0.6)" },
  ];

  const calendarDays = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const calendarSlots = [
    [true, false, true, false, true],
    [false, true, true, true, false],
    [true, true, false, true, true],
    [false, false, true, false, true],
  ];

  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 520, margin: "0 auto" }}>
      {/* Back card — Calendar */}
      <div style={{
        position: "absolute", top: -20, right: -20, width: "72%",
        background: "#fff", borderRadius: 16, border: "1px solid rgba(10,15,24,0.06)",
        boxShadow: "0 8px 32px rgba(10,15,24,0.06)", padding: "24px 20px", zIndex: 1,
      }}>
        <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "#0a0f18", marginBottom: 16 }}>
          Deployment Calendar
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 8 }}>
          {calendarDays.map(d => (
            <div key={d} style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, color: "rgba(10,15,24,0.35)", textAlign: "center" }}>{d}</div>
          ))}
        </div>
        {calendarSlots.map((row, ri) => (
          <div key={ri} style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 6, marginBottom: 6 }}>
            {row.map((active, ci) => (
              <div key={ci} style={{
                height: 28, borderRadius: 6,
                background: active
                  ? ri % 2 === 0
                    ? "linear-gradient(135deg, rgba(67,181,191,0.35), rgba(67,181,191,0.12))"
                    : "linear-gradient(135deg, rgba(112,66,210,0.3), rgba(112,66,210,0.1))"
                  : "rgba(10,15,24,0.03)",
              }} />
            ))}
          </div>
        ))}
      </div>

      {/* Front card — Gantt Chart */}
      <div style={{
        position: "relative", zIndex: 2, width: "85%",
        background: "#fff", borderRadius: 16, border: "1px solid rgba(10,15,24,0.06)",
        boxShadow: "0 12px 40px rgba(10,15,24,0.08)", padding: "28px 24px",
        marginTop: 30,
      }}>
        <div style={{ fontFamily: "'Instrument Sans', sans-serif", fontWeight: 700, fontSize: 16, color: "#0a0f18", marginBottom: 4 }}>
          Project Timeline
        </div>
        <div style={{ display: "flex", gap: 16, marginBottom: 20, fontFamily: "Inter, sans-serif", fontSize: 11, color: "rgba(10,15,24,0.4)" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: "rgba(67,181,191,0.6)" }} /> Setup
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <span style={{ width: 8, height: 8, borderRadius: 2, background: "rgba(112,66,210,0.45)" }} /> Development
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {ganttBars.map((bar) => (
            <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, color: "rgba(10,15,24,0.55)", width: 90, flexShrink: 0, textAlign: "right" }}>
                {bar.label}
              </div>
              <div style={{ flex: 1, height: 22, background: "rgba(10,15,24,0.02)", borderRadius: 6, position: "relative" }}>
                <div style={{
                  position: "absolute", top: 0, left: `${bar.start}%`, width: `${bar.width}%`, height: "100%",
                  borderRadius: 6, background: `linear-gradient(90deg, ${bar.color}, ${bar.color.replace(/[\d.]+\)$/, (m) => `${parseFloat(m) * 0.4})`)})`,
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Week labels */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, marginLeft: 102, fontFamily: "Inter, sans-serif", fontSize: 10, color: "rgba(10,15,24,0.3)" }}>
          {["Wk 1", "Wk 2", "Wk 3", "Wk 4"].map(w => <span key={w}>{w}</span>)}
        </div>
      </div>
    </div>
  );
};

export default DeploymentChart;
