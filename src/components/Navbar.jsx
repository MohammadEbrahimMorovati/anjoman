// import { useState } from "react";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
//       <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

//         {/* logo */}
//         <div className="flex items-center gap-2">
//           <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-indigo-500 text-white text-lg shadow">
//             🎓
//           </div>
//           <div>
//             <h1 className="text-sm font-bold text-slate-800">
//               انجمن علمی دانشگاه تبریز
//             </h1>
//             <p className="text-xs text-slate-500">مرکز نوآوری و پژوهش</p>
//           </div>
//         </div>

//         {/* desktop menu */}
//         <ul className="hidden md:flex items-center gap-6 text-sm">
//           <li><a href="#home" className="hover:text-indigo-600">خانه</a></li>
//           <li><a href="#members" className="hover:text-indigo-600">اعضا</a></li>
//           <li><a href="#activities" className="hover:text-indigo-600">فعالیت‌ها</a></li>
//           <li><a href="#events" className="hover:text-indigo-600">رویدادها</a></li>
//           <li><a href="#contact" className="hover:text-indigo-600">تماس</a></li>
//         </ul>

//         {/* mobile hamburger */}
//         <button
//           className="md:hidden text-2xl text-slate-700"
//           onClick={() => setOpen(true)}
//         >
//           ☰
//         </button>
//       </nav>

//       {/* mobile menu overlay */}
//       {open && (
//         <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
//           <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 animate-slideleft">

//             {/* close button */}
//             <button
//               className="text-xl text-slate-700"
//               onClick={() => setOpen(false)}
//             >
//               ×
//             </button>

//             {/* mobile nav items */}
//             <ul className="mt-6 space-y-4 text-sm">
//               <li><a onClick={() => setOpen(false)} href="#home">خانه</a></li>
//               <li><a onClick={() => setOpen(false)} href="#members">اعضا</a></li>
//               <li><a onClick={() => setOpen(false)} href="#activities">فعالیت‌ها</a></li>
//               <li><a onClick={() => setOpen(false)} href="#events">رویدادها</a></li>
//               <li><a onClick={() => setOpen(false)} href="#contact">تماس</a></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
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
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
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
                <a href={item.href} className="text-slate-700">
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
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-md">
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-white shadow-2xl flex flex-col">

            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <span className="font-bold text-slate-800">منو</span>
              <button onClick={() => setOpen(false)} className="text-2xl">
                ×
              </button>
            </div>

            {/* Links */}
            <ul className="flex-1 px-6 py-8 space-y-6 text-base font-semibold text-slate-800">
              {navItems.map((item) => (
                <li key={item.href}>
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
                bg-gradient-to-l from-indigo-500 to-sky-500 text-white shadow"
              >
                عضویت / همکاری
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
