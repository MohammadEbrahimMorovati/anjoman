const timeline = [
  {
    date: "آذر ۱۴۰۲",
    title: "برگزاری کارگاه مبانی هوش مصنوعی",
    desc: "برگزاری کارگاه آموزشی با تمرکز بر مفاهیم پایه و کاربردهای هوش مصنوعی برای دانشجویان.",
  },
  {
    date: "بهمن ۱۴۰۲",
    title: "همکاری پژوهشی با اعضای هیئت علمی",
    desc: "شروع چند پروژه پژوهشی دانشجویی با راهنمایی اساتید دانشکده.",
  },
  {
    date: "اردیبهشت ۱۴۰۳",
    title: "رویداد علمی – استارتاپی",
    desc: "برگزاری رویداد ایده‌پردازی با محور نوآوری و حل مسائل واقعی.",
  },
];

const TimelineSection = () => {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-xl font-bold text-slate-800">
        مسیر فعالیت‌های انجمن
      </h2>
      <p className="text-center text-slate-500 text-sm mt-1">
        نگاهی به روند فعالیت‌ها و رویدادهای برگزارشده
      </p>

      <div className="max-w-3xl mx-auto mt-12 relative">
        <div className="absolute right-4 top-0 h-full w-px bg-slate-200"></div>

        <ul className="space-y-10">
          {timeline.map((item, i) => (
            <li key={i} className="relative pr-12">
              <span className="absolute right-1 top-1.5 h-3 w-3 rounded-full bg-indigo-500"></span>

              <span className="text-xs text-slate-400">{item.date}</span>
              <h3 className="text-sm font-semibold text-slate-800 mt-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TimelineSection;
