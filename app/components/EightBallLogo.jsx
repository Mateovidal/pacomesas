export default function EightBallLogo({ size = 32 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Paco Mesas logo"
    >
      <circle cx="20" cy="20" r="19" fill="#111" stroke="#d4a043" strokeWidth="1.5" />
      <ellipse cx="14" cy="13" rx="6" ry="5" fill="rgba(255,255,255,0.08)" />
      <circle cx="20" cy="20" r="9.5" fill="#f5f0e8" />
      <text
        x="20"
        y="25.5"
        textAnchor="middle"
        fontFamily="DM Serif Display, Georgia, serif"
        fontSize="16"
        fontWeight="700"
        fill="#060606"
      >
        8
      </text>
    </svg>
  );
}
