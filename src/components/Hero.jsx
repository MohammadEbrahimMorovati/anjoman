import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    image: "/images/hero1.jpg",
    title: "پژوهش برای آینده",
    subtitle: "مرکز علمی و پژوهشی دانشگاه تبریز",
  },
  {
    id: 2,
    image: "/images/hero2.jpg",
    title: "آموزش، مهارت و رشد",
    subtitle: "کارگاه‌های تخصصی برای توانمندسازی دانشجویان",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "رویدادهای علمی پویا",
    subtitle: "همایش‌ها و نشست‌های تخصصی با حضور اساتید و صنعت",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % slides.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="home" className="relative h-[460px] md:h-[560px] overflow-hidden">
      {/* Background image */}
      <img
        key={slides[index].id}
        src={slides[index].image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
      />

      {/* Overlay: برای خوانایی متن */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Gradient overlay مثل نمونه */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/45 via-purple-500/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
        <div className="max-w-xl">
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight drop-shadow">
            {slides[index].title}
          </h1>

          <p className="mt-4 text-white/90 text-sm md:text-base leading-relaxed">
            {slides[index].subtitle}
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a
              href="#events"
              className="px-6 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold shadow hover:shadow-md transition"
            >
              مشاهده رویدادها
            </a>

            <a
              href="#contact"
              className="px-6 py-2 rounded-full bg-white/15 text-white text-sm font-semibold border border-white/30 hover:bg-white/20 transition"
            >
              ارتباط با انجمن
            </a>
          </div>
        </div>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all ${
              index === i ? "w-8 bg-white" : "w-2.5 bg-white/50"
            }`}
            aria-label={`slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
