import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ArrowLeft, Sparkles } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-pink-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #059669 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-right"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">معكِ في كل خطوة</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 text-stone-900 leading-tight">
              رحلتكِ نحو
              <span className="text-emerald-600 block mt-2">حياة صحية متوازنة</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed">
              أنا <span className="text-emerald-600 font-semibold">ميسم</span>، ممرضة استشارية ومدربة متخصصة 
              في مرافقة النساء، خاصة الحوامل والمرضعات، في رحلتهن نحو الصحة والعافية
            </p>

            <div className="flex flex-wrap gap-4 justify-end">
              <Button 
                onClick={() => scrollToSection('consultation')}
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                احجزي استشارة مجانية
                <ArrowLeft className="mr-2 h-5 w-5" />
              </Button>
              
              <Button 
                onClick={() => scrollToSection('about')}
                variant="outline"
                size="lg"
                className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl"
              >
                تعرفي علي أكثر
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 justify-end">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">+500</div>
                <div className="text-sm text-stone-500">عميلة سعيدة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">+10</div>
                <div className="text-sm text-stone-500">سنوات خبرة</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <div className="text-sm text-stone-500">التزام بنجاحك</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1561742139-4b0210a1894d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWFuJTIweW9nYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDMxODIzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="حياة صحية ومتوازنة"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🤰</span>
                </div>
                <div className="text-right">
                  <div className="font-semibold text-stone-900">رعاية متخصصة</div>
                  <div className="text-sm text-stone-500">للحوامل والمرضعات</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
