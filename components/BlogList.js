"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "./Icon";
import { BLOG } from "@/lib/data";

const headBg = (thumb) =>
  thumb === "t2"
    ? "linear-gradient(135deg,#0b2a6b,#1E5BFF)"
    : thumb === "t3"
    ? "linear-gradient(135deg,#1E5BFF,#7b4fff)"
    : "var(--grad)";

export default function BlogList() {
  const [openIdx, setOpenIdx] = useState(null);
  const post = openIdx !== null ? BLOG[openIdx] : null;

  useEffect(() => {
    if (post) {
      document.body.style.overflow = "hidden";
      const onKey = (e) => e.key === "Escape" && setOpenIdx(null);
      window.addEventListener("keydown", onKey);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", onKey);
      };
    }
  }, [post]);

  return (
    <>
      <div className="grid g-3">
        {BLOG.map((b, i) => (
          <div className="card blog-card reveal" key={i}>
            <div className={`blog-thumb${b.thumb === "t2" ? " t2" : b.thumb === "t3" ? " t3" : ""}`}>
              <Icon name={b.ic} strokeWidth={1.5} />
            </div>
            <div className="blog-body">
              <span className="tag">{b.cat}</span>
              <h3>{b.title}</h3>
              <p>{b.summary}</p>
              <button className="link-more" style={{ marginTop: 16 }} onClick={() => setOpenIdx(i)}>
                Read more <Icon name="arrow" strokeWidth={2} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {post && (
        <div className="modal-overlay" role="dialog" aria-modal="true" onClick={(e) => e.target === e.currentTarget && setOpenIdx(null)}>
          <div className="modal">
            <div className="modal-head" style={{ background: headBg(post.thumb) }}>
              <Icon name={post.ic} strokeWidth={1.6} />
              <button className="modal-close" aria-label="Close" onClick={() => setOpenIdx(null)}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="modal-body">
              <span className="tag">{post.cat}</span>
              <h2 style={{ marginTop: 12 }}>{post.title}</h2>
              <div className="meta">True Capital Insights • {post.cat}</div>
              {post.body.map((p, k) => (
                <p key={k}>{p}</p>
              ))}
              <Link href="/apply" className="btn btn-primary btn-sm" style={{ marginTop: 10 }} onClick={() => setOpenIdx(null)}>
                Talk to an advisor
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
