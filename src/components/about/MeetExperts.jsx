import React from "react";

function MeetExperts() {
  return (
    <section className="max-w-6xl mx-auto p-8">
      <h2 className="text-5xl great-vibes text-[#D4AF37] mb-6 text-center">
        Meet Our Experts
      </h2>
      <div className="grid md:grid-cols-3 gap-8 text-center">
        <div className="space-y-4">
          <img
            className="w-32 h-32 mx-auto object-cover rounded-full bg-[#D4AF37]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtx989dfO-HNYARkt55hDVZ86SjlmBTj8LQ&s"
          />
          <h4 className="text-2xl font-light italic">Sophia</h4>
          <p className="text-gray-500 great-vibes font-light">
            Hair Specialist
          </p>
        </div>
        <div className="space-y-4">
          <img
            className="w-32 h-32 mx-auto object-cover rounded-full bg-[#D4AF37]"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSms2bTz9kxKXygd2vGHW1Jj2ngXYJZnLRpsw&s"
          />
          <h4 className="text-2xl font-light italic">Liam</h4>
          <p className="text-gray-500 great-vibes">Skin Care Expert</p>
        </div>
        <div className="space-y-4">
          <img
            className="w-32 h-32 object-cover  mx-auto rounded-full bg-[#D4AF37]"
            src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaotaBOEaYp6B40NwVfG0wQeOdbwXhsa90EQ&s"
          />
          <h4 className="text-2xl font-light italic">Emma</h4>
          <p className="text-gray-500 font-light great-vibes">Makeup Artist</p>
        </div>
      </div>
    </section>
  );
}

export default MeetExperts;
