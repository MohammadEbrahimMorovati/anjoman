const achievements = [
  {
    title: "انجمن علمی برتر دانشکده",
    desc: "انتخاب انجمن علمی به‌عنوان انجمن برتر در سطح دانشکده بر اساس ارزیابی عملکرد سالانه.",
  },
  {
    title: "تقدیر از برگزاری رویدادهای علمی",
    desc: "دریافت تقدیرنامه به‌دلیل برگزاری منظم و مؤثر رویدادها و کارگاه‌های علمی.",
  },
  {
    title: "همکاری در رویدادهای ملی",
    desc: "مشارکت فعال در برگزاری همایش‌ها و رویدادهای علمی در سطح دانشگاهی و ملی.",
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white to-slate-50"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-2xl font-bold text-slate-800">
          افتخارات و دستاوردها
        </h2>
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          بخشی از نتایج و دستاوردهای حاصل از فعالیت‌های انجمن علمی
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
        {achievements.map((item, i) => (
          <article
            key={i}
            className="bg-white rounded-2xl border border-slate-200
            px-8 py-10 text-center hover:shadow-md transition"
          >
            {/* icon */}
            <div
              className="mx-auto mb-6 w-12 h-12 rounded-full
              bg-indigo-50 text-indigo-600
              flex items-center justify-center text-xl font-bold"
            >
              🏆
            </div>

            <h3 className="text-sm font-semibold text-slate-800 mb-3">
              {item.title}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
