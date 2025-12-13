import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* header */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <h2 className="text-2xl font-extrabold text-slate-800">
          ارتباط با انجمن علمی
        </h2>
        <p className="mt-3 text-slate-500 text-sm leading-relaxed">
          برای عضویت، همکاری یا دریافت اطلاعات بیشتر با ما در ارتباط باشید
        </p>
      </div>

      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-14 px-6">
        {/* contact form */}
        <form className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <label className="block mb-1 text-xs text-slate-600">
              نام و نام خانوادگی
            </label>
            <input
              type="text"
              placeholder="مثلاً علی احمدی"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-600">ایمیل</label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-xs text-slate-600">
              پیام شما
            </label>
            <textarea
              rows="5"
              placeholder="پیام خود را وارد کنید..."
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm
              focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-l from-indigo-500 to-sky-500
            text-white text-sm font-semibold shadow hover:shadow-md hover:opacity-95 transition"
          >
            ارسال پیام
          </button>
        </form>

        {/* contact info */}
        <div className="space-y-8">
          <h3 className="text-base font-semibold text-slate-800">
            اطلاعات تماس
          </h3>

          <div className="space-y-4 text-sm text-slate-600">
            <div className="flex items-start gap-3">
              <FiMapPin className="text-indigo-600 mt-0.5" />
              <span>تبریز، دانشگاه تبریز، ساختمان مرکزی انجمن‌های علمی</span>
            </div>

            <div className="flex items-center gap-3">
              <FiPhone className="text-indigo-600" />
              <span>۰۴۱-۳۳۳۳۳۳۳۳</span>
            </div>

            <div className="flex items-center gap-3">
              <FiMail className="text-indigo-600" />
              <span>info@tabrizassociation.ac.ir</span>
            </div>
          </div>

          {/* socials */}
          <div className="pt-4">
            <p className="text-sm text-slate-500 mb-3">شبکه‌های اجتماعی</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-300
                flex items-center justify-center text-slate-500
                hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full border border-slate-300
                flex items-center justify-center text-slate-500
                hover:border-indigo-500 hover:text-indigo-600 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
