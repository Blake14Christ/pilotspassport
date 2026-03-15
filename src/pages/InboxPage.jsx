import React, { useEffect, useMemo, useState } from "react";
import { BL, ST, MU, WH, INBOX_MESSAGES } from "../shared/data";
import { Mono } from "../shared/ui";

export default function InboxPage({ setUnreadCount }) {
  const [selected, setSelected] = useState(INBOX_MESSAGES[0]?.id ?? null);
  const [reply, setReply] = useState("");
  const [msgs, setMsgs] = useState(INBOX_MESSAGES.map((m) => ({ ...m })));

  const msg = useMemo(
    () => msgs.find((m) => m.id === selected) || null,
    [msgs, selected]
  );

  const unreadCount = useMemo(
    () => msgs.filter((m) => m.unread).length,
    [msgs]
  );

  useEffect(() => {
    if (setUnreadCount) setUnreadCount(unreadCount);
  }, [unreadCount, setUnreadCount]);

  const selectMsg = (id) => {
    setSelected(id);
    setMsgs((prev) =>
      prev.map((m) => (m.id === id ? { ...m, unread: false } : m))
    );
  };

  const handleMarkAllRead = () => {
    setMsgs((prev) => prev.map((m) => ({ ...m, unread: false })));
  };

  const handleSend = () => {
    if (!reply.trim()) return;
    setReply("");
  };

  return (
    <div style={{ maxWidth: 1280, margin: "0 auto", padding: "3rem 2rem 5rem" }}>
      <div style={{ marginBottom: "1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
          <span style={{ width: 20, height: 1, background: BL, display: "inline-block" }} />
          <Mono c="PILOTS PASSPORT" s={10} col={BL} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem,3vw,2.5rem)",
              fontWeight: 700,
              margin: 0,
            }}
          >
            Inbox
          </h1>

          {unreadCount > 0 && (
            <span
              style={{
                background: BL,
                color: WH,
                borderRadius: 20,
                padding: "0.2rem 0.75rem",
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                fontWeight: 600,
              }}
            >
              {unreadCount} NEW
            </span>
          )}

          <button
            onClick={handleMarkAllRead}
            style={{
              marginLeft: "auto",
              background: "rgba(18,119,189,.12)",
              border: "1px solid rgba(18,119,189,.25)",
              color: BL,
              borderRadius: 8,
              padding: "0.45rem 0.85rem",
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              cursor: "pointer",
              letterSpacing: "0.08em",
            }}
          >
            MARK ALL READ
          </button>
        </div>

        <p style={{ color: MU, fontSize: 13, marginTop: "0.5rem",textAlign:"left"}}>
          Direct messages from operators and pilots on the network.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "320px 1fr",
          gap: "1rem",
          minHeight: 600,
        }}
      >
        <div
          style={{
            background: ST,
            border: "1px solid rgba(255,255,255,.07)",
            borderRadius: 16,
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              padding: "1rem 1.25rem",
              borderBottom: "1px solid rgba(255,255,255,.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Mono c="MESSAGES" s={10} col={WH} style={{ letterSpacing: "0.15em" }} />
            {unreadCount > 0 && (
              <span
                style={{
                  background: "rgba(18,119,189,.15)",
                  border: "1px solid rgba(18,119,189,.3)",
                  borderRadius: 20,
                  padding: "0.15rem 0.6rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 9,
                  color: BL,
                }}
              >
                {unreadCount} UNREAD
              </span>
            )}
          </div>

          <div style={{ overflowY: "auto", flex: 1 }}>
            {msgs.map((m) => (
              <button
                key={m.id}
                onClick={() => selectMsg(m.id)}
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "1rem 1.25rem",
                  border: "none",
                  borderBottom: "1px solid rgba(255,255,255,.04)",
                  cursor: "pointer",
                  background: selected === m.id ? "rgba(18,119,189,.07)" : "transparent",
                  transition: "background .1s",
                  borderLeft: selected === m.id ? `2px solid ${BL}` : "2px solid transparent",
                  color: WH,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.3rem",
                  }}
                >
                  <div style={{ fontSize: 13, fontWeight: m.unread ? 600 : 400, color: m.unread ? WH : MU }}>
                    {m.from}
                  </div>
                  <Mono c={m.time} s={8} />
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: MU,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                    maxWidth: 210,
                  }}
                >
                  {m.preview}
                </div>

                {m.unread && (
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: BL,
                      marginTop: 6,
                      boxShadow: `0 0 6px ${BL}`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {msg && (
          <div
            style={{
              background: ST,
              border: "1px solid rgba(255,255,255,.07)",
              borderRadius: 16,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "1.25rem 1.5rem",
                borderBottom: "1px solid rgba(255,255,255,.06)",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  background: "rgba(245,158,11,.12)",
                  border: "1px solid rgba(245,158,11,.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#f59e0b",
                }}
              >
                {msg.handle.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{msg.from}</div>
                <Mono c={`@${msg.handle} · ${msg.time}`} s={9} />
              </div>

              <div style={{ marginLeft: "auto" }}>
                <span
                  style={{
                    background: "rgba(245,158,11,.1)",
                    border: "1px solid rgba(245,158,11,.2)",
                    borderRadius: 20,
                    padding: "0.2rem 0.6rem",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 9,
                    color: "#f59e0b",
                  }}
                >
                  🏢 OPERATOR
                </span>
              </div>
            </div>

            <div style={{ flex: 1, padding: "1.5rem", overflowY: "auto" }}>
              <p style={{ fontSize: 13, lineHeight: 1.9, color: MU, marginTop: 0 }}>
                {msg.preview}
              </p>

              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "1rem",
                  background: "rgba(255,255,255,.02)",
                  border: "1px solid rgba(255,255,255,.06)",
                  borderRadius: 10,
                }}
              >
                <Mono c="QUICK ACTIONS" s={9} style={{ display: "block", marginBottom: "0.75rem" }} />
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {[
                    "I'm interested — let's schedule a call",
                    "Send me the job description",
                    "Not available at this time",
                  ].map((t) => (
                    <button
                      key={t}
                      onClick={() => setReply(t)}
                      style={{
                        background: "rgba(18,119,189,.08)",
                        color: BL,
                        border: "1px solid rgba(18,119,189,.2)",
                        borderRadius: 20,
                        padding: "0.35rem 0.85rem",
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 9,
                        cursor: "pointer",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                padding: "1rem 1.5rem",
                borderTop: "1px solid rgba(255,255,255,.06)",
                display: "flex",
                gap: "0.75rem",
                alignItems: "flex-end",
              }}
            >
              <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Type a reply..."
                rows={2}
                style={{
                  flex: 1,
                  background: "rgba(255,255,255,.04)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 9,
                  color: WH,
                  fontFamily: "inherit",
                  fontSize: 13,
                  fontWeight: 300,
                  padding: "0.65rem 0.9rem",
                  resize: "none",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                onClick={handleSend}
                style={{
                  background: BL,
                  color: WH,
                  border: "none",
                  borderRadius: 9,
                  padding: "0.6rem 1.25rem",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11,
                  cursor: "pointer",
                  letterSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}
              >
                SEND →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}