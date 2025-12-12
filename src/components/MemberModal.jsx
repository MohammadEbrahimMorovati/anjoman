const MemberModal = ({ member, onClose }) => {
  if (!member) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">

      {/* کارت سفید */}
      <div className="bg-white rounded-3xl shadow-xl max-w-lg w-full p-8 relative animate-fadeIn">

        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-slate-500 hover:text-red-500 text-xl"
        >
          ×
        </button>

        {/* محتوا */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">

          {/* تصویر */}
          <img
            src={member.img}
            className="w-28 h-28 rounded-full object-cover shadow"
          />

          {/* اطلاعات */}
          <div className="text-center md:text-right">
            <h2 className="text-xl font-bold text-slate-800">
              {member.name}
            </h2>
            <p className="text-indigo-600 text-sm font-medium">
              {member.role}
            </p>

            <p className="text-slate-600 text-sm leading-relaxed mt-3">
              {member.bio}
            </p>

            {/* آیکون‌ها */}
            <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl">
              <a href={member.linkedin} className="hover:text-indigo-600">💼</a>
              <a href={`mailto:${member.email}`} className="hover:text-indigo-600">✉️</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MemberModal;
