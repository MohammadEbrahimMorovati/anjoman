import { events } from "../data/events";

const EventsSection = () => {
  return (
    <section id="events" className="py-16">
      <h2 className="text-center text-xl font-bold text-slate-800">
        رویدادهای پیش رو
      </h2>

      <p className="text-center text-slate-500 text-sm mt-1">
        کارگاه‌ها، همایش‌ها و برنامه‌های آینده انجمن علمی
      </p>

    <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">

        {events.map((ev) => (
          <article
            key={ev.id}
            className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition"
          >
            {/* تصویر رویداد */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={ev.img}
                className="h-full w-full object-cover"
                alt={ev.title}
              />
            </div>

            {/* محتوای کارت */}
            <div className="p-5 space-y-3">

              {/* اطلاعات بالا */}
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-white px-2 py-0.5 rounded-full text-[10px] ${ev.color}`}
                  >
                    {ev.date}
                  </span>
                  <span>{ev.place}</span>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] border border-slate-300">
                  {ev.type}
                </span>
              </div>

              <h3 className="font-semibold text-slate-800 text-sm">{ev.title}</h3>

              <p className="text-xs text-slate-600 leading-relaxed">
                {ev.description}
              </p>

              {/* دکمه‌ها */}
              <div className="flex items-center justify-between mt-3">
                <button className="px-4 py-1.5 rounded-full text-[11px] bg-gradient-to-l from-indigo-500 to-sky-500 text-white font-semibold shadow hover:shadow-md transition">
                  ثبت‌نام رایگان
                </button>

                <button className="text-[11px] text-indigo-600 hover:underline">
                  جزئیات بیشتر
                </button>
              </div>

            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
