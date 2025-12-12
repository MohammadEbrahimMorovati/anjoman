export default function SignatureSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-lg text-slate-700 leading-relaxed font-medium">
          «انجمن علمی، فضایی برای رشد فردی و علمی دانشجویان است و ما تلاش کرده‌ایم
          با برنامه‌ریزی مستمر، بستری پویا برای یادگیری و پژوهش فراهم کنیم.»
        </p>

        <div className="mt-10 flex flex-col items-center">

          {/* امضا */}
          <img
            src="/images/signature.png"
            alt="امضای دبیر انجمن"
            className="h-16 object-contain opacity-90"
          />

          {/* نام و سمت */}
          <p className="mt-4 font-semibold text-slate-800">
  مریم مسعودی
          </p>
          <p className="text-sm text-slate-500">
            دبیر انجمن علمی دانشگاه تبریز
          </p>
        </div>
      </div>
    </section>
  );
}
