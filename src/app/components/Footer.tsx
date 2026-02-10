import { Heart, Mail, Phone, MapPin, Instagram } from "lucide-react";

// Custom TikTok Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none"
    className={className}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom WhatsApp Icon
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    stroke="none" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-100 text-stone-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 text-emerald-600">تواصلي معي</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-end">
                <span className="text-stone-600">Soma.kh44@gmail.com</span>
                <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span className="text-stone-600" dir="ltr">+972‭0547031505
</span>
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span className="text-stone-600">فلسطين ، سخنين</span>
                <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 text-emerald-600">روابط سريعة</h4>
            <ul className="space-y-3">
              {[
                { name: "الرئيسية", href: "#" },
                { name: "من أنا", href: "#about" },
                { name: "خدماتي", href: "#services" },
                { name: "شهادات العملاء", href: "#testimonials" },
                { name: "احجزي استشارة", href: "#consultation" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-stone-600 hover:text-emerald-600 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="text-right md:col-span-2">
            <div className="flex items-center gap-2 mb-6 justify-end">
              <div
                className="w-16 h-16 bg-[#059669]"
                style={{
                  maskImage: `url("/623743788_1958175435099315_4051113299859758212_n (1).png")`,
                  maskSize: "contain",
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  WebkitMaskImage: `url("/623743788_1958175435099315_4051113299859758212_n (1).png")`,
                  WebkitMaskSize: "contain",
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                }}
              />
            </div>
            <p className="text-stone-600 leading-relaxed mb-6">
               استشارية تغذية ومدربة رياضة متخصصة 
              في مرافقة النساء، في رحلتهن نحو الصحة والعافية
            </p>
            <div className="flex gap-4 justify-end">
              <a 
                href="https://www.instagram.com/withmaysam/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-sm hover:bg-emerald-600 hover:text-white text-stone-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@maisamkhalailey?_r=1&_t=ZS-93nopbpdQZN" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-sm hover:bg-emerald-600 hover:text-white text-stone-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=972547031505" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white shadow-sm hover:bg-emerald-600 hover:text-white text-stone-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Services List */}
        {/* <div className="border-t border-stone-200 pt-8 mb-8">
          <div className="text-center">
            <h4 className="text-sm font-semibold text-stone-500 mb-4">التخصصات</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "استشارات تمريضية",
                "تدريب رياضي",
                "استشارات تغذوية",
                "رعاية الحوامل",
                "دعم المرضعات",
                "نمط حياة صحي"
              ].map((service, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="border-t border-stone-200 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-stone-500">
            {/* <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-600 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-emerald-600 transition-colors">الشروط والأحكام</a>
            </div> */}
            
            <div className="text-center">
              <p>
                © {currentYear} المدربة ميسم. جميع الحقوق محفوظة.
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
