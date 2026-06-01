// Centered eyebrow + title + subtitle block used at the top of most sections.
export default function SectionHead({ eyebrow, title, sub }) {
  return (
    <div className="section-head">
      {eyebrow && (
        <span className="eyebrow reveal">
          <span className="dot" /> {eyebrow}
        </span>
      )}
      <h2 className="section-title reveal">{title}</h2>
      {sub && (
        <p className="section-sub reveal" style={{ margin: "0 auto" }}>
          {sub}
        </p>
      )}
    </div>
  );
}
