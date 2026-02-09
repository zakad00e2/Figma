import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Heart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
   
    
    
    { name: "شهادات العملاء", id: "testimonials" },
    { name: "الكتيب المجاني", id: "lead-magnet" },
    { name: "خدماتي", id: "services" },
    { name: "من أنا", id: "about" },
     { name: "الرئيسية", href: "#" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-10 md:px-20"> 
        <div className="flex items-center justify-between h-20">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-stone-900"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* CTA Button - Left */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("consultation")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
            >
              احجزي استشارة مجانية
            </Button>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => link.id ? scrollToSection(link.id) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`transition-colors ${
                  isScrolled 
                    ? "text-stone-700 hover:text-emerald-600" 
                    : "text-stone-900 hover:text-emerald-600"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Logo - Right */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2"
          >
            {/* <span className={`text-xl font-bold transition-colors ${
              isScrolled ? "text-stone-900" : "text-stone-900"
            }`}>
              المدربة ميسم
            </span> */}
            {/* <Heart className="w-6 h-6 text-emerald-600 fill-emerald-600" /> */}
            <img className="w-12 h-12 object-contain" src="public/623743788_1958175435099315_4051113299859758212_n (1).png" alt="" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-stone-200"
        >
          <div className="container mx-auto px-4 py-6 space-y-4">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => link.id ? scrollToSection(link.id) : window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block w-full text-right text-stone-700 hover:text-emerald-600 py-2 transition-colors"
              >
                {link.name}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("consultation")}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl"
            >
              احجزي استشارة مجانية
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
