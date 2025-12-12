const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-center text-xl font-bold text-slate-800">
        با ما در تماس باشید
      </h2>

      <p className="text-center text-slate-500 text-sm mt-1">
        برای عضویت، همکاری یا کسب اطلاعات بیشتر پیام ارسال کنید
      </p>

      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* فرم تماس */}
        <form className="space-y-5 bg-white p-8 rounded-2xl shadow border border-slate-200">

          <div>
            <label className="block mb-1 text-xs text-slate-600">نام و نام خانوادگی</label>
            <input
              type="text"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="مثلاً علی احمدی"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-600">ایمیل</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-600">پیام شما</label>
            <textarea
              rows="4"
              className="w-full px-3 py-2 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="پیام خود را وارد کنید..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-xl bg-gradient-to-l from-indigo-500 to-sky-500 text-white text-sm font-semibold shadow hover:opacity-90"
          >
            ارسال پیام
          </button>
        </form>

        {/* اطلاعات تماس */}
        <div className="space-y-5 text-sm text-slate-700">
          <h3 className="text-slate-800 font-semibold text-base mb-2">
            اطلاعات تماس انجمن علمی
          </h3>

          <p><span className="font-semibold text-slate-800">آدرس:</span> تبریز، دانشگاه تبریز، ساختمان مرکزی انجمن‌ها</p>
          <p><span className="font-semibold text-slate-800">تلفن:</span> ۰۴۱-۳۳۳۳۳۳۳۳</p>
          <p><span className="font-semibold text-slate-800">ایمیل:</span> info@tabrizassociation.ac.ir</p>

          <div className="flex gap-4 text-xl mt-4">
            <a href="#" className="hover:text-indigo-600">🔗</a>
            <a href="#" className="hover:text-indigo-600">💼</a>
            <a href="#" className="hover:text-indigo-600">✉️</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
