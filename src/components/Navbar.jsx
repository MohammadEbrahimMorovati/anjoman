import { useState, useEffect } from "react";

const navItems = [
  { label: "خانه", href: "#home" },
  { label: "اعضا", href: "#members" },
  { label: "فعالیت‌ها", href: "#activities" },
  { label: "رویدادها", href: "#events" },
  { label: "تماس", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // قفل اسکرول
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* ===== Navbar اصلی ===== */}
   <header className="sticky top-0 z-50 bg-white/75 backdrop-blur-xl border-b border-slate-200">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center shadow">
              <span className="text-white font-bold text-sm">UT</span>
            </div>
            <div className="leading-tight">
              <h1 className="text-sm font-bold text-slate-800">
                انجمن علمی دانشگاه تبریز
              </h1>
              <p className="text-[11px] text-slate-500">
                Scientific Association
              </p>
            </div>
          </div>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.href} className="relative group">
                <a href={item.href} className="text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
                <span className="absolute -bottom-1 right-0 h-[2px] w-0 bg-indigo-500 transition-all group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex px-4 py-1.5 rounded-full text-xs font-semibold 
              bg-gradient-to-l from-indigo-500 to-sky-500 text-white shadow"
            >
              عضویت / همکاری
            </a>

            <button
              onClick={() => setOpen(true)}
              className="md:hidden w-9 h-9 rounded-full border border-slate-300 flex items-center justify-center"
            >
              ≡
            </button>
          </div>
        </nav>
      </header>

      {/* ===== Mobile Menu (Fullscreen واقعی) ===== */}
   {/* ===== Mobile Menu (Animated) ===== */}
<div
  className={`fixed inset-0 z-[9999] transition-all duration-300
  ${open ? "bg-black/70 backdrop-blur-md visible opacity-100" : "opacity-0 invisible"}`}
>
  {/* panel */}
  <div
    className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col
    transition-transform duration-300 ease-out
    ${open ? "translate-x-0" : "translate-x-full"}`}
  >

    {/* Header */}
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <span className="font-bold text-slate-800">منو</span>
      <button
        onClick={() => setOpen(false)}
        className="text-2xl text-slate-700"
      >
        ×
      </button>
    </div>

    {/* Links */}
    <ul className="flex-1 px-6 py-8 space-y-6 text-base font-semibold text-slate-800">
      {navItems.map((item, i) => (
        <li
          key={item.href}
          className={`transition-all duration-300 delay-[${i * 40}ms]
          ${open ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}
        >
          <a
            href={item.href}
            onClick={() => setOpen(false)}
            className="block"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <div className="px-6 pb-6">
      <a
        href="#contact"
        onClick={() => setOpen(false)}
        className="block w-full py-2 rounded-full text-center text-sm font-semibold
        bg-gradient-to-l from-indigo-500 to-sky-500 text-white shadow
        transition hover:scale-[1.02]"
      >
        عضویت / همکاری
      </a>
    </div>
  </div>
</div>

    </>
  );
}
