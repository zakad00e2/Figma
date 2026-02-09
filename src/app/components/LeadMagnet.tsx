import { motion } from "motion/react";
import { useState } from "react";
import { Download, Check, Gift } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

export function LeadMagnet() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("الرجاء إدخال بريدك الإلكتروني");
      return;
    }

    // Simulate submission
    setTimeout(() => {
      setIsSubmitted(true);
      toast.success("تم الإرسال بنجاح! تحقق من بريدك الإلكتروني");
      setEmail("");
    }, 500);
  };

  return (
    <section id="lead-magnet" className="py-24 bg-gradient-to-br from-emerald-600 to-emerald-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            {/* Icon */}
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Gift className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">
              احصلي على كتيبك المجاني
            </h2>
            <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
              "دليل التغذية والنشاط البدني للحامل والمرضع" - كتيب شامل بصيغة PDF يحتوي على نصائح 
              طبية، خطط غذائية، وتمارين آمنة
            </p>

            {!isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border-2 border-white/20">
                    <h3 className="text-2xl mb-6 text-right">: ما ستحصلين عليه في الكتيب </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8 text-right">
                      {[
                        "جداول غذائية يومية",
                        "تمارين آمنة مصورة",
                        "نصائح طبية موثوقة",
                        "وصفات صحية سهلة",
                        "دليل الفيتامينات",
                        "جدول متابعة الوزن"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-3 justify-end">
                          <span className="text-emerald-100">{item}</span>
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-4 h-4 text-emerald-600" />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                      <Button 
                        type="submit"
                        size="lg"
                        className="bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg rounded-xl flex-shrink-0"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        احصلي عليه الآن
                        
                      </Button>
                      <Input
                        type="email"
                        placeholder="أدخلي بريدك الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/90 border-0 text-stone-900 placeholder:text-stone-500 text-lg py-6 rounded-xl text-right flex-1"
                      />
                    </div>

                    <p className="text-sm text-emerald-100 mt-4 text-right">
                      🔒 بياناتك آمنة معنا. لن نشارك بريدك الإلكتروني مع أي طرف ثالث
                    </p>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm p-12 rounded-3xl border-2 border-white/20"
              >
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-3xl mb-4">تم بنجاح! 🎉</h3>
                <p className="text-xl text-emerald-100">
                  تحقق من بريدك الإلكتروني. قد يستغرق الأمر بضع دقائق.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
