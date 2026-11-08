import Link from "next/link";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Catalog", href: "/catalog" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-white/5 px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="text-2xl font-black text-white tracking-tight mb-3">LP.</div>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Independent Web Developer &amp; UI/UX Designer based in the Philippines.
              Building digital products that make business easier.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) =>
                link.href.startsWith("/") ? (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">
              Connect
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "LinkedIn", href: "#" },
                { label: "GitHub", href: "#" },
                { label: "Behance", href: "#" },
                { label: "Email", href: "mailto:hello@lyannapadillo.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 bg-gray-600 rounded-full" />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-gray-600 uppercase tracking-widest">
            Independent Web Developer &amp; UI/UX Designer · Philippines
          </p>
          <p className="text-[11px] text-gray-600">
            © 2026 LP. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
