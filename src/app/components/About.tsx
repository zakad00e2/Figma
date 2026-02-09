import { motion } from "motion/react";
import { Heart, Award, Users, Shield } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4">
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
                  src="/1a262b63-2643-4899-a27f-de0edb57658e.jpg"
                  alt="المدربة ميسم"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-emerald-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>
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
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">من أنا؟</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 text-stone-900">
              مرحباً، أنا <span className="text-emerald-600">ميسم</span>
            </h2>

            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              ممرضة مختصّة في النشاط البدني والصحة، أقدّم استشارات رياضية مخصّصة للأشخاص الذين يعانون من مشكلات صحية، بهدف تحسين جودة حياتهم بأمان وفعالية. كما أعمل كمستشارة تغذية ونمط حياة صحي قائمة على أسس علمية.
              أقدّم إرشادًا غذائيًا للحوامل والمرضعات بما يتناسب مع احتياجاتهن الصحية في مختلف المراحل، مع خبرة عملية تتجاوز ثلاث سنوات في هذا المجال، وأسعى دائمًا لتقديم دعم موثوق ومتكامل  </p>
            {/* <p className="text-lg text-stone-600 leading-relaxed mb-8">
         أقدّم إرشادًا غذائيًا علميًا للحوامل والمرضعات، بما يتناسب مع احتياجاتهن الصحية في مختلف المراحل، مع مراعاة التغيّرات الجسدية والهرمونية لضمان صحة الأم والطفل. أمتلك خبرة عملية في هذا المجال لأكثر من ثلاث سنوات، وأسعى دائمًا لتقديم دعم موثوق ومبني على المعرفة الطبية.
            </p> */}
            <p className="text-lg text-stone-600 leading-relaxed mb-8">
              بدأت رحلتي من شغفي العميق بتمكين النساء من العيش بصحة وحيوية. أؤمن أن كل امرأة تستحق دعمًا شاملًا خلال أهم مراحل حياتها — من الحمل والرضاعة، إلى بناء نمط حياة صحي ومستدام يعزّز التوازن الجسدي والنفسي.
            </p>


            {/* Credentials */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-emerald-50 p-5 rounded-xl border-r-4 border-emerald-500">
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">ممرضة مختصة بالنشاط البدني</h4>
                    <p className="text-sm text-stone-600">معتمدة ومرخصة</p>
                  </div>
                  <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-pink-50 p-5 rounded-xl border-r-4 border-pink-500">
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">مدربة رياضة معتمدة</h4>
                    <p className="text-sm text-stone-600">تخصص نشاط بدني</p>
                  </div>
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-5 rounded-xl border-r-4 border-amber-500">
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">مستشارة تغذية</h4>
                    <p className="text-sm text-stone-600">نمط حياة صحي</p>
                  </div>
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-5 rounded-xl border-r-4 border-rose-500">
                <div className="flex items-center gap-3 justify-end">
                  <div className="text-right">
                    <h4 className="font-semibold text-stone-900">متخصصة حوامل ومرضعات</h4>
                    <p className="text-sm text-stone-600">رعاية شاملة</p>
                  </div>
                  <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-l from-emerald-50 to-transparent p-6 rounded-2xl border-r-4 border-emerald-500">
              <p className="text-lg text-stone-700 italic text-right">
                رسالتي هي أن أكون معكِ في كل خطوة من رحلتكِ، أن أوفر لكِ الدعم المهني والعاطفي،
                وأن أساعدكِ على اكتشاف قوتكِ الداخلية وتحقيق أهدافكِ الصحية
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
