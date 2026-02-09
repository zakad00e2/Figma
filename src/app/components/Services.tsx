import { motion } from "motion/react";
import { Activity, Apple, Heart, Baby, Dumbbell, Salad, Stethoscope, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function Services() {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "ورشات توعية صحية",
      description: "تعزيز الوعي الصحي وفق ممارسات طبية موثوقة",
      color: "emerald",
      features: [
        "شرح أساسيات نمط الحياة الصحي",
        "ورشات مخصصة حسب الفئة (مرضى السكري، مدربون، أمهات)",
        "مساحة للنقاش وطرح الأسئلة والتفاعل مع المشاركين",
        "تنسيق مع الفريق الطبي"
      ]
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "تدريب رياضي مخصص",
      description: "برامج تدريبية آمنة ومصممة خصيصاً لاحتياجاتك البدنية والصحية",
      color: "pink",
      features: [
        "برامج تدريبية مخصّصة حسب الحالة الصحية",
        "تمارين آمنة لآلام المفاصل والظهر",
        "تحسين القوة والمرونة واللياقة العامة",
        "	دعم الحركة وجودة الحياة اليومية"
      ]
    },
    {
      icon: <Apple className="w-8 h-8" />,
      title: "استشارات تغذوية شاملة",
      description: "خطط تغذية علمية متوازنة تدعم صحتك وصحة طفلك",
      color: "amber",
      features: [
        "خطط غذائية متكاملة",
        "تغذية الحامل الصحية",
        "قائمة تسوق صحية",
        "إدارة الوزن الصحي"
      ]
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "برامج الحوامل والمرضعات",
      description: "رعاية متكاملة تجمع الطب والتغذية والنشاط البدني لصحة الأم والطفل",
      color: "rose",
      features: [
        "مرافقة كاملة خلال الحمل",
        "تحضير للولادة",
        "دعم الرضاعة الطبيعية",
        "استعادة الصحة بعد الولادة"
      ]
    }
  ];

  const colorClasses = {
    emerald: {
      bg: "bg-emerald-50",
      icon: "bg-emerald-600",
      text: "text-emerald-600",
      border: "border-emerald-200"
    },
    pink: {
      bg: "bg-pink-50",
      icon: "bg-pink-600",
      text: "text-pink-600",
      border: "border-pink-200"
    },
    amber: {
      bg: "bg-amber-50",
      icon: "bg-amber-600",
      text: "text-amber-600",
      border: "border-amber-200"
    },
    rose: {
      bg: "bg-rose-50",
      icon: "bg-rose-600",
      text: "text-rose-600",
      border: "border-rose-200"
    }
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-medium">خدماتي</span>
          </div>
          <h2 className="text-4xl md:text-5xl mb-6 text-stone-900">
            كيف أساعدكِ في رحلتك الصحية؟
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            أقدم لكِ نهجاً شاملاً يجمع بين الخبرة الطبية والتدريب الرياضي والتغذية السليمة، 
            مصمم خصيصاً لاحتياجاتك الفريدة
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`h-full border-2 ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
                  <CardHeader className="text-right">
                    <div className={`w-16 h-16 ${colors.icon} rounded-2xl flex items-center justify-center mb-4 ml-auto`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-3">{service.title}</CardTitle>
                    <CardDescription className="text-base text-stone-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-right">
                    <div className={`${colors.bg} p-6 rounded-xl`}>
                      <h4 className="font-semibold text-stone-900 mb-4">: ما تشمله الخدمة</h4>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 justify-end">
                            <span className="text-stone-700">{feature}</span>
                            <div className={`w-2 h-2 ${colors.icon} rounded-full flex-shrink-0`}></div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Why Choose Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-3xl p-12 text-white text-right shadow-2xl">
            <h3 className="text-3xl md:text-4xl mb-8">لماذا تختارينني؟</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl mb-2">نهج علمي مستدام</h4>
                  <p className="text-emerald-100">بناء نمط حياة صحي طويل الأمد بعيدًا عن الحميات المؤقتة</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Stethoscope className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl mb-2">خطط مخصّصة</h4>
                  <p className="text-emerald-100">برامج مصمّمة حسب احتياجاتك وظروفك الشخصية</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
              </div>

              <div className="flex items-start gap-4 justify-end">
                <div className="text-right">
                  <h4 className="text-xl mb-2">دعم مستمر</h4>
                  <p className="text-emerald-100">متابعة وإشراف خطوة بخطوة لضمان أفضل النتائج</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
