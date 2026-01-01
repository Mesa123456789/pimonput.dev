import { aboutData } from "../data/aboutData";
import HeroSlider from "../components/HeroSlider";
import SectionTitle from "../components/SectionTitle";
import TypingText from "../components/TypingText";
import ProjectCarousel from "../components/ProjectCarousel";
import ContactSplit from "../components/ContactSplit";

export default function About() {
  const { about, mainSkills, toolCategories } = aboutData;

  return (
    <main className="text-gray-800">
      {/* HERO */}
      <section className="relative h-[85vh] flex items-center justify-center text-white">
        <HeroSlider images={about.heroImages} />

        <div className="relative z-10 text-center px-6 translate-y-16 md:translate-y-60">
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
              delayBetweenWords={1200}
            />
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="bg-gray-50 py-20 px-6 lg:px-20">
        <SectionTitle
          title="MY SKILLS"
          subtitle="Blending creativity and technology to craft engaging digital experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainSkills.map((skill) => (
            <div
              key={skill.title}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-blue-700 mb-2">
                {skill.title}
              </h3>
              <p className="text-gray-600 text-sm">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TOOLS */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 px-6">
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
    </main>
  );
}
