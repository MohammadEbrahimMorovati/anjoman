import { useState, useEffect } from "react";

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
    title: "توسعه علم و فناوری",
    subtitle: "ایجاد زیرساخت برای پژوهش‌های نوین",
  },
  {
    id: 3,
    image: "/images/hero3.jpg",
    title: "فرصتی برای شکوفایی",
    subtitle: "همکاری دانشجویان و اساتید در پروژه‌های علمی",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[430px] md:h-[520px] overflow-hidden">

      {/* تصویری که اسلاید می‌شود */}
      <img
        key={slides[index].id}  
        src={slides[index].image}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 brightness-90"
      />

      {/* گرادیان روی تصویر */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/40 via-purple-500/30 to-transparent"></div>

      {/* متن روی تصویر */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20">

        <h1 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg">
          {slides[index].title}
        </h1>

        <p className="text-sm md:text-base text-slate-100 mt-3 drop-shadow">
          {slides[index].subtitle}
        </p>

        <a
          href="#events"
          className="mt-6 inline-block px-6 py-2 rounded-full bg-white text-indigo-600 
          font-semibold shadow hover:bg-slate-100 transition"
        >
          پروژه‌ها
        </a>
      </div>

      {/* نقاط پایین اسلایدر */}
      <div className="absolute bottom-5 w-full flex justify-center gap-3 z-20">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === i ? "bg-white scale-125" : "bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
