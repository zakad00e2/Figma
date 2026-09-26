import { motion } from "motion/react";
import { useState } from "react";
import { Calendar, Send, CheckCircle2, Loader2, MessageCircle, ClipboardList, Target } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import emailjs from "@emailjs/browser";

export function Consultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredDate: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("الرجاء ملء جميع الحقول المطلوبة");
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      // Get them from: https://dashboard.emailjs.com/admin
      const SERVICE_ID = "service_wd74yvd";
      const TEMPLATE_ID = "template_ai41ffb";
      const PUBLIC_KEY = "rtIJZZgv3Y-kEVttE";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          to_name: "ميسم", // Name of the person receiving the email
          
          // المتغيرات لملء حقول القالب بناءً على الصورة
          name: formData.name,       // For {{name}} in Subject/From Name
          email: formData.email,     // For {{email}} in Reply To
          
          from_name: formData.name,  // Fallback
          from_email: formData.email,// Fallback
          
          phone: formData.phone,     // For {{phone}}
          message: formData.message, // For {{message}}
          preferred_date: formData.preferredDate,
        },
        PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast.success("تم إرسال طلبك بنجاح! سنتواصل معك قريباً");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        preferredDate: ""
      });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      const errorMessage = error?.text || error?.message || "حدث خطأ غير معروف";
      toast.error(`حدث خطأ أثناء الإرسال: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section data-gsap-reveal id="consultation" aria-label="حجز استشارة مجانية" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            {!isSubmitted ? (
              <Card className="border-2 border-emerald-100 shadow-xl">
                <CardHeader className="text-right bg-gradient-to-br from-emerald-50 to-white">
                  <CardTitle className="text-2xl flex items-center gap-3 justify-end">
                    <span>نموذج حجز الاستشارة</span>
                    <Calendar className="w-6 h-6 text-emerald-600" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2 text-right">
                      <Label htmlFor="name" className="justify-end">* الاسم الكامل </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="أدخلي اسمك الكامل"
                        className="text-right  border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="email" className="justify-end">* البريد الإلكتروني </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                        className="text-right  border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="phone" className="justify-end">* رقم الهاتف </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+966 XX XXX XXXX"
                        className="text-right border-gray-300"
                        required
                      />
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="preferredDate" className="justify-end">الموعد المفضل (اختياري)</Label>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="text-right border-gray-300"
                      />
                    </div>

                    <div className="space-y-2 text-right">
                      <Label htmlFor="message" className="justify-end">رسالتك (اختياري)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="... أخبرينا عن أهدافك الصحية أو أي استفسارات لديك"
                        className="text-right min-h-[120px] border-gray-300"
                        rows={5}
                      />
                    </div>

                    <Button 
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-6 text-lg rounded-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          جاري الإرسال...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          إرسال الطلب
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-emerald-500 shadow-xl">
                <CardContent className="p-12 py-24 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", duration: 0.5 }}
                    className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-600" />
                  </motion.div>

                  <h3 className="text-3xl mb-4 text-stone-900">تم استلام طلبك!</h3>
                  <p className="text-xl text-stone-600 mb-6">
                    شكراً لثقتك. سنتواصل معك خلال 24 ساعة لتأكيد موعد الاستشارة.
                  </p>

                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                  >
                    إرسال طلب آخر
                  </Button>
                </CardContent>
              </Card>
            )}
          </motion.div>

          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-right order-1 lg:order-2"
          >
            <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-medium">احجزي استشارتك</span>
            </div>

            <h2 className="text-3xl md:text-5xl mb-6 text-stone-900">
              ابدئي رحلتك نحو حياة صحية اليوم
            </h2>

                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  احجزي استشارة مجانية مدتها 15 دقيقة لمناقشة أهدافك الصحية وكيف يمكنني مساعدتك
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "استشارة شخصية مجانية",
                      description: "جلسة مدتها 15 دقيقة لفهم احتياجاتك وأهدافك",
                      Icon: MessageCircle,
                      background: "bg-rose-100",
                      icon: "text-rose-600",
                    },
                    {
                      title: "تقييم صحي أولي",
                      description: "تقييم شامل لحالتك الصحية ونمط حياتك الحالي",
                      Icon: ClipboardList,
                      background: "bg-sky-100",
                      icon: "text-sky-600",
                    },
                    {
                      title: "خطة عمل واضحة",
                      description: "توصيات مبدئية وخطة طريق لتحقيق أهدافك",
                      Icon: Target,
                      background: "bg-amber-100",
                      icon: "text-amber-600",
                    },
                  ].map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-start justify-end gap-4"
                    >
                      <div className="text-right">
                        <h4 className="mb-1 text-lg font-medium text-stone-900">{benefit.title}</h4>
                        <p className="text-stone-600">{benefit.description}</p>
                      </div>
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${benefit.background}`}>
                        <benefit.Icon className={`h-6 w-6 ${benefit.icon}`} strokeWidth={1.8} aria-hidden="true" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                  </motion.div>
        </div>
      </div>
    </section>
  );
}
