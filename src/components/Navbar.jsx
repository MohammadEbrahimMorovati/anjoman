import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* logo */}
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 flex items-center justify-center rounded-xl bg-indigo-500 text-white text-lg shadow">
            🎓
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-800">
              انجمن علمی دانشگاه تبریز
            </h1>
            <p className="text-xs text-slate-500">مرکز نوآوری و پژوهش</p>
          </div>
        </div>

        {/* desktop menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="#home" className="hover:text-indigo-600">خانه</a></li>
          <li><a href="#members" className="hover:text-indigo-600">اعضا</a></li>
          <li><a href="#activities" className="hover:text-indigo-600">فعالیت‌ها</a></li>
          <li><a href="#events" className="hover:text-indigo-600">رویدادها</a></li>
          <li><a href="#contact" className="hover:text-indigo-600">تماس</a></li>
        </ul>

        {/* mobile hamburger */}
        <button
          className="md:hidden text-2xl text-slate-700"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </nav>

      {/* mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50">
          <div className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 animate-slideleft">

            {/* close button */}
            <button
              className="text-xl text-slate-700"
              onClick={() => setOpen(false)}
            >
              ×
            </button>

            {/* mobile nav items */}
            <ul className="mt-6 space-y-4 text-sm">
              <li><a onClick={() => setOpen(false)} href="#home">خانه</a></li>
              <li><a onClick={() => setOpen(false)} href="#members">اعضا</a></li>
              <li><a onClick={() => setOpen(false)} href="#activities">فعالیت‌ها</a></li>
              <li><a onClick={() => setOpen(false)} href="#events">رویدادها</a></li>
              <li><a onClick={() => setOpen(false)} href="#contact">تماس</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
