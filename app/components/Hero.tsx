"use client"
import { useState, useEffect, useCallback } from "react"

const BG = "#080604"
const CRIMSON = "#9B1C1C"
const GOLD = "#B8860B"
const GOLD_LIGHT = "#D4A843"
const CREAM = "#D9C9A8"
const DARK_RED = "#5C0A0A"

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1557701472-b7ea9af8aa9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    label: "Creative Vision",
    sub: "Bringing ideas to life through design",
  },
  {
    image: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    label: "Bold Craft",
    sub: "Precision meets artistry in every project",
  },
  {
    image: "https://images.unsplash.com/photo-1472803828399-39d4ac53c6e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    label: "Built to Last",
    sub: "Structure, depth and enduring quality",
  },
  {
    image: "https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1920",
    label: "Dark Precision",
    sub: "Where architecture meets aesthetic mastery",
  },
]



export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)
  const [fading, setFading] = useState(false)

  const goTo = useCallback((index: number) => {
    if (index === current || fading) return
    setPrev(current)
    setFading(true)
    setCurrent(index)
    setTimeout(() => {
      setPrev(null)
      setFading(false)
    }, 800)
  }, [current, fading])

  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo])
  const back = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo])

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next])

  return (
    <div style={{ background: BG, minHeight: "70vh", fontFamily: "'Cinzel', serif", overflow: "hidden" }}>
      {/* Hero carousel */}
      <div style={{ position: "relative", width: "100%", height: "70vh", overflow: "hidden" }}>

        {/* Slides */}
        {SLIDES.map((slide, i) => {
          const isActive = i === current
          const isPrev = i === prev
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: isActive ? 1 : isPrev ? 0 : 0,
                transition: "opacity 0.9s ease",
                zIndex: isActive ? 2 : isPrev ? 1 : 0,
              }}
            />
          )
        })}

        {/* Dark gradient overlays */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "linear-gradient(to bottom, rgba(8,6,4,0.55) 0%, rgba(8,6,4,0.3) 40%, rgba(8,6,4,0.75) 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: "linear-gradient(to right, rgba(8,6,4,0.6) 0%, transparent 60%)",
        }} />

        {/* Ambient crimson glow */}
        <div style={{
          position: "absolute", bottom: "-120px", left: "10%",
          width: "500px", height: "500px", borderRadius: "50%",
          background: `radial-gradient(circle, ${DARK_RED}40 0%, transparent 70%)`,
          zIndex: 3, pointerEvents: "none",
        }} />

        {/* Content */}
        <div style={{
          position: "absolute", inset: 0, zIndex: 4,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 7vw",
        }}>
          

          {/* Slide label */}
          <div style={{ overflow: "hidden" }}>
            <div
              key={`label-${current}`}
              style={{
                color: CREAM,
                fontSize: "clamp(42px, 7vw, 88px)",
                fontFamily: "'Cinzel Decorative', serif",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "0.04em",
                textShadow: `2px 4px 24px rgba(0,0,0,0.9), 0 0 60px ${DARK_RED}60`,
                animation: "slideUp 0.7s cubic-bezier(0.22,1,0.36,1) forwards",
              }}
            >
              {SLIDES[current].label}
            </div>
          </div>

          {/* Sub text */}
          <div
            key={`sub-${current}`}
            style={{
              color: GOLD_LIGHT,
              fontSize: "clamp(12px, 1.4vw, 17px)",
              fontFamily: "'Cinzel', serif",
              fontWeight: 400,
              letterSpacing: "0.22em",
              marginTop: "18px",
              opacity: 0,
              animation: "fadeIn 0.8s 0.3s ease forwards",
            }}
          >
            {SLIDES[current].sub}
          </div>

          {/* Name + rule */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px", marginTop: "40px" }}>
            <div style={{ width: "48px", height: "1px", background: CRIMSON }} />
            <div style={{ color: CRIMSON, fontSize: "11px", letterSpacing: "0.4em" }}>EMMANUEL OLAWALE</div>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={back}
          style={{
            position: "absolute", left: "24px", top: "50%", transform: "translateY(-50%)",
            zIndex: 5, background: "rgba(8,6,4,0.5)", border: `1px solid ${GOLD}44`,
            color: GOLD_LIGHT, width: "48px", height: "48px", borderRadius: "2px",
            cursor: "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = `${DARK_RED}99`
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = CRIMSON
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(8,6,4,0.5)"
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}44`
          }}
        >
          ‹
        </button>
        <button
          onClick={next}
          style={{
            position: "absolute", right: "24px", top: "50%", transform: "translateY(-50%)",
            zIndex: 5, background: "rgba(8,6,4,0.5)", border: `1px solid ${GOLD}44`,
            color: GOLD_LIGHT, width: "48px", height: "48px", borderRadius: "2px",
            cursor: "pointer", fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = `${DARK_RED}99`
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = CRIMSON
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = "rgba(8,6,4,0.5)"
            ;(e.currentTarget as HTMLButtonElement).style.borderColor = `${GOLD}44`
          }}
        >
          ›
        </button>

        {/* Dot indicators */}
        <div style={{
          position: "absolute", bottom: "40px", left: "7vw",
          display: "flex", gap: "10px", zIndex: 5,
        }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? "36px" : "10px",
                height: "3px",
                borderRadius: "2px",
                background: i === current ? GOLD_LIGHT : `${GOLD}44`,
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.4s ease, background 0.3s",
              }}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div style={{
          position: "absolute", bottom: "40px", right: "7vw",
          zIndex: 5, color: `${CREAM}66`, fontSize: "12px", letterSpacing: "0.2em",
        }}>
          {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
      `}</style>
    </div>
  )
}
