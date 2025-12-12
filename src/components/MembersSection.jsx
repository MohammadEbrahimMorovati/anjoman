import { useState } from "react";
import { members } from "../data/members";
import MemberModal from "./MemberModal";

export default function MembersSection() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section
      id="members"
      className="py-24 bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-16 px-6">
        <h2 className="text-2xl font-bold text-slate-800">
          اعضای انجمن علمی
        </h2>
        <p className="mt-3 text-sm text-slate-500 leading-relaxed">
          تیمی متشکل از دانشجویان فعال و اعضای هیئت علمی که با هدف
          ارتقای سطح علمی و پژوهشی فعالیت می‌کنند
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-16 gap-x-8 justify-items-center px-6">

        {members.map((m) => (
          <button
            key={m.id}
            onClick={() => setActiveMember(m)}
            className="group text-center focus:outline-none"
          >
            {/* Avatar */}
            <div
              className={`p-[3px] rounded-full bg-gradient-to-br ${m.color}
              transition-transform duration-300 group-hover:scale-[1.03]`}
            >
              <img
                src={m.img}
                alt={m.name}
                className="w-28 h-28 rounded-full object-cover bg-white"
              />
            </div>

            {/* Role */}
            <span
              className="mt-5 inline-block px-4 py-1 rounded-full
              text-[11px] font-medium tracking-wide
              bg-slate-100 text-slate-600"
            >
              {m.role}
            </span>

            {/* Name */}
            <p className="mt-3 text-sm font-semibold text-slate-800">
              {m.name}
            </p>
          </button>
        ))}

      </div>

      {/* Modal */}
      <MemberModal
        member={activeMember}
        onClose={() => setActiveMember(null)}
      />
    </section>
  );
}
