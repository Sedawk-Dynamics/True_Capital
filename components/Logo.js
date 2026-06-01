// SVG monogram: TC shield with an upward growth arrow. `id` keeps gradient defs unique.
export default function Logo({ id = "lg", className = "logo" }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="True Capital logo">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="48" y2="48">
          <stop stopColor="#1E5BFF" />
          <stop offset="1" stopColor="#4F8BFF" />
        </linearGradient>
      </defs>
      <path d="M24 2 6 9v13c0 11 7.6 19.6 18 24 10.4-4.4 18-13 18-24V9L24 2Z" fill={`url(#${id})`} opacity="0.18" />
      <path d="M24 2 6 9v13c0 11 7.6 19.6 18 24 10.4-4.4 18-13 18-24V9L24 2Z" stroke={`url(#${id})`} strokeWidth="2" />
      <path d="M24 30V16M24 14l6 7M24 14l-6 7" stroke={`url(#${id})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
