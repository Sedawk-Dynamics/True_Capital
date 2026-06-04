"use client";
import Icon from "@/components/Icon";
import { useLeads } from "@/lib/LeadContext";

export default function AdminDashboard() {
  const { leads } = useLeads();

  const stats = [
    ["Total Leads", leads.length],
    ["Applications", leads.filter((l) => l.source === "Loan Application").length],
    ["Callbacks", leads.filter((l) => l.source === "Home Callback").length],
    ["Enquiries", leads.filter((l) => l.source === "Contact").length],
    ["CIBIL Checks", leads.filter((l) => l.source === "CIBIL Check").length],
    ["DSA Signups", leads.filter((l) => l.source === "DSA Registration").length],
  ];

  return (
    <div className="section container">
      <div style={{ marginBottom: 30 }}>
        <span className="eyebrow"><span className="dot" /> Internal demo</span>
        <h2 className="section-title">Admin <span className="grad">Dashboard</span></h2>
      </div>

      <div className="admin-note">
        <Icon name="alert" strokeWidth={2} />
        <span>
          This is a <b>session-only demo</b>. It displays leads/applications captured during the current browser
          session. A persistent CRM &amp; admin backend is pending integration — see the commented hooks in{" "}
          <code>lib/LeadContext.js</code> (<code>{`// TODO: send lead to CRM / webhook`}</code>).
        </span>
      </div>

      <div className="admin-stats">
        {stats.map(([label, n]) => (
          <div className="admin-stat" key={label}>
            <div className="n">{n}</div>
            <div className="l">{label}</div>
          </div>
        ))}
      </div>

      {leads.length === 0 ? (
        <div className="empty-state">
          <Icon name="file" strokeWidth={1.5} />
          <p>
            No leads captured yet this session.
            <br />
            Submit the Apply or Contact form to see it appear here.
          </p>
        </div>
      ) : (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th><th>Time</th><th>Name</th><th>Mobile</th>
                <th>Source</th><th>Loan Type</th><th>Amount</th><th>Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id}>
                  <td>{l.id}</td>
                  <td>{l.time}</td>
                  <td>{l.name}</td>
                  <td>{l.mobile}</td>
                  <td>{l.source}</td>
                  <td>{l.loanType}</td>
                  <td>{l.amount}</td>
                  <td><span className={`status ${l.status}`}>{l.status[0].toUpperCase() + l.status.slice(1)}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
