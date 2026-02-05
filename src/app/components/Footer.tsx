import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="text-right md:col-span-2">
            <div className="flex items-center gap-2 mb-6 justify-end">
              <h3 className="text-2xl font-bold">المدربة ميسم</h3>
              <Heart className="w-6 h-6 text-emerald-400 fill-emerald-400" />
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              ممرضة استشارية ومدربة متخصصة في النشاط البدني والتغذية، مع تركيز خاص على 
              رعاية النساء الحوامل والمرضعات. رسالتي هي تمكين المرأة من العيش بصحة وحيوية.
            </p>
            <div className="flex gap-4 justify-end">
              <a 
                href="#" 
                className="w-10 h-10 bg-stone-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-stone-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-stone-800 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">روابط سريعة</h4>
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
                    className="text-stone-400 hover:text-emerald-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-right">
            <h4 className="text-lg font-semibold mb-6 text-emerald-400">تواصلي معي</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 justify-end">
                <span className="text-stone-400">info@maysam-health.com</span>
                <Mail className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              </li>
              <li className="flex items-center gap-3 justify-end">
                <span className="text-stone-400" dir="ltr">+966 XX XXX XXXX</span>
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
              </li>
              <li className="flex items-start gap-3 justify-end">
                <span className="text-stone-400">الرياض، المملكة العربية السعودية</span>
                <MapPin className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
              </li>
            </ul>
          </div>
        </div>

        {/* Services List */}
        <div className="border-t border-stone-800 pt-8 mb-8">
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
                  className="px-4 py-2 bg-stone-800 text-stone-400 rounded-full text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
            <div className="flex gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors">سياسة الخصوصية</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">الشروط والأحكام</a>
            </div>
            
            <div className="text-center">
              <p>
                © {currentYear} المدربة ميسم. جميع الحقوق محفوظة.
              </p>
              <p className="text-xs mt-1">
                صُمم بـ <Heart className="w-3 h-3 inline fill-emerald-400 text-emerald-400" /> لصحة المرأة
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
