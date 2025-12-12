import useCountUp from "../hooks/useCountUp";

const stats = [
  { value: 800, label: "عضو فعال" },
  { value: 150, label: "پروژه تحقیقاتی" },
  { value: 60, label: "رویداد علمی" },
  { value: 20, label: "همکاری بین‌المللی" },
];

const StatsSection = () => {
  return (
    <section className="py-12 bg-gradient-to-l from-indigo-600 via-sky-500 to-emerald-400 text-white">

  <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">



        {stats.map((s, i) => {
          const number = useCountUp(s.value);

          return (
            <div key={i}>
              <p className="text-3xl font-extrabold">+{number}</p>
              <p className="mt-1 text-sm opacity-90">{s.label}</p>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default StatsSection;
