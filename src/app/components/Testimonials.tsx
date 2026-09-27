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
  const clientPortraits = [
    "/client-portraits/client-1.jpg",
    "/client-portraits/client-2.jpg",
    "/client-portraits/client-3.jpg",
    "/client-portraits/client-4.jpg",
    "/client-portraits/client-5.jpg",
  ];
  const carouselTestimonials = [...testimonials, ...testimonials];

  return (
    <section data-gsap-reveal id="testimonials" aria-label="شهادات وآراء العملاء" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
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
          <h2 className="text-2xl sm:text-3xl md:text-5xl mb-6 text-stone-900">
            ماذا تقول عميلاتي؟
          </h2>
          <p className="text-base sm:text-xl text-stone-600 max-w-3xl mx-auto">
            شهادات حقيقية من نساء حوّلن حياتهن نحو الأفضل
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="testimonial-carousel-edge relative overflow-hidden px-6" aria-label="آراء العملاء المتحركة">
          <div className="testimonial-marquee flex w-max gap-4">
            {carouselTestimonials.map((testimonial, index) => (
              <article
                key={`${testimonial.name}-${index}`}
                aria-hidden={index >= testimonials.length}
                className="w-[min(calc(100vw-6rem),19rem)] sm:w-[min(88vw,23rem)] shrink-0"
              >
                <Card className="h-full border-2 border-stone-100 transition-all duration-300 hover:border-emerald-200 hover:shadow-xl">
                  <CardContent className="flex h-full flex-col p-5 text-right">
                    <div className="mb-3">
                      <Quote className="ml-auto h-8 w-8 text-emerald-200" />
                    </div>

                    <div className="mb-3 flex justify-end gap-1">
                      {[...Array(testimonial.rating)].map((_, ratingIndex) => (
                        <Star key={ratingIndex} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="mb-4 line-clamp-5 text-[15px] leading-6 text-stone-700">{testimonial.text}</p>

                    <div className="mt-auto flex items-center justify-end gap-3 border-t border-stone-100 pt-4">
                      <div className="text-right">
                        <div className="text-sm font-semibold text-stone-900">{testimonial.name}</div>
                        <div className="text-xs text-stone-500">{testimonial.role}</div>
                      </div>
                      <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-emerald-100">
                        <img
                          src={testimonial.image}
                          alt={`شهادة ${testimonial.name} - ${testimonial.role}`}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          decoding="async"
                          width="56"
                          height="56"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </article>
            ))}
          </div>
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 start-0 z-20 w-6 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 end-0 z-20 w-6 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />
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
            <h3 className="text-2xl sm:text-3xl mb-4 text-stone-900">انضمي إلى مئات النساء اللواتي غيّرن حياتهن</h3>
            <p className="text-lg sm:text-xl text-stone-600 mb-8">
              رحلتك نحو الصحة والعافية تبدأ من هنا
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-3 rtl:space-x-reverse" aria-label="صور عميلات سعيدات">
                {clientPortraits.map((src, index) => (
                  <div
                    key={src}
                    className="relative h-12 w-12 rounded-full overflow-hidden bg-emerald-100 shadow-sm"
                    style={{ zIndex: clientPortraits.length - index }}
                  >
                    <img
                      src={src}
                      alt=""
                      className="h-full w-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width="96"
                      height="96"
                    />
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
