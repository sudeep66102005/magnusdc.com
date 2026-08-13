import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";

export function GlobalWidgets() {
  return (
    <a
      href={siteConfig.whatsapp.href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 right-3 z-40 flex size-12 items-center justify-center rounded-full bg-[#142F86] text-white shadow-[0_16px_36px_-14px_rgba(20,47,134,0.8)] transition duration-300 hover:-translate-y-1 hover:bg-[#DA1C29] sm:bottom-6 sm:right-6 sm:h-13 sm:w-auto sm:gap-2.5 sm:px-5"
      aria-label="Chat with Clarus Magnus on WhatsApp"
    >
      <MessageCircle className="size-5" />
      <span className="hidden text-sm font-black sm:inline">Chat with our care team</span>
    </a>
  );
}
