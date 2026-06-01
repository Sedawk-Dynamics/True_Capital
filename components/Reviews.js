"use client";
import { useState } from "react";
import { useLeads } from "@/lib/LeadContext";
import { validate } from "./LeadForm";
import { TESTIMONIALS, starStr, initials } from "@/lib/data";

function ReviewCard({ r, rating }) {
  return (
    <div className="card reveal">
      <div style={{ color: "#ffc24b", letterSpacing: 2, fontSize: 17, marginBottom: 12 }}>
        {starStr(rating || 5)}
      </div>
      <p style={{ color: "var(--muted)", fontSize: 14.5, marginBottom: 18 }}>&ldquo;{r.q}&rdquo;</p>
      <div className="testi-author" style={{ justifyContent: "flex-start" }}>
        <div className="avatar" style={{ width: 42, height: 42, fontSize: 15 }}>{r.ini}</div>
        <div className="meta" style={{ textAlign: "left" }}>
          <b>{r.n}</b>
          <span>{r.r}</span>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  const { reviews, addReview } = useLeads();
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [values, setValues] = useState({ rname: "", rrole: "", rtext: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const errs = {
      rname: !validate("name", values.rname),
      rtext: !validate("name", values.rtext),
    };
    setErrors(errs);
    if (errs.rname || errs.rtext) return;
    addReview({
      q: values.rtext,
      n: values.rname,
      r: values.rrole || "Customer",
      rating,
      ini: initials(values.rname),
    });
    setValues({ rname: "", rrole: "", rtext: "" });
    setRating(5);
    setToast(true);
    setTimeout(() => setToast(false), 2800);
  };

  const stars = hover || rating;

  return (
    <>
      <div className="grid g-3" style={{ marginBottom: 50 }}>
        {TESTIMONIALS.map((t, i) => (
          <ReviewCard key={"t" + i} r={t} rating={5} />
        ))}
        {reviews.map((t, i) => (
          <ReviewCard key={"s" + i} r={t} rating={t.rating} />
        ))}
      </div>

      <div className="card reveal" style={{ maxWidth: 620, margin: "0 auto" }}>
        <h3 style={{ fontSize: 20, marginBottom: 6 }}>Leave a review</h3>
        <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
          Share your experience with True Capital &amp; Advisory.
        </p>
        <form noValidate onSubmit={submit}>
          <div className="form-grid">
            <div className={`field${errors.rname ? " invalid" : ""}`}>
              <label>Your Name <span className="req">*</span></label>
              <input type="text" placeholder="Name" value={values.rname}
                onChange={(e) => setValues((v) => ({ ...v, rname: e.target.value }))} />
              <span className="err-msg">Please enter your name.</span>
            </div>
            <div className="field">
              <label>City / Role</label>
              <input type="text" placeholder="e.g. Business Owner, Haridwar" value={values.rrole}
                onChange={(e) => setValues((v) => ({ ...v, rrole: e.target.value }))} />
              <span className="err-msg" />
            </div>
            <div className="field full">
              <label>Rating <span className="req">*</span></label>
              <div style={{ fontSize: 30, cursor: "pointer", letterSpacing: 5, userSelect: "none" }}
                onMouseLeave={() => setHover(0)}>
                {[1, 2, 3, 4, 5].map((v) => (
                  <span key={v} data-v={v}
                    style={{ color: v <= stars ? "#ffc24b" : "#3a3d55" }}
                    onMouseEnter={() => setHover(v)}
                    onClick={() => setRating(v)}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <div className={`field full${errors.rtext ? " invalid" : ""}`}>
              <label>Your Review <span className="req">*</span></label>
              <textarea placeholder="Tell us about your experience…" value={values.rtext}
                onChange={(e) => setValues((v) => ({ ...v, rtext: e.target.value }))} />
              <span className="err-msg">Please write a short review.</span>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: 16 }}>
            Submit Review
          </button>
        </form>
      </div>

      {toast && <div className="toast">Thank you! Your review has been added.</div>}
    </>
  );
}
