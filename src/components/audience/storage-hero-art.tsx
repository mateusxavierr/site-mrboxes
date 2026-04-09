/** Ilustração estilizada: corredor de boxes self-storage (amarelo + preto, marca) */
export function StorageHeroArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 220"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="doorY" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffcc00" />
          <stop offset="100%" stopColor="#e6b800" />
        </linearGradient>
        <linearGradient id="floor" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1c1917" stopOpacity="0.06" />
          <stop offset="50%" stopColor="#1c1917" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#1c1917" stopOpacity="0.06" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="#fffef5" rx="12" />
      <path d="M0 175 L400 175 L400 220 L0 220 Z" fill="url(#floor)" />
      {/* Box 1 */}
      <rect x="28" y="48" width="72" height="120" rx="4" fill="#1c1917" />
      <rect x="34" y="54" width="60" height="108" rx="2" fill="url(#doorY)" stroke="#1c1917" strokeWidth="3" />
      <rect x="58" y="118" width="12" height="8" rx="1" fill="#1c1917" />
      {/* Box 2 */}
      <rect x="118" y="38" width="82" height="130" rx="4" fill="#1c1917" />
      <rect x="125" y="45" width="68" height="116" rx="2" fill="url(#doorY)" stroke="#1c1917" strokeWidth="3" />
      <rect x="152" y="128" width="14" height="9" rx="1" fill="#1c1917" />
      {/* Box 3 */}
      <rect x="218" y="52" width="72" height="116" rx="4" fill="#1c1917" />
      <rect x="224" y="58" width="60" height="104" rx="2" fill="#fff9e0" stroke="#1c1917" strokeWidth="3" />
      <line x1="254" y1="58" x2="254" y2="162" stroke="#1c1917" strokeWidth="2" />
      <rect x="246" y="118" width="12" height="8" rx="1" fill="#1c1917" />
      {/* Box 4 */}
      <rect x="308" y="42" width="68" height="126" rx="4" fill="#1c1917" />
      <rect x="314" y="48" width="56" height="114" rx="2" fill="url(#doorY)" stroke="#1c1917" strokeWidth="3" />
      <rect x="334" y="122" width="12" height="8" rx="1" fill="#1c1917" />
    </svg>
  );
}
