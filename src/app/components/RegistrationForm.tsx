import React, { useState } from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AnimatePresence, motion } from 'motion/react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const WHATSAPP_NUMBER = "972508024998"; // ضَع الرقم هنا بدون علامة زائد، مثال: 966500000000

function YesNoQuestion({
  id,
  label,
  valueKey,
  detailsKey,
  formData,
  handleChange,
  handleRadioChange,
  preventRadioFocus,
  detailsLabel = "يرجى ذكرها فيما يلي:",
}: any) {
  const value = formData[valueKey as keyof typeof formData];

  return (
    <div className="space-y-3 mb-6 border-b border-gray-200 pb-4">
      <Label className="text-base font-semibold text-gray-800">{label}</Label>
      <div className="flex gap-3">
        <label
          className="flex-1 relative cursor-pointer"
          htmlFor={`${id}-yes`}
          onMouseDown={preventRadioFocus}
          onClick={(e) => {
            e.preventDefault();
            handleRadioChange(valueKey, 'نعم');
          }}
        >
          <input
            type="radio"
            id={`${id}-yes`}
            name={id}
            value="نعم"
            checked={value === 'نعم'}
            onChange={(e) => handleRadioChange(valueKey, e.target.value)}
            className="peer sr-only"
            tabIndex={-1}
          />
          <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 peer-checked:border-stone-400 peer-checked:bg-stone-100 peer-checked:text-stone-800 transition-all font-medium">
            نعم
          </div>
        </label>

        <label
          className="flex-1 relative cursor-pointer"
          htmlFor={`${id}-no`}
          onMouseDown={preventRadioFocus}
          onClick={(e) => {
            e.preventDefault();
            handleRadioChange(valueKey, 'لا');
          }}
        >
          <input
            type="radio"
            id={`${id}-no`}
            name={id}
            value="لا"
            checked={value === 'لا'}
            onChange={(e) => handleRadioChange(valueKey, e.target.value)}
            className="peer sr-only"
            tabIndex={-1}
          />
          <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 peer-checked:border-slate-400 peer-checked:bg-slate-100 peer-checked:text-slate-800 transition-all font-medium">
            لا
          </div>
        </label>
      </div>

      <AnimatePresence initial={false}>
        {value === 'نعم' && (
          <motion.div
            key={`${id}-details`}
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3">
              <Label htmlFor={detailsKey} className="text-sm text-gray-600 mb-1 block">{detailsLabel}</Label>
              <Textarea
                id={detailsKey}
                name={detailsKey}
                value={formData[detailsKey as keyof typeof formData]}
                onChange={handleChange}
                placeholder="يرجى كتابة التفاصيل هنا..."
                className="w-full border border-gray-300 focus-visible:ring-primary/15 min-h-[100px]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    height: '',
    weight: '',
    gender: 'ذكر',
    goal: 'اكتساب وزن',
    
    // Health Questions
    q1: '', q1Details: '',
    q2: '', q2Details: '',
    q3: '', q3Details: '',
    q4: '', q4Details: '',
    q5: '', q5Details: '',
    q6: '', q6Details: '',
    
    // Sports
    q10: '', q10Details: '',
    
    // Food
    q11: '', q11Like: '', q11Dislike: '',
    
    // Routine
    wakeTime: '',
    sleepTime: '',
    breakfastTime: '',
    lunchTime: '',
    dinnerTime: '',
    
    // Female specific
    femalePeriods: '',
    femalePregnancy: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const preventRadioFocus = (e: React.MouseEvent<HTMLLabelElement>) => {
    e.preventDefault();
  };

  const buildWhatsAppMessage = () => {
    const {
      name, phone, age, height, weight, gender, goal,
      q1, q1Details, q2, q2Details, q3, q3Details,
      q4, q4Details, q5, q5Details, q6, q6Details,
      q10, q10Details, q11, q11Like, q11Dislike,
      wakeTime, sleepTime, breakfastTime, lunchTime, dinnerTime,
      femalePeriods, femalePregnancy
    } = formData;

    let message = `*طلب تسجيل جديد*\n\n`;
    
    message += `*البيانات الأساسية:*\n`;
    message += `- الاسم: ${name}\n`;
    message += `- رقم الهاتف: ${phone}\n`;
    message += `- العمر: ${age}\n`;
    message += `- الطول: ${height}\n`;
    message += `- الوزن: ${weight}\n`;
    message += `- الجنس: ${gender}\n`;
    message += `- الهدف: ${goal}\n\n`;

    message += `*الحالة الصحية:*\n`;
    message += `1) أمراض حالية أو مزمنة أو إعاقات: ${q1}\n` + (q1 === 'نعم' ? `التفاصيل: ${q1Details}\n` : '');
    message += `2) عمليات جراحية سابقة: ${q2}\n` + (q2 === 'نعم' ? `التفاصيل: ${q2Details}\n` : '');
    message += `3) مشاكل في الجهاز الهضمي: ${q3}\n` + (q3 === 'نعم' ? `التفاصيل: ${q3Details}\n` : '');
    message += `4) أدوية أو مكملات: ${q4}\n` + (q4 === 'نعم' ? `التفاصيل: ${q4Details}\n` : '');
    message += `5) بروتين بودر أو مكمل غذائي: ${q5}\n` + (q5 === 'نعم' ? `التفاصيل: ${q5Details}\n` : '');
    message += `6) حساسية أو عدم تحمل للطعام: ${q6}\n` + (q6 === 'نعم' ? `التفاصيل: ${q6Details}\n\n` : '\n');

    message += `*النشاط البدني:*\n`;
    message += `10) هل تمارس رياضة: ${q10}\n` + (q10 === 'نعم' ? `التفاصيل: ${q10Details}\n\n` : '\n');

    message += `*التفضيلات الغذائية:*\n`;
    message += `11) هل لديك تفضيلات غذائية: ${q11}\n`;
    if (q11 === 'نعم') {
      message += `تفضلها: ${q11Like}\n`;
      message += `لا تفضلها: ${q11Dislike}\n`;
    }
    message += '\n';

    message += `*الروتين اليومي:*\n`;
    message += `- وقت الاستيقاظ: ${wakeTime}\n`;
    message += `- وقت النوم: ${sleepTime}\n`;
    message += `- وقت الفطور: ${breakfastTime}\n`;
    message += `- وقت الغداء: ${lunchTime}\n`;
    message += `- وقت العشاء: ${dinnerTime}\n\n`;

    if (gender === 'أنثى') {
      message += `*معلومات إضافية للإناث:*\n`;
      message += `- انتظام الدورة الشهرية: ${femalePeriods}\n`;
      message += `- حمل أو رضاعة: ${femalePregnancy}\n`;
    }

    return encodeURIComponent(message);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.phone || !formData.age) {
      alert("الرجاء تعبئة البيانات الأساسية المطلوبة.");
      return;
    }

    const encodedMessage = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div dir="rtl" className="max-w-4xl mx-auto p-4 md:p-8">
      <Card className="border-t-4 border-t-primary">
        <CardHeader className="text-center pb-8 border-b border-gray-100">
          <CardTitle className="text-2xl font-bold text-primary mb-2">تعبئة نموذج التسجيل كاملاً من قبل المشترك</CardTitle>
          <p className="text-muted-foreground">الرجاء تعبئة النموذج بدقة لضمان تقديم أفضل خدمة تناسب احتياجاتك.</p>
        </CardHeader>
        <CardContent className="pt-8">
          <form onSubmit={handleSubmit} className="space-y-10">
            
            {/* Section 1: Basic Info */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-2 text-gray-800">البيانات الأساسية</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">الاسم الثلاثي <span className="text-red-500">*</span></Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="أدخل اسمك الكريم" className="border border-gray-300 focus-visible:ring-primary/15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">رقم الهاتف <span className="text-red-500">*</span></Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="مثال: 05xxxxxxxxx" dir="ltr" className="text-right border border-gray-300 focus-visible:ring-primary/15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">العمر <span className="text-red-500">*</span></Label>
                  <Input id="age" name="age" type="number" value={formData.age} onChange={handleChange} required placeholder="سنة" className="border border-gray-300 focus-visible:ring-primary/15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height">الطول (سم)</Label>
                  <Input id="height" name="height" type="number" value={formData.height} onChange={handleChange} placeholder="سم" className="border border-gray-300 focus-visible:ring-primary/15" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="weight">الوزن (كج)</Label>
                  <Input id="weight" name="weight" type="number" value={formData.weight} onChange={handleChange} placeholder="كج" className="border border-gray-300 focus-visible:ring-primary/15" />
                </div>
                <div className="space-y-2">
                  <Label>الجنس</Label>
                  <select 
                    name="gender" 
                    value={formData.gender} 
                    onChange={(e) => handleRadioChange('gender', e.target.value)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/15 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="ذكر">ذكر</option>
                    <option value="أنثى">أنثى</option>
                  </select>
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>الهدف المراد تحقيقه</Label>
                  <select 
                    name="goal" 
                    value={formData.goal} 
                    onChange={(e) => handleRadioChange('goal', e.target.value)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary/15 focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="اكتساب وزن">اكتساب وزن</option>
                    <option value="خسارة وزن">خسارة وزن</option>
                    <option value="بناء عضل">بناء عضل</option>
                    <option value="غير ذلك">غير ذلك</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Section 2: Health */}
            <section className="space-y-6 bg-slate-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-2 text-gray-800">الحالة الصحية</h3>
              <YesNoQuestion id="q1" label="1. هل لديك أي أمراض حالية أو مزمنة أو إعاقات؟" valueKey="q1" detailsKey="q1Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
              <YesNoQuestion id="q2" label="2. هل سبق أن خضعت لإجراء عملية جراحية؟" valueKey="q2" detailsKey="q2Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
              <YesNoQuestion id="q3" label="3. هل لديك أي مشكلة في الجهاز الهضمي أو أي اضطراب (إمساك، إسهال، أمراض القولون، إلخ)؟" valueKey="q3" detailsKey="q3Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
              <YesNoQuestion id="q4" label="4. هل تتناول أي دواء أو مكمل (فيتامينات أو معادن أو أعشاب)؟" valueKey="q4" detailsKey="q4Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
              <YesNoQuestion id="q5" label="5. هل تتناول أي نوع من البروتين بودر أو أي مكمل غذائي آخر؟" valueKey="q5" detailsKey="q5Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
              <YesNoQuestion id="q6" label="6. هل لديك أي عدم تحمل أو حساسية اتجاه الطعام؟" valueKey="q6" detailsKey="q6Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} />
            </section>

            {/* Section 3: Lifestyle & Diet */}
            <section className="space-y-6">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-2 text-gray-800">النشاط البدني والتغذية</h3>
              
              <YesNoQuestion 
                id="q10" 
                label="10. هل تمارس أي رياضة أو أي نوع نشاط جسدي؟" 
                valueKey="q10" 
                detailsKey="q10Details" formData={formData} handleChange={handleChange} handleRadioChange={handleRadioChange} preventRadioFocus={preventRadioFocus} 
                detailsLabel="اذكر النوع، وكم مرة في الأسبوع، وأوقات الممارسة:" 
              />

              <div className="space-y-3 mb-6 border-b border-gray-200 pb-4">
                <Label className="text-base font-semibold text-gray-800">11. هل لديك أي تفضيلات للأطعمة؟</Label>
                <div className="flex gap-3">
                  <label
                    className="flex-1 relative cursor-pointer"
                    htmlFor="q11-yes"
                    onMouseDown={preventRadioFocus}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRadioChange('q11', 'نعم');
                    }}
                  >
                    <input
                      type="radio"
                      id="q11-yes"
                      name="q11"
                      value="نعم"
                      checked={formData.q11 === 'نعم'}
                      onChange={(e) => handleRadioChange('q11', e.target.value)}
                      className="peer sr-only"
                      tabIndex={-1}
                    />
                    <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 peer-checked:border-stone-400 peer-checked:bg-stone-100 peer-checked:text-stone-800 transition-all font-medium">
                      نعم
                    </div>
                  </label>
                  
                  <label
                    className="flex-1 relative cursor-pointer"
                    htmlFor="q11-no"
                    onMouseDown={preventRadioFocus}
                    onClick={(e) => {
                      e.preventDefault();
                      handleRadioChange('q11', 'لا');
                    }}
                  >
                    <input
                      type="radio"
                      id="q11-no"
                      name="q11"
                      value="لا"
                      checked={formData.q11 === 'لا'}
                      onChange={(e) => handleRadioChange('q11', e.target.value)}
                      className="peer sr-only"
                      tabIndex={-1}
                    />
                    <div className="flex items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-3 hover:bg-gray-50 peer-checked:border-slate-400 peer-checked:bg-slate-100 peer-checked:text-slate-800 transition-all font-medium">
                      لا
                    </div>
                  </label>
                </div>
                
                <AnimatePresence initial={false}>
                  {formData.q11 === 'نعم' && (
                    <motion.div
                      key="q11-details"
                      initial={{ opacity: 0, height: 0, y: -8 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -8 }}
                      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="q11Like" className="text-sm text-gray-600 mb-1 block">أطعمة تفضلها:</Label>
                          <Textarea id="q11Like" name="q11Like" value={formData.q11Like} onChange={handleChange} className="w-full border border-gray-300 focus-visible:ring-primary/15 min-h-[100px]" />
                        </div>
                        <div>
                          <Label htmlFor="q11Dislike" className="text-sm text-gray-600 mb-1 block">أطعمة لا تفضلها:</Label>
                          <Textarea id="q11Dislike" name="q11Dislike" value={formData.q11Dislike} onChange={handleChange} className="w-full border border-gray-300 focus-visible:ring-primary/15 min-h-[100px]" />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>

            {/* Section 4: Routine */}
            <section className="space-y-6 bg-slate-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold border-b border-gray-200 pb-2 text-gray-800">الروتين اليومي المعتاد</h3>
              <p className="text-sm text-gray-500 mb-4">يرجى تزويدنا بأوقات روتينك اليومي التقريبية:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="wakeTime">وقت الاستيقاظ</Label>
                  <Input type="time" dir="ltr" id="wakeTime" name="wakeTime" value={formData.wakeTime} onChange={handleChange} className="w-full min-w-[150px] h-12 text-center text-lg font-medium border border-gray-300 focus-visible:ring-primary/15 appearance-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sleepTime">وقت النوم</Label>
                  <Input type="time" dir="ltr" id="sleepTime" name="sleepTime" value={formData.sleepTime} onChange={handleChange} className="w-full min-w-[150px] h-12 text-center text-lg font-medium border border-gray-300 focus-visible:ring-primary/15 appearance-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="breakfastTime">وقت الفطور</Label>
                  <Input type="time" dir="ltr" id="breakfastTime" name="breakfastTime" value={formData.breakfastTime} onChange={handleChange} className="w-full min-w-[150px] h-12 text-center text-lg font-medium border border-gray-300 focus-visible:ring-primary/15 appearance-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lunchTime">وقت الغداء</Label>
                  <Input type="time" dir="ltr" id="lunchTime" name="lunchTime" value={formData.lunchTime} onChange={handleChange} className="w-full min-w-[150px] h-12 text-center text-lg font-medium border border-gray-300 focus-visible:ring-primary/15 appearance-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dinnerTime">وقت العشاء</Label>
                  <Input type="time" dir="ltr" id="dinnerTime" name="dinnerTime" value={formData.dinnerTime} onChange={handleChange} className="w-full min-w-[150px] h-12 text-center text-lg font-medium border border-gray-300 focus-visible:ring-primary/15 appearance-none" />
                </div>
              </div>
            </section>

            {/* Section 5: Female specific */}
            {formData.gender === 'أنثى' && (
              <section className="space-y-6 border-2 border-pink-200 p-6 rounded-lg bg-pink-50/30">
                <h3 className="text-xl font-bold border-b border-pink-200 pb-2 text-pink-800">معلومات خاصة بالإناث</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">هل دورتك الشهرية منتظمة؟</Label>
                    <div className="flex gap-3">
                      <label
                        className="flex-1 relative cursor-pointer"
                        htmlFor="fp-yes"
                        onMouseDown={preventRadioFocus}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRadioChange('femalePeriods', 'نعم');
                        }}
                      >
                        <input
                          type="radio"
                          id="fp-yes"
                          name="femalePeriods"
                          value="نعم"
                          checked={formData.femalePeriods === 'نعم'}
                          onChange={(e) => handleRadioChange('femalePeriods', e.target.value)}
                          className="peer sr-only"
                          tabIndex={-1}
                        />
                        <div className="flex items-center justify-center rounded-md border border-pink-200 bg-white px-4 py-3 hover:bg-pink-50/50 peer-checked:border-pink-500 peer-checked:bg-pink-100 peer-checked:text-pink-700 transition-all font-medium">
                          نعم
                        </div>
                      </label>
                      <label
                        className="flex-1 relative cursor-pointer"
                        htmlFor="fp-no"
                        onMouseDown={preventRadioFocus}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRadioChange('femalePeriods', 'لا');
                        }}
                      >
                        <input
                          type="radio"
                          id="fp-no"
                          name="femalePeriods"
                          value="لا"
                          checked={formData.femalePeriods === 'لا'}
                          onChange={(e) => handleRadioChange('femalePeriods', e.target.value)}
                          className="peer sr-only"
                          tabIndex={-1}
                        />
                        <div className="flex items-center justify-center rounded-md border border-pink-200 bg-white px-4 py-3 hover:bg-pink-50/50 peer-checked:border-pink-500 peer-checked:bg-pink-100 peer-checked:text-pink-700 transition-all font-medium">
                          لا
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <Label className="text-base font-semibold">هل حضرتك بمرحلة حمل أو رضاعة؟</Label>
                    <div className="flex gap-3">
                      <label
                        className="flex-1 relative cursor-pointer"
                        htmlFor="fpr-yes"
                        onMouseDown={preventRadioFocus}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRadioChange('femalePregnancy', 'نعم');
                        }}
                      >
                        <input
                          type="radio"
                          id="fpr-yes"
                          name="femalePregnancy"
                          value="نعم"
                          checked={formData.femalePregnancy === 'نعم'}
                          onChange={(e) => handleRadioChange('femalePregnancy', e.target.value)}
                          className="peer sr-only"
                          tabIndex={-1}
                        />
                        <div className="flex items-center justify-center rounded-md border border-pink-200 bg-white px-4 py-3 hover:bg-pink-50/50 peer-checked:border-pink-500 peer-checked:bg-pink-100 peer-checked:text-pink-700 transition-all font-medium">
                          نعم
                        </div>
                      </label>
                      <label
                        className="flex-1 relative cursor-pointer"
                        htmlFor="fpr-no"
                        onMouseDown={preventRadioFocus}
                        onClick={(e) => {
                          e.preventDefault();
                          handleRadioChange('femalePregnancy', 'لا');
                        }}
                      >
                        <input
                          type="radio"
                          id="fpr-no"
                          name="femalePregnancy"
                          value="لا"
                          checked={formData.femalePregnancy === 'لا'}
                          onChange={(e) => handleRadioChange('femalePregnancy', e.target.value)}
                          className="peer sr-only"
                          tabIndex={-1}
                        />
                        <div className="flex items-center justify-center rounded-md border border-pink-200 bg-white px-4 py-3 hover:bg-pink-50/50 peer-checked:border-pink-500 peer-checked:bg-pink-100 peer-checked:text-pink-700 transition-all font-medium">
                          لا
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </section>
            )}

            {/* Submit Button */}
            <div className="pt-6 border-t border-gray-200 flex justify-center">
              <Button type="submit" size="lg" className="w-full md:w-auto px-12 py-6 text-lg border border-emerald-600 bg-emerald-600 text-white hover:bg-emerald-700 hover:border-emerald-700 gap-2">
                <WhatsAppIcon sx={{ fontSize: 22, color: '#ffffff' }} />
                إرسال للمدربة
              </Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
