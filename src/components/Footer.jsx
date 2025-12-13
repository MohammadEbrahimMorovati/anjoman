import { FaGraduationCap, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 mt-20">
      {/* main */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
        {/* brand */}
        <div>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white text-xl shadow">
              <FaGraduationCap />
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

        {/* quick access */}
        <div>
          <h4 className="text-white font-semibold text-sm">دسترسی سریع</h4>
          <ul className="text-xs space-y-2 mt-4">
            <li>
              <a href="#home" className="hover:text-white transition">
                خانه
              </a>
            </li>
            <li>
              <a href="#members" className="hover:text-white transition">
                اعضا
              </a>
            </li>
            <li>
              <a href="#activities" className="hover:text-white transition">
                فعالیت‌ها
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-white transition">
                رویدادها
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white transition">
                تماس
              </a>
            </li>
          </ul>
        </div>

        {/* socials */}
        <div>
          <h4 className="text-white font-semibold text-sm">ارتباط با ما</h4>

          <div className="flex gap-4 text-lg mt-4">
            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="#"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:info@tabriz-association.ac.ir"
              className="h-9 w-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 hover:text-white transition"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
      </div>

      {/* divider */}
      <div className="border-t border-slate-700 mt-12 pt-6 px-6 text-center">
        <p className="text-xs text-slate-400">
          © ۱۴۰۳ انجمن علمی دانشگاه تبریز — تمامی حقوق محفوظ است.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
