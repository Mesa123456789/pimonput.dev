import { aboutData } from "../data/aboutData";
import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import TypingText from "../components/TypingText";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactSplit from "../components/ContactSplit";

export default function About() {
  const { about, mainSkills, toolCategories } = aboutData;

  return (
    <div className="text-gray-800 w-full">
      {/* 1. HERO SECTION: ลบขอบออกให้กว้างเต็มจอ */}
      <section className=" h-[100vh] flex items-center justify-center text-white w-full">
        <HeroSlider images={about.heroImages} />

        <div className="relative z-10 text-center px-4 translate-y-16 md:translate-y-60">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 drop-shadow-xl">
            {about.fullname}
          </h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            {about.headline}
          </p>
          <div className="text-lg md:text-2xl font-medium text-white mt-6">
            <TypingText
              words={[
                "Software Developer",
                "Game Developer",
                "IT Intern",
                "Interactive Media Designer",
              ]}
              typingSpeed={100}
              deletingSpeed={50}
              delayBetweenWords={1200} // แก้จาก pauseTime เป็น delayBetweenWords ให้ตรงตาม Component เดิม
            />
          </div>
        </div>
      </section>

      {/* 2. SKILLS SECTION: ปรับ Padding ให้ชิดขอบในมือถือ */}
      <section className="bg-gray-50 py-20 px-4 md:px-12 lg:px-20">
        <SectionTitle
          title="MY SKILLS"
          subtitle="Blending creativity and technology to craft engaging digital experiences."
          // ลบ align="center" ออกเพราะ Component SectionTitle ของคุณไม่มี Props นี้
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {mainSkills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition border border-blue-50"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {skill.title}
              </h3>
              {/* แก้จาก skill.description เป็น skill.desc ให้ตรงตาม Data */}
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. TOOLS SECTION: ปรับ Padding ให้ขอบหายไป */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-4 md:px-12 lg:px-20">
        <h2 className="text-2xl font-bold text-blue-600 mb-8">
          Tools & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((cat) => (
            <div key={cat.title} className="bg-white rounded-2xl p-6 shadow-md">
              <h3 className="text-sm font-semibold mb-4">{cat.title}</h3>

              {cat.subcategories.map((sub) => (
                <div key={sub.subtitle} className="mb-4">
                  <h4 className="text-xs text-blue-500 mb-2">
                    {sub.subtitle}
                  </h4>

                  <div className="grid grid-cols-4 gap-3 place-items-center">
                    {sub.icons.map((icon) => (
                      <div key={icon.name} className="text-center">
                        <img
                          src={icon.src}
                          alt={icon.name}
                          className="w-8 h-8 mx-auto hover:scale-110 transition"
                        />
                        <p className="text-[10px] text-gray-500 mt-1">
                          {icon.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ProjectCarousel />
      <ContactSplit />
    </div>
  );
}