import profileImage from '../assets/images/Me.jpeg';

const About = () => {
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
          {/* About Me (shortened) */}
          <div className="opacity-0 animate-fade-in-left animate-delay-200">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">About Me</h2>
            <p className="text-lg text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300">
              I'm in my third year of Honours at the University of Alberta, Computer Science, and I like constructing intelligent and robust 
              software. Over the last few years, I've developed a strong foundation in system design, algorithms, data structures, 
              Python, C, Java, and contemporary back-end frameworks. I'm interested in clean architecture, performance tuning, and 
              the application of machine learning when it provides significant value.
            </p>
          </div>

          {/* Leadership & Achievements */}
          <div className="opacity-0 animate-fade-in-up animate-delay-200">
            <h3 className="text-2xl font-bold mb-6">Leadership & Achievements</h3>

            {/* Layout: President spans full width; Awards + External side-by-side below */}
            <div className="grid gap-4 md:grid-cols-2">
              {/* President — full-width row */}
              <div className="md:col-span-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 hover:bg-card/70 transition-all duration-300 hover:scale-105 hover:shadow-glow">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-primary">Current Role</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">President</h4>
                <p className="text-muted-foreground mb-2">Pakistani Students Association (PSA)</p>
                <p className="text-sm text-muted-foreground">Sep 2025 – Aug 2026 • University of Alberta</p>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Executive Leadership: Direct and mentor 15-member leadership team through strategic planning, weekly executive meetings, and one-on-one development sessions to meet organizational KPIs.</li>
                  <li>Event Management: Own end-to-end execution of flagship events (BBQ Night, Qawwali Night) like management of stakeholders, negotiation with vendors, and budget improvisation.</li>
                  <li>Financial Authority: Serve as main finance signing authority, directing annual budgets, P&L review, and strategic resource allocation across various initiatives.</li>
                  <li>Partnership Building: Form and preserve strategic campus partnerships in keeping with safety expectations and institutional regulations.</li>
                </ul>
              </div>

              {/* Awards card (left) */}
              <div className="bg-card/30 backdrop-blur-sm border border-muted/20 rounded-lg p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-accent">Recognitions</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">Awards & Honors</h4>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Dean’s List (2024–25)</li>
                  <li>Dean’s Research Award (2025)</li>
                </ul>
              </div>

              {/* External Executive (right) */}
              <div className="bg-card/30 backdrop-blur-sm border border-muted/20 rounded-lg p-6 hover:bg-card/50 transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm font-medium text-muted-foreground">Previous Role</span>
                </div>
                <h4 className="text-xl font-bold text-foreground mb-2">External Executive</h4>
                <p className="text-muted-foreground mb-2">Pakistani Students Association (PSA)</p>
                <p className="text-sm text-muted-foreground">Jan 2024 – Aug 2025 • University of Alberta</p>
                <ul className="mt-3 text-sm text-muted-foreground list-disc pl-5 space-y-1">
                  <li>Sole external lead for sponsorships and partnerships.</li>
                  <li>Secured $5,000+ in sponsorships for flagship Qawwali Night; managed partner outreach, negotiation, and deliverables.</li>
                  <li>Closed sponsors for BBQ Night and additional PSA events; owned contracts, invoicing, and ongoing partner relations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
