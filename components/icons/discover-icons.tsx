import * as React from "react"
import { SVGProps } from "react"
const DiscoverIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={38}
    height={24}
    fill="none"
    aria-labelledby="pi-discover"
    className="icon icon--full-color"
    {...props}
  >
    <title>{"Discover"}</title>
    <path
      fill="#000"
      d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
      opacity={0.07}
    />
    <path
      fill="#fff"
      d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32z"
    />
    <path
      fill="#231F20"
      d="M3.57 7.16H2v5.5h1.57c.83 0 1.43-.2 1.96-.63.63-.52 1-1.3 1-2.11-.01-1.63-1.22-2.76-2.96-2.76zm1.26 4.14c-.34.3-.77.44-1.47.44h-.29V8.1h.29c.69 0 1.11.12 1.47.44.37.33.59.84.59 1.37 0 .53-.22 1.06-.59 1.39zm2.19-4.14h1.07v5.5H7.02v-5.5zm3.69 2.11c-.64-.24-.83-.4-.83-.69 0-.35.34-.61.8-.61.32 0 .59.13.86.45l.56-.73c-.46-.4-1.01-.61-1.62-.61-.97 0-1.72.68-1.72 1.58 0 .76.35 1.15 1.35 1.51.42.15.63.25.74.31.21.14.32.34.32.57 0 .45-.35.78-.83.78-.51 0-.92-.26-1.17-.73l-.69.67c.49.73 1.09 1.05 1.9 1.05 1.11 0 1.9-.74 1.9-1.81.02-.89-.35-1.29-1.57-1.74zm1.92.65c0 1.62 1.27 2.87 2.9 2.87.46 0 .86-.09 1.34-.32v-1.26c-.43.43-.81.6-1.29.6-1.08 0-1.85-.78-1.85-1.9 0-1.06.79-1.89 1.8-1.89.51 0 .9.18 1.34.62V7.38c-.47-.24-.86-.34-1.32-.34-1.61 0-2.92 1.28-2.92 2.88zm12.76.94-1.47-3.7h-1.17l2.33 5.64h.58l2.37-5.64h-1.16l-1.48 3.7zm3.13 1.8h3.04v-.93h-1.97v-1.48h1.9v-.93h-1.9V8.1h1.97v-.94h-3.04v5.5zm7.29-3.87c0-1.03-.71-1.62-1.95-1.62h-1.59v5.5h1.07v-2.21h.14l1.48 2.21h1.32l-1.73-2.32c.81-.17 1.26-.72 1.26-1.56zm-2.16.91h-.31V8.03h.33c.67 0 1.03.28 1.03.82 0 .55-.36.85-1.05.85z"
    />
    <path
      fill="url(#a)"
      d="M20.16 12.86a2.931 2.931 0 1 0 0-5.862 2.931 2.931 0 0 0 0 5.862z"
    />
    <path
      fill="url(#b)"
      d="M20.16 12.86a2.931 2.931 0 1 0 0-5.862 2.931 2.931 0 0 0 0 5.862z"
      opacity={0.65}
    />
    <path
      fill="#231F20"
      d="M36.57 7.506c0-.1-.07-.15-.18-.15h-.16v.48h.12v-.19l.14.19h.14l-.16-.2c.06-.01.1-.06.1-.13zm-.2.07h-.02v-.13h.02c.06 0 .09.02.09.06 0 .05-.03.07-.09.07z"
    />
    <path
      fill="#231F20"
      d="M36.41 7.176c-.23 0-.42.19-.42.42 0 .23.19.42.42.42.23 0 .42-.19.42-.42 0-.23-.19-.42-.42-.42zm0 .77c-.18 0-.34-.15-.34-.35 0-.19.15-.35.34-.35.18 0 .33.16.33.35 0 .19-.15.35-.33.35z"
    />
    <path
      fill="#F48120"
      d="M37 12.984S27.09 19.873 8.976 23h26.023a2 2 0 0 0 2-1.984l.024-3.02L37 12.985z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={21.657}
        x2={19.632}
        y1={12.275}
        y2={9.104}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F89F20" />
        <stop offset={0.25} stopColor="#F79A20" />
        <stop offset={0.533} stopColor="#F68D20" />
        <stop offset={0.62} stopColor="#F58720" />
        <stop offset={0.723} stopColor="#F48120" />
        <stop offset={1} stopColor="#F37521" />
      </linearGradient>
      <linearGradient
        id="b"
        x1={21.338}
        x2={18.378}
        y1={12.232}
        y2={6.446}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F58720" />
        <stop offset={0.359} stopColor="#E16F27" />
        <stop offset={0.703} stopColor="#D4602C" />
        <stop offset={0.982} stopColor="#D05B2E" />
      </linearGradient>
    </defs>
  </svg>
)
export default DiscoverIcon
