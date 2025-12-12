const achievements = [
  "کسب عنوان انجمن علمی برتر در سطح دانشکده",
  "تقدیر از انجمن به‌دلیل برگزاری رویدادهای علمی مؤثر",
  "همکاری در برگزاری همایش‌های ملی و دانشگاهی",
];

const AchievementsSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-xl font-bold text-slate-800">
        افتخارات و دستاوردها
      </h2>
      <p className="text-center text-slate-500 text-sm mt-1">
        بخشی از نتایج فعالیت‌های انجمن علمی
      </p>

      <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="p-6 border border-slate-200 rounded-2xl text-center
            hover:shadow-md transition"
          >
            <div className="text-2xl mb-3">🏆</div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
