"use client";
import { createContext, useContext, useState, useCallback } from "react";

const LeadContext = createContext(null);

function nowStr() {
  const d = new Date();
  return d.toLocaleString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    day: "2-digit",
    month: "short",
  });
}

export function LeadProvider({ children }) {
  // Session-only store (resets on refresh) — replace with a real CRM/API in production.
  const [leads, setLeads] = useState([]);
  const [reviews, setReviews] = useState([]);

  const addLead = useCallback((lead) => {
    setLeads((ls) => {
      const id = (ls[0]?.id || 0) + 1;
      return [{ id, time: nowStr(), status: "new", ...lead }, ...ls];
    });
    // TODO: send lead to CRM / webhook
    //   fetch('YOUR_CRM_WEBHOOK_URL', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(lead) });
    // TODO: Google Ads conversion -> gtag('event','conversion',{ send_to:'AW-XXXX/XXXX' });
    // TODO: Meta Pixel -> fbq('track','Lead');
  }, []);

  const addReview = useCallback((review) => {
    setReviews((rs) => [review, ...rs]);
  }, []);

  return (
    <LeadContext.Provider value={{ leads, addLead, reviews, addReview }}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLeads() {
  const ctx = useContext(LeadContext);
  if (!ctx) throw new Error("useLeads must be used within <LeadProvider>");
  return ctx;
}
