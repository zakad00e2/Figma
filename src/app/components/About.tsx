import { motion } from "motion/react";
import { useState } from "react";
import { Heart, Award, Users, Shield } from "lucide-react";
import { AboutStoryReveal } from "./AboutStoryReveal";

export function About() {
  const [storyComplete, setStoryComplete] = useState(false);

  return (
    <section data-gsap-reveal id="about" aria-label="من أنا - المدربة ميسم" className="bg-white py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/about-maysam.jpg"
                  alt="المدربة ميسم - استشارية تغذية ومدربة رياضة متخصصة في صحة المرأة"
                  className="w-full h-[650px] object-cover object-top"
                  loading="lazy"
                  decoding="async"
                  width="600"
                  height="650"
                />
              </div>
              <div
                data-about-founder-label
                dir="rtl"
                className="pointer-events-none absolute bottom-4 right-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-base text-stone-800 sm:bottom-5 sm:right-5"
              >
                <span className="size-3 shrink-0 bg-emerald-500 rounded-full animate-pulse motion-reduce:animate-none shadow-[0_0_0_4px_rgba(16,185,129,0.12)]" aria-hidden="true" />
                <span>ابدئي معي الآن</span>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 text-right"
          >
            <div className="flex justify-center lg:justify-end mb-6">
              <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
                <span className="text-sm font-medium">من أنا؟</span>
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl mb-6 text-stone-900">
              <span className="text-black">ميسم خلايلة</span>
            </h2>

            <AboutStoryReveal onComplete={() => setStoryComplete(true)} />


            {/* Credentials */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <motion.div
                data-about-credential
                initial={{ opacity: 0, y: 24 }}
                animate={storyComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: 0, ease: "power2.out" }}
                className="bg-emerald-50 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">ممرضة مختصة بالنشاط البدني</h4>
                    <p className="text-sm text-stone-600">معتمدة ومرخصة</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                data-about-credential
                initial={{ opacity: 0, y: 24 }}
                animate={storyComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: 0.12, ease: "power2.out" }}
                className="bg-pink-50 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">مدربة رياضة معتمدة</h4>
                    <p className="text-sm text-stone-600">تخصص نشاط بدني</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                data-about-credential
                initial={{ opacity: 0, y: 24 }}
                animate={storyComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: 0.24, ease: "power2.out" }}
                className="bg-amber-50 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">مستشارة تغذية</h4>
                    <p className="text-sm text-stone-600">نمط حياة صحي</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                data-about-credential
                initial={{ opacity: 0, y: 24 }}
                animate={storyComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{ duration: 0.45, delay: 0.36, ease: "power2.out" }}
                className="bg-rose-50 p-5 rounded-xl"
              >
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">متخصصة حوامل ومرضعات</h4>
                    <p className="text-sm text-stone-600">رعاية شاملة</p>
                  </div>
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
