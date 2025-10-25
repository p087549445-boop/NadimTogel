import { MessageCircle, Send } from "lucide-react";
import { SiWhatsapp, SiTelegram, SiInstagram, SiFacebook } from "react-icons/si";
import Footer from "@/components/Footer";

interface ContactButton {
  id: string;
  label: string;
  icon: React.ReactNode;
  url: string;
}

const contactButtons: ContactButton[] = [
  {
    id: 'livechat',
    label: 'Live Chat',
    icon: <MessageCircle className="h-6 w-6" />,
    url: '#'
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    icon: <SiWhatsapp className="h-6 w-6" />,
    url: 'https://wa.me/'
  },
  {
    id: 'telegram',
    label: 'Telegram',
    icon: <Send className="h-6 w-6" />,
    url: 'https://t.me/'
  },
  {
    id: 'instagram',
    label: 'Instagram',
    icon: <SiInstagram className="h-6 w-6" />,
    url: 'https://instagram.com/'
  },
  {
    id: 'facebook',
    label: 'Facebook',
    icon: <SiFacebook className="h-6 w-6" />,
    url: 'https://facebook.com/'
  },
];

export default function ContactSection() {
  return (
    <div>
      {/* Contact Title */}
      <div className="bg-muted px-4 py-4">
        <h1 className="text-2xl font-bold" data-testid="text-contact-title">Kontak</h1>
      </div>

      {/* Contact Buttons */}
      <div className="px-4 mt-6">
        <div className="grid grid-cols-2 gap-3">
          {contactButtons.map((button) => (
            <a
              key={button.id}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`h-11 rounded-md border-2 border-primary bg-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover-elevate active-elevate-2 transition-all shadow-[inset_0_0_0_2px_black] ${
                button.id === 'facebook' ? 'col-span-2' : ''
              }`}
              data-testid={`button-contact-${button.id}`}
            >
              {button.icon}
              <span>{button.label}</span>
            </a>
          ))}
        </div>

        {/* Contact Info Text */}
        <div className="mt-6 text-center space-y-3">
          <p className="text-sm text-muted-foreground leading-relaxed" data-testid="text-contact-info">
            Hubungi kami melalui platform favorit Anda<br />
            Tersedia Live Chat, WhatsApp, Telegram, Instagram, dan Facebook
          </p>
          <p className="text-sm font-semibold text-foreground" data-testid="text-contact-support">
            Kami siap membantu Anda 24 Jam
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
