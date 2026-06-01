"use client";
import { useRef, useState } from "react";
import Icon from "./Icon";

const MAX_SIZE = 5 * 1024 * 1024;
const OK_TYPES = ["application/pdf", "image/jpeg", "image/png", "image/jpg"];

export default function DocumentUpload() {
  const [files, setFiles] = useState([]);
  const [drag, setDrag] = useState(false);
  const inputRef = useRef(null);

  const addFiles = (list) => {
    const next = [];
    [...list].forEach((f) => {
      const okType = OK_TYPES.includes(f.type) || /\.(pdf|jpe?g|png)$/i.test(f.name);
      const okSize = f.size <= MAX_SIZE;
      next.push({
        file: f,
        ok: okType && okSize,
        reason: !okType ? "Unsupported type" : !okSize ? "Exceeds 5 MB" : "",
      });
    });
    // TODO: POST valid files to backend upload endpoint (multipart/form-data). Client-side only here.
    setFiles((cur) => [...cur, ...next]);
    if (inputRef.current) inputRef.current.value = "";
  };

  const onDrop = (e) => {
    e.preventDefault();
    setDrag(false);
    addFiles(e.dataTransfer.files);
  };

  const remove = (i) => setFiles((cur) => cur.filter((_, k) => k !== i));

  return (
    <div className="card reveal">
      <div className="icon-chip"><Icon name="upload" strokeWidth={2} /></div>
      <h3 style={{ fontSize: 19, marginBottom: 6 }}>Upload Documents</h3>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 18 }}>
        PDF, JPG or PNG — up to 5 MB each. (ID proof, income proof, bank statements.)
      </p>

      <div
        className={`dropzone${drag ? " drag" : ""}`}
        tabIndex={0}
        role="button"
        aria-label="Upload documents"
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); inputRef.current?.click(); } }}
        onDragEnter={(e) => { e.preventDefault(); setDrag(true); }}
        onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
        onDragLeave={(e) => { e.preventDefault(); setDrag(false); }}
        onDrop={onDrop}
      >
        <Icon name="upload" strokeWidth={1.6} />
        <b>Drag &amp; drop files here</b>
        <span>or click to browse</span>
        <input ref={inputRef} type="file" multiple accept=".pdf,.jpg,.jpeg,.png" hidden
          onChange={(e) => addFiles(e.target.files)} />
      </div>

      <div className="file-list">
        {files.map((s, i) => (
          <div key={i} className={`file-item${s.ok ? "" : " bad"}`}>
            <span className="fi-ico">
              {s.ok ? (
                <Icon name="file" strokeWidth={2} />
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" />
                </svg>
              )}
            </span>
            <span className="fi-name">
              {s.file.name}{!s.ok && <span style={{ color: "var(--err)" }}> — {s.reason}</span>}
            </span>
            <span className="fi-size">{(s.file.size / 1024 / 1024).toFixed(2)} MB</span>
            <button type="button" className="fi-del" aria-label="Remove" onClick={() => remove(i)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
