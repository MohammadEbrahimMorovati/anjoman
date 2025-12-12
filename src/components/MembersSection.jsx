import { useState } from "react";
import { members } from "../data/members";
import MemberModal from "./MemberModal";

const MembersSection = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section id="members" className="py-20">
      <h2 className="text-center text-2xl font-bold text-slate-800">
        اعضای انجمن علمی
      </h2>
      <p className="text-center text-slate-500 text-sm mt-2">
        تیم متخصص و متعهد ما
      </p>

      <div className="max-w-6xl mx-auto mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-12 justify-items-center">

        {members.map((m) => (
          <div
            key={m.id}
            className="text-center cursor-pointer group"
            onClick={() => setSelectedMember(m)}
          >
            {/* گرادیان دور عکس */}
            <div
              className={`p-[4px] rounded-full bg-gradient-to-br ${m.color} shadow-lg transition-transform group-hover:scale-105`}
            >
              <img
                src={m.img}
                className="w-28 h-28 rounded-full object-cover border-4 border-white"
                alt={m.name}
              />
            </div>

            {/* کارت نقش */}
            <span
              className="mt-3 inline-block text-[11px] px-3 py-1 rounded-full 
              bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold shadow"
            >
              {m.role}
            </span>

            {/* نام */}
            <p className="mt-2 text-sm font-semibold text-slate-800">
              {m.name}
            </p>
          </div>
        ))}

      </div>

      {/* modal */}
      <MemberModal
        member={selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </section>
  );
};

export default MembersSection;
