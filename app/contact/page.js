import Icon from "@/components/Icon";
import SectionHead from "@/components/SectionHead";
import LeadForm from "@/components/LeadForm";
import { COMPANY } from "@/lib/data";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact True Capital & Advisory Pvt Ltd — visit our Haridwar office, call +91 90276 38434, WhatsApp us, or send an online enquiry. Mon–Sat, 9 AM – 6 PM.",
};

export default function ContactPage() {
  const mapSrc =
    "https://www.openstreetmap.org/export/embed.html?bbox=78.1535%2C29.9300%2C78.1735%2C29.9460&layer=mapnik&marker=29.9380%2C78.1635";

  return (
    <div className="section container">
      <SectionHead
        eyebrow="Get in touch"
        title={<>Contact <span className="grad">True Capital</span></>}
        sub="Visit our office, call us, or send an enquiry — we're happy to help."
      />

      <div className="contact-grid">
        {/* info */}
        <div className="contact-info reveal">
          <div className="ci-item">
            <div className="icon-chip"><Icon name="pin" strokeWidth={2} /></div>
            <div><b>Corporate Office</b><p>{COMPANY.address}</p></div>
          </div>
          <div className="ci-item">
            <div className="icon-chip"><Icon name="phone" strokeWidth={2} /></div>
            <div><b>Phone</b><p><a href={`tel:${COMPANY.phoneIntl}`}>+91 90276 38434</a></p></div>
          </div>
          <div className="ci-item">
            <div className="icon-chip"><Icon name="whatsapp" strokeWidth={2} /></div>
            <div><b>WhatsApp</b><p><a href={`https://wa.me/${COMPANY.whatsappIntl}`} target="_blank" rel="noopener noreferrer">+91 97581 89999</a></p></div>
          </div>
          <div className="ci-item">
            <div className="icon-chip"><Icon name="mail" strokeWidth={2} /></div>
            <div><b>Email</b><p><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></p></div>
          </div>
          <div className="ci-item">
            <div className="icon-chip"><Icon name="clock" strokeWidth={2} /></div>
            <div><b>Working Hours</b><p>Monday – Saturday: 9:00 AM – 6:00 PM<br />Sunday: Closed</p></div>
          </div>
          <div className="map-wrap">
            <iframe title="True Capital office location map" loading="lazy" src={mapSrc} />
          </div>
        </div>

        {/* form */}
        <div className="card reveal">
          <h3 style={{ fontSize: 21, marginBottom: 6 }}>Send us an enquiry</h3>
          <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 20 }}>
            Web enquiries route to our enquiries inbox:{" "}
            <a href={`mailto:${COMPANY.email}`} style={{ color: "var(--blue-2)" }}>{COMPANY.email}</a>
          </p>
          <LeadForm
            source="Contact"
            submitLabel="Send Enquiry"
            successTitle="Message sent"
            successMsg="Thank you for reaching out — our team will respond shortly."
            fields={[
              { name: "name", label: "Full Name", validate: "name", placeholder: "Your name", error: "Please enter your name." },
              { name: "mobile", label: "Mobile", validate: "mobile", type: "tel", placeholder: "10-digit mobile", error: "Enter a valid 10-digit mobile." },
              { name: "email", label: "Email", validate: "email", type: "email", placeholder: "you@example.com", full: true, error: "Enter a valid email address." },
              { name: "message", label: "Message", validate: "name", type: "textarea", placeholder: "How can we help you?", full: true, error: "Please enter a message." },
            ]}
          />
          {/* TODO: Auto email notification — POST enquiry to backend / email service (SMTP, SendGrid, AWS SES) */}
        </div>
      </div>
    </div>
  );
}
