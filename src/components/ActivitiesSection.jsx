const items = [
  {
    title: "پژوهش علمی",
    desc: "انجام پروژه‌های تحقیقاتی با همکاری اساتید و دانشجویان در حوزه‌های مختلف علمی و صنعتی.",
    bullets: ["+۲۵ پروژه فعال", "+۱۰ مقاله ISI"],
    icon: "📘",
    colorLine: "border-indigo-500",
  },
  {
    title: "کارگاه‌های آموزشی",
    desc: "برگزاری دوره‌ها، بوت‌کمپ‌ها و کارگاه‌های مهارت محور برای ورود دانشجو به بازار کار.",
    bullets: ["+۴۰ کارگاه در سال", "+۸۰۰ شرکت‌کننده"],
    icon: "🎓",
    colorLine: "border-emerald-500",
  },
  {
    title: "همایش‌ها و سمینارها",
    desc: "دعوت از متخصصان صنعتی و دانشگاهی برای ارائه تازه‌ترین تجربیات علمی.",
    bullets: ["+۱۵ همایش ملی", "+۳۰۰۰ نفر حاضر"],
    icon: "🎤",
    colorLine: "border-pink-500",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-16">
      <h2 className="text-center text-xl font-bold text-slate-800">
        فعالیت‌های انجمن
      </h2>

      <p className="text-center text-slate-500 text-sm mt-1">
        دستاوردها و برنامه‌های ما
      </p>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <article
            key={idx}
            className={`relative bg-white p-6 rounded-2xl shadow-sm border-r-4 ${item.colorLine} hover:shadow-lg hover:-translate-y-1 transition`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{item.icon}</span>
              <h3 className="font-semibold text-slate-800 text-sm">{item.title}</h3>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              {item.desc}
            </p>

            <ul className="text-xs text-slate-500 space-y-1">
              {item.bullets.map((b, i) => (
                <li key={i} className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                  {b}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
