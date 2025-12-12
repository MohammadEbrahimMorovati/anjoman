export default function MemberModal({ member, onClose }) {
  if (!member) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden animate-[fadeIn_.25s_ease-out]">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <span className="text-sm font-semibold text-slate-800">
            معرفی عضو
          </span>
          <button
            onClick={onClose}
            className="text-xl text-slate-500 hover:text-slate-800 transition"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-10 text-center">

          {/* Avatar */}
          <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-6 border">
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name */}
          <h3 className="text-lg font-bold text-slate-800">
            {member.name}
          </h3>

          {/* Role */}
          <p className="mt-1 text-sm text-indigo-600 font-medium">
            {member.role}
          </p>

          {/* Bio */}
          {member.bio && (
            <p className="mt-6 text-sm text-slate-600 leading-relaxed">
              {member.bio}
            </p>
          )}

          {/* Actions */}
          <div className="mt-8 flex justify-center gap-4">
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="px-4 py-2 rounded-full text-xs font-medium
                border border-slate-300 text-slate-700
                hover:bg-slate-100 transition"
              >
                ایمیل
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                className="px-4 py-2 rounded-full text-xs font-medium
                border border-slate-300 text-slate-700
                hover:bg-slate-100 transition"
              >
                لینکدین
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
