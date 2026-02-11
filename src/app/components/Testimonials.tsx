import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  const testimonials = [
    {
      name: "سارة أحمد",
      role: "مهتمة بنمط حياة صحي",
      image: "https://images.unsplash.com/photo-1573858129683-59f4d9c445d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhaW5pbmclMjB3b21hbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDMxODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      text:`كثير مبسوطة من تقدمي هالشهر، كثير مرتاحة بالاكل وحبيت العلاقة الصحية الي بنيتها مع الاكل،
وأكثر من هيك، بتشكرك ع البرنامج الي اعطتيني اياتو، كثير مرتاحة في، ومش حارمة حالي من اشي 
بعد قدامي طريق طويل، بس كثير عم احب التغييرات الي عم تصير، ف شكرًا كثير `,
      rating: 5
    },
    {
      name: "ليلى محمد",
      role: "مهتمة بنمط حياة صحي",
      image: "https://images.unsplash.com/photo-1561742139-4b0210a1894d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFudCUyMHdvbWFuJTIweW9nYSUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDMxODIzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      text: `شكرًا ميسم عتشجيعكك وعالنظام والله كنت فترة طويلة معلقة بنفس الوزن شو ما اعمل ما اشوف غرام واحد ينزل
كثير مبسوطة ان شاء الله بنكمل هيك واعمل ازيد رياضة عشان نزول ازيد`,
      rating: 5
    },
    {
      name: "نور حسين",
      role: "أم مرضعة",
      image: "https://images.unsplash.com/photo-1759173791710-659069f6184f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBiYWJ5JTIwYnJlYXN0ZmVlZGluZyUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDMxODIzM3ww&ixlib=rb-4.1.0&q=80&w=1080",
      text: "مش بس النظام ساعدني، الأكل الصحي والنظيف قلّل السكر والدهون وزاد شرب المي. غير نزول الوزن، الفرق ببشرتي كان واضح جدًا: صارت أنضف، بتتنفس، بلا حبوب ولا احمرار. صرت أوعى أكتر شو يفوت على جسمي وحاسة براحة كبيرة.",
      rating: 5
    },
    {
      name: "هدى عبدالله",
      role: "مهتمة بنمط حياة صحي",
      image: "https://images.unsplash.com/photo-1650562075965-4940a2cfbfe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwbnV0cml0aW9uJTIwZm9vZCUyMHByZWduYW5jeXxlbnwxfHx8fDE3NzAzMTgyMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      text: `كثير مبسوطة الحمدلله وزني تحرك! كنت معلقة حرفيًا سنة كاملة على وزن واحد شو ما اعمل كان صعب ينزل كان في اشي غلط
لما نظمت الوجبات حسب كيف عملتيلي البرنامج فرق معي كثير!! شكرًا كثير كثير`,
      rating: 5
    }
  ];

  return (
    <section id="testimonials" aria-label="شهادات وآراء العملاء" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-pink-100 text-pink-700 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">قصص النجاح</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-stone-900">
            ماذا تقول عميلاتي؟
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            شهادات حقيقية من نساء حوّلن حياتهن نحو الأفضل
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-2 border-stone-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-right">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <Quote className="w-12 h-12 text-emerald-200 ml-auto" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6 justify-end">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-stone-700 text-lg leading-relaxed mb-8">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 justify-end pt-6 border-t border-stone-100">
                    <div className="text-right">
                      <div className="font-semibold text-stone-900">{testimonial.name}</div>
                      <div className="text-sm text-stone-500">{testimonial.role}</div>
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-emerald-100">
                      <img 
                        src={testimonial.image} 
                        alt={`شهادة ${testimonial.name} - ${testimonial.role}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                        width="56"
                        height="56"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-pink-50 via-emerald-50 to-amber-50 rounded-3xl p-12">
            <h3 className="text-3xl mb-4 text-stone-900">انضمي إلى مئات النساء اللواتي غيّرن حياتهن</h3>
            <p className="text-xl text-stone-600 mb-8">
              رحلتك نحو الصحة والعافية تبدأ من هنا
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-12 h-12 rounded-full bg-emerald-600 border-4 border-white flex items-center justify-center text-white text-sm font-semibold">
                    {i + 1}
                  </div>
                ))}
              </div>
              <span className="text-stone-600 mr-4">+500 عميلة سعيدة</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
