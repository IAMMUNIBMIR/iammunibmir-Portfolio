import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-secondary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--accent))_0%,transparent_50%)] opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '2s'
    }} />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-foreground font-semibold">Hi, I'm</span>
              <span className="block gradient-text font-semibold">Munib Mir</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-light">A Computing Science Honors Student & Developer</p>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Combining academic rigor with hands on development to create tools that make a real impact.
            Currently pursuing Computer Science and exploring the endless possibilities of technology.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="gradient" size="xl" onClick={() => scrollToSection('#projects')} className="animate-glow">
              View My Work
            </Button>
            <Button variant="outline" size="xl" onClick={() => scrollToSection('#contact')}>
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            <a href="https://github.com/IAMMUNIBMIR" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/munibmoienuddin" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Linkedin size={28} />
            </a>
            <a href="mailto:munibmoienuddin@gmail.com" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              <Mail size={28} />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button onClick={() => scrollToSection('#about')} className="animate-bounce text-muted-foreground hover:text-primary transition-colors duration-200">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;