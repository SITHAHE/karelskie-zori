// Набор тонких линейных SVG-иконок (24x24, stroke). Никаких emoji.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export const IconLeaf = (p) => (
  <svg {...base} {...p}>
    <path d="M11 20A7 7 0 0 1 4 13C4 8 8 4 18 4c0 10-4 14-9 14Z" />
    <path d="M11 20c0-5 2-9 6-12" />
  </svg>
)

export const IconSauna = (p) => (
  <svg {...base} {...p}>
    <path d="M3 21h18" />
    <path d="M5 21V10l7-5 7 5v11" />
    <path d="M9 13c0-1 1-1.5 1-2.5S9 9 9 8" />
    <path d="M13 13c0-1 1-1.5 1-2.5S13 9 13 8" />
  </svg>
)

export const IconFish = (p) => (
  <svg {...base} {...p}>
    <path d="M16.5 12c-2.5 3.5-6.5 5-11 5 1.2-2 1.2-8 0-10 4.5 0 8.5 1.5 11 5Z" />
    <path d="M16.5 12c1.5-1 3-1.5 4.5-1.5-.8 1-.8 2 0 3-1.5 0-3-.5-4.5-1.5Z" />
    <circle cx="8" cy="10.5" r="0.6" fill="currentColor" />
  </svg>
)

export const IconBoat = (p) => (
  <svg {...base} {...p}>
    <path d="M3 16h18l-2 4H5l-2-4Z" />
    <path d="M5 16 7 7h7l4 9" />
    <path d="M11 7V4" />
  </svg>
)

export const IconSnow = (p) => (
  <svg {...base} {...p}>
    <path d="M12 2v20M2 12h20" />
    <path d="m5 5 14 14M19 5 5 19" />
    <path d="M12 6 9.5 4M12 6l2.5-2M12 18l-2.5 2M12 18l2.5 2" />
  </svg>
)

export const IconFlame = (p) => (
  <svg {...base} {...p}>
    <path d="M12 22c4 0 6-2.7 6-6 0-3-2-5-3-7-1 1.5-2 2-3 2 0-2 0-4-3-6 .5 4-3 5-3 9 0 4 2 8 6 8Z" />
  </svg>
)

export const IconWifi = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12.5a10 10 0 0 1 14 0" />
    <path d="M8 15.5a6 6 0 0 1 8 0" />
    <circle cx="12" cy="19" r="0.8" fill="currentColor" />
  </svg>
)

export const IconHome = (p) => (
  <svg {...base} {...p}>
    <path d="M4 11 12 4l8 7" />
    <path d="M6 10v10h12V10" />
    <path d="M10 20v-5h4v5" />
  </svg>
)

export const IconUsers = (p) => (
  <svg {...base} {...p}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20c0-3 3-5 6-5s6 2 6 5" />
    <path d="M16 6a3 3 0 0 1 0 6M21 20c0-2.5-1.5-4-4-4.5" />
  </svg>
)

export const IconArea = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="3" width="18" height="18" rx="1.5" />
    <path d="M3 9h4M3 15h4M9 3v4M15 3v4" />
  </svg>
)

export const IconPin = (p) => (
  <svg {...base} {...p}>
    <path d="M12 21c4-4 7-7.5 7-11a7 7 0 1 0-14 0c0 3.5 3 7 7 11Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
)

export const IconPhone = (p) => (
  <svg {...base} {...p}>
    <path d="M5 3h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2Z" />
  </svg>
)

export const IconMail = (p) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
)

export const IconArrow = (p) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

export const IconStar = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M12 3l2.6 5.3 5.8.8-4.2 4.1 1 5.8L12 16.9 6.8 19l1-5.8L3.6 9.1l5.8-.8L12 3Z" />
  </svg>
)

export const IconQuote = (p) => (
  <svg {...base} fill="currentColor" stroke="none" {...p}>
    <path d="M7 7h5v6c0 2.5-1.7 4.3-4.5 5l-.7-1.6C8.4 15.8 9.2 14.9 9.4 14H7V7Zm9 0h5v6c0 2.5-1.7 4.3-4.5 5l-.7-1.6c1.6-.6 2.4-1.5 2.6-2.4H16V7Z" />
  </svg>
)

export const IconVK = (p) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M6.79 7.3H4.05c.13 6.24 3.25 9.99 8.72 9.99h.31v-3.57c2.01.2 3.53 1.67 4.14 3.57h2.84c-.78-2.84-2.83-4.41-4.11-5.01 1.28-.74 3.08-2.54 3.51-4.98h-2.58c-.56 1.98-2.22 3.78-3.8 3.95V7.3H10.5v6.92c-1.6-.4-3.62-2.34-3.71-6.92Z" />
  </svg>
)

export const IconBerry = (p) => (
  <svg {...base} {...p}>
    <path d="M12 7c0-2 1.5-3 3-3M12 7c0-2-1.5-3-3-3" />
    <circle cx="9.5" cy="13" r="3.2" />
    <circle cx="14.5" cy="13" r="3.2" />
    <path d="M12 8v2.5" />
  </svg>
)
