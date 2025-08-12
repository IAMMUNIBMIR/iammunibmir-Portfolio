import { Badge } from '@/components/ui/badge';
import profileImage from '../assets/images/Me.jpeg';

const About = () => {
  const skills = [
    "Python", "C", "C#", "Java", "Tailwind", "React", 
    "SQL & PostgreSQL", "AWS", "Git", "Machine Learning", 
    "VR Environment Development"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        {/* Profile Row */}
        <div className="flex p-4 mb-12 opacity-0 animate-fade-in-up">
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
            <div className="flex gap-4">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32 border-2 border-primary/20 shadow-glow hover:scale-105 transition-all-smooth"
                style={{ backgroundImage: `url(${profileImage})` }}
              />
              <div className="flex flex-col justify-center">
                <p className="text-foreground text-[22px] font-bold leading-tight tracking-[-0.015em]">Munib Mir</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">CS Honours Student & Developer</p>
                <p className="text-muted-foreground text-base font-normal leading-normal">
                  Driven by innovation and passionate about creating impactful solutions through technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {/* About Me */}
          <div className="opacity-0 animate-fade-in-left animate-delay-200">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="hover:text-foreground transition-colors duration-300">
                I'm a third-year Computer Science Honours student at the University of Alberta with a passion for building intelligent 
                and reliable software. Over the last few years, I've built up a solid foundation in algorithms, data structures and system 
                design, as well as become fluent in Python, C, Java and modern back-end frameworks. I focus on clean architecture, 
                performance tuning, and informed use of machine learning where it adds measurable value.
              </p>
              <p className="hover:text-foreground transition-colors duration-300">
                When I'm not arm-wrestling recursive functions, you'll catch me turning spaghetti code into al-dente elegance. I believe 
                code should read like a good joke: clear setup, satisfying punchline, and zero loose ends. So, I spend equal time refining 
                logic and crafting commit messages your future self will actually thank you for. If you need someone who can optimize 
                a query, write docs that don't induce yawns, and still keep the stand-up meeting lively, I'm your engineer.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="opacity-0 animate-fade-in-right animate-delay-400">
            <h3 className="text-2xl font-bold mb-6">Interests</h3>
            <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
              Within the tech sphere, I love diving into open-source projects, competing in hackathons, and exploring new tech trends. 
              Away from the screen, I keep things simple: working out at the gym, exploring the local food scene, diving into music, 
              or enjoying quality time with friends.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;