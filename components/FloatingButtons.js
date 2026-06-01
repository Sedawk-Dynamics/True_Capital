import Icon from "./Icon";
import { COMPANY } from "@/lib/data";

export default function FloatingButtons() {
  return (
    <div className="floats">
      <a
        href={`https://wa.me/${COMPANY.whatsappIntl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="float-btn float-wa"
        aria-label="Chat on WhatsApp"
      >
        <span className="pulse" />
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.5 14.4c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.3 5.1 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.3A10 10 0 1 0 12 2z" />
        </svg>
      </a>
      <a href={`tel:${COMPANY.phoneIntl}`} className="float-btn float-call" aria-label="Call now">
        <span className="pulse" />
        <Icon name="phone" strokeWidth={2} />
      </a>
    </div>
  );
}
