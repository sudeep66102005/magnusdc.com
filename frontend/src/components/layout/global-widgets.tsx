import { Phone } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";

/**
 * The WhatsApp glyph rather than a generic speech bubble — this is the mark
 * people scan for, so a lookalike icon costs recognition.
 */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.85 9.85 0 0 0 12.04 2Zm0 18.13h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24Zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06a6.73 6.73 0 0 1-1.98-1.22 7.44 7.44 0 0 1-1.37-1.71c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.41-.56-.42h-.48c-.16 0-.43.06-.65.31-.23.25-.87.85-.87 2.07 0 1.23.89 2.41 1.01 2.58.12.16 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.45-.59 1.65-1.17.21-.57.21-1.06.15-1.16-.06-.11-.23-.17-.48-.29Z" />
    </svg>
  );
}

const base =
  "flex items-center justify-center rounded-full text-white shadow-[0_16px_36px_-14px_rgba(20,47,134,0.75)] transition duration-300 hover:-translate-y-1 size-12 sm:size-14";

export function GlobalWidgets() {
  return (
    <div className="fixed bottom-3 left-3 z-40 flex flex-col gap-2.5 sm:bottom-6 sm:left-6 sm:gap-3">
      <a
        href={siteConfig.phone.href}
        className={`${base} bg-[#142F86] hover:bg-[#DA1C29]`}
        aria-label={`Call Clarus Magnus on ${siteConfig.phone.display}`}
        title={`Call ${siteConfig.phone.display}`}
      >
        <Phone className="size-5 sm:size-6" aria-hidden="true" />
      </a>
      <a
        href={siteConfig.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} bg-[#25D366] hover:bg-[#1DA851]`}
        aria-label="Chat with Clarus Magnus on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppGlyph className="size-6 sm:size-7" />
      </a>
    </div>
  );
}
