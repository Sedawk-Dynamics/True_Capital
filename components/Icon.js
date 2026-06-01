import { ICONS } from "@/lib/data";

// Renders an inline SVG by name. Extra props (width/height/className) pass through.
export default function Icon({ name, strokeWidth = 1.8, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      dangerouslySetInnerHTML={{ __html: ICONS[name] || ICONS.cash }}
      {...props}
    />
  );
}
