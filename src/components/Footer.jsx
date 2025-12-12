const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 mt-16">
      
      {/* بخش اصلی */}
     <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">

        {/* بخش برند */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500 flex items-center justify-center text-white text-xl shadow">
              🎓
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">
                انجمن علمی دانشگاه تبریز
              </h3>
              <p className="text-xs text-slate-400">
                مرکز نوآوری، پژوهش و توسعه علمی
              </p>
            </div>
          </div>
        </div>

        {/* دسترسی سریع */}
        <div>
          <h4 className="text-white font-semibold text-sm">دسترسی سریع</h4>
          <ul className="text-xs space-y-2 mt-4">
            <li><a href="#home" className="hover:text-white">خانه</a></li>
            <li><a href="#members" className="hover:text-white">اعضا</a></li>
            <li><a href="#activities" className="hover:text-white">فعالیت‌ها</a></li>
            <li><a href="#events" className="hover:text-white">رویدادها</a></li>
            <li><a href="#contact" className="hover:text-white">تماس</a></li>
          </ul>
        </div>

        {/* شبکه‌های اجتماعی */}
        <div>
          <h4 className="text-white font-semibold text-sm">شبکه‌های اجتماعی</h4>
          <div className="flex gap-5 text-xl mt-4">
            <a href="#" className="hover:text-white transition">💼</a>
            <a href="#" className="hover:text-white transition">📸</a>
            <a href="#" className="hover:text-white transition">✉️</a>
          </div>
        </div>

      </div>

      {/* خط جداکننده */}
      <div className="border-t border-slate-700 mt-10 pt-6 px-6 text-center">
        <p className="text-xs text-slate-400">
          © ۱۴۰۳ انجمن علمی دانشگاه تبریز — تمامی حقوق محفوظ است.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
