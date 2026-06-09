// True Capital brand mark — faithful SVG of the company logo (T monogram +
// ascending growth bars + rising arrow + orbit swoosh). The "navy" parts use
// --logo-navy so the mark stays visible on both light and dark themes; the blue
// accents use the brand blue.
export default function Logo({ id = "lg", className = "logo" }) {
  const navy = "var(--logo-navy)";
  const blue = "#2E7BFF";
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="True Capital & Advisory logo">
      {/* orbit swoosh */}
      <path d="M11 39 C 10 52 22 58 33 56 C 45 54 55 46 56 35" fill="none" stroke={blue} strokeWidth="3.6" strokeLinecap="round" />

      {/* ascending growth bars */}
      <rect x="29.5" y="31" width="5.4" height="15" rx="1.2" fill={navy} />
      <rect x="36.4" y="26" width="5.4" height="20" rx="1.2" fill={blue} />
      <rect x="43.3" y="21" width="5.4" height="25" rx="1.2" fill={navy} />

      {/* T monogram */}
      <path d="M13.5 13 H40.5 L37.8 20 H11.8 Z" fill={navy} />
      <rect x="21" y="13" width="7.2" height="33" rx="1.5" fill={navy} />

      {/* rising arrow */}
      <path d="M30 43 L52.5 16" stroke={blue} strokeWidth="4.6" strokeLinecap="round" />
      <path d="M44 14.4 L54.6 13 L53 23.4" fill="none" stroke={blue} strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
