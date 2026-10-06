export type Book = {
  id: string;
  title: string;
  description: string;
  author: string;
  price: string;
  overview: string;
  topics: string[];
  audience: string | null;
  coverImage: string | null;
  coverStyle: "emerald" | "sand";
};

// Uses the coach's public WhatsApp contact from the footer.
export const BOOKS_WHATSAPP_NUMBER = "972547031505";

export const books: Book[] = [
  {
    id: "reset",
    title: "RESET",
    description: "برنامج شهري متوازن يساعدكِ على بناء نمط حياة أكثر صحةً وتوازنًا.",
    author: "ميسم خلايلة",
    price: "119",
    overview:
      "برنامج RESET هو دليل شهري عملي مبني على الاستمرارية لا المثالية. يجمع خطة غذائية أسبوعية تقارب 1500 سعرة حرارية يوميًا، وتمارين منزلية، وخطوات صغيرة للعادات الصحية والجانب النفسي، إلى جانب صفحات Daily Reset لمراجعة يومكِ والعودة للمسار بهدوء.",
    topics: [
      "التغذية المتوازنة",
      "الحركة والرياضة",
      "العادات الصحية",
      "الجانب النفسي وتقليل الضغط",
      "مراجعة يومية للعودة للمسار",
    ],
    audience:
      "لمن تريد بناء نمط حياة صحي ومتوازن بخطوات واقعية قابلة للاستمرار، بعيدًا عن الضغط والمثالية.",
    coverImage: "/book-covers/reset.png",
    coverStyle: "emerald",
  },
  {
    id: "healthy-recipes",
    title: "الوصفات الصحية",
    description: "44 وصفة سهلة ومتنوعة مع القيم الغذائية التقريبية لكل وصفة.",
    author: "ميسم خلايلة",
    price: "129",
    overview:
      "دليل وصفات عملي يضم 44 وصفة مع المكوّنات وطريقة التحضير والقيم الغذائية التقريبية. ستجدين فيه 10 سلطات مشبعة، و11 فكرة فطور سهلة، و8 وصفات حلوة، و7 وجبات غداء متكاملة، و6 وصفات سموذي للفطور أو السناك.",
    topics: [
      "10 سلطات",
      "11 فكرة فطور",
      "8 وصفات حلوة",
      "7 وجبات غداء",
      "6 وصفات سموذي",
    ],
    audience:
      "لمن تبحث عن وصفات صحية سهلة ومتنوعة تساعدها على تجهيز وجباتها اليومية بثقة ومرونة.",
    coverImage: "/book-covers/healthy-recipes.jpeg",
    coverStyle: "sand",
  },
];

export function getBookOrderUrl(book: Book) {
  const message = `مرحباً ميسم، أرغب بطلب «${book.title}». شكراً لكِ.`;
  return `https://wa.me/${BOOKS_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
