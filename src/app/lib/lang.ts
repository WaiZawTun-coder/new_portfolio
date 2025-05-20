type info = {
  name: string;
  school: string;
  skills: string;
  programmingLanguage: string;
  framework: string;
};

type lang = {
  greeting: string;
  introduction: string;
};

const MY_INFO: info = {
  name: "Wai Zaw Tun",
  school: "Technological University Hmawbi",
  skills: "React, Laravel, PostgreSQL, Tailwind CSS",
  programmingLanguage: "JavaScript, Java, Python, C++, PHP",
  framework: "Next.js, Django, Spring",
};

export const lang: { [langName: string]: lang } = {
  en: {
    greeting: "I'm Wai Zaw Tun",
    introduction: `I'm a passionate web and mobile developer in my third year at ${MY_INFO.school} and an ITPEC FE certificate holder. With 2 years of experience, I've built full-stack apps using ${MY_INFO.skills}. I also work with tools like n8n, Power BI, Figma, and React Native. I enjoy creating clean, functional user experiences and solving real-world problems with code.`,
  },
  my: {
    greeting: `ကျွန်တော် ${MY_INFO.name} ပါ`,
    introduction: `ကျွန်တော်က ${MY_INFO.school} တက္ကသိုလ်က တတိယနှစ် အထိတက်ရောက်ခဲ့သောကျောင်းသားတစ်ဦး ဖြစ်ပြီး ITPEC FE စာမေးပွဲအောင်မြင်ထားပါတယ် ${MY_INFO.skills} စတဲ့နည်းပညာတွေနဲ့ Full-stack application တွေ တည်ဆောက်ဖူးတဲ့ ၂ နှစ်အတွေ့အကြုံရှိပါတယ် ထပ်ပြီး n8n, Power BI, Figma နဲ့ React Native တို့တို့နဲ့လည်း အလုပ်လုပ်ဖူးပါတယ် အသုံးပြုရလွယ်ကူပြီး အကြောင်းအရာပြည့်စုံတဲ့ user experience များဖန်တီးတာနှင့် အမှန်တကယ်ပြဿနာများကို ကုဒ်ဖြင့် ဖြေရှင်းရတာကို ဝါသနာပါပါတယ်။`,
  },
};
