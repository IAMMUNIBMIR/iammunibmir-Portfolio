import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Building, ExternalLink, Github, Zap, Code, GraduationCap, Briefcase } from 'lucide-react';
import posterPdf from '@/assets/docs/DRAPosterFinal.pdf';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineering Intern",
      company: "Modern West Tech Solutions",
      location: "Riyadh, KSA",
      period: "May 2025 - Aug 2025",
      type: "Internship",
      description: [
        "Integrated Python/Django tax-management modules into client ERPs, aligning bespoke accounting schemas with ZATCA regulations under senior mentorship",
        "Extended the VAT calculation engine to meet new e-invoicing mandates, cutting manual adjustments by 30% and accelerating compliance cycles",
        "Built unit and integration tests with pytest/unittest (90%+ coverage) to ensure regulatory adherence before production deployments",
        "Installed and configured tax-automation software on client on-prem servers; collaborated with IT teams to resolve integration/performance issues",
        "Authored technical documentation and led client workshops to onboard IT teams to new tax-reporting features"
      ],
      technologies: ["Python", "Django", "ERP Integration", "Pytest", "Unittest", "ZATCA E-Invoicing", "Linux", "Git"]
    },

    {
      "title": "Virtual Reality Research Assistant — Dean's Research Award Project",
      "company": "SMART Lab, University of Alberta", 
      "location": "Edmonton, AB",
      "period": "Jan 2025 - Apr 2025",
      "type": "Research Internship",
      "description": [
        "Designed and implemented an end-to-end development of a VR simulation in Unity (C#) that models layer-by-layer 3D printing for lunar habitat construction, supporting seamless environment switching between Earth and Moon conditions.",
        "Designed a scalable additive-manufacturing pipeline with procedural layer activation, real-time telemetry collection, and automated constraint validation. This cut down on debugging time and made data-driven demos possible.",
        "Implemented intuitive XR interactions using Oculus Integration and custom UI panels, enabling sub-30-second user onboarding via streamlined model selection and placement workflows.",
        "We profiled and improved rendering and physics (batching, texture compression, targeted fixes) to keep frame rates high in complex, dynamic scenes that are ready for VR. This made the experience more comfortable and reliable for users.",
        "Partnered with graduate researchers and faculty; presented at the Dean's Research Award symposium and iterated rapidly on feedback from judges to strengthen usability and robustness."
      ],
      "technologies": [
        "Unity (C#)", "XR Interaction Toolkit", "Oculus Integration", 
        "Unity Physics & Rendering Pipeline", "Procedural Generation",
        "Performance Profiling & Optimization", "Real-time Systems",
        "Git Version Control", "Technical Documentation"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-primary text-primary-foreground";
      case "Education":
        return "bg-accent text-accent-foreground";
      case "Research Internship":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getCompanyIcon = (company: string) => {
    if (company.toLowerCase().includes('university') || company.toLowerCase().includes('college')) {
      return <GraduationCap className="w-5 h-5 text-primary" />;
    }
    return <Briefcase className="w-5 h-5 text-primary" />;
  };

  const ExperienceDetailsModal = ({ experience }: { experience: any }) => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold gradient-text">{experience.title}</DialogTitle>
      </DialogHeader>
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-4 bg-muted/20 rounded-lg">
          <Building className="w-8 h-8 text-primary" />
          <div>
            <h3 className="font-semibold text-lg">{experience.company}</h3>
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>{experience.location}</span>
              <span>•</span>
              <Calendar className="w-4 h-4" />
              <span>{experience.period}</span>
            </div>
          </div>
          <Badge className={getTypeColor(experience.type)} variant="secondary">
            {experience.type}
          </Badge>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Key Responsibilities & Achievements</h3>
          <ul className="space-y-3">
            {experience.description.map((item: string, index: number) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground">
                <Zap className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Technologies & Skills</h3>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs">
                <Code className="w-3 h-3 mr-1" />
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </DialogContent>
  );

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience, education, and key milestones
          </p>
        </div>

        {/* Vertical Centered Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>
          
          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-primary rounded-full border-4 border-background shadow-glow z-10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-background rounded-full"></div>
                </div>
                
                {/* Content card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Card className={`shadow-card border-border/50 hover-lift bg-card/50 backdrop-blur-sm opacity-0 animate-fade-in-scale animate-delay-${(index + 1) * 100} cursor-pointer transition-all-smooth`}>
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-2">
                            <Badge className={getTypeColor(experience.type)} variant="secondary">
                              {experience.type}
                            </Badge>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              <span>{experience.period}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-1">
                            <CardTitle className="text-lg font-bold text-foreground">
                              {experience.title}
                            </CardTitle>
                            {index === 1 && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="ml-2 h-8"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(posterPdf, '_blank');
                                }}
                              >
                                <ExternalLink className="w-3 h-3 mr-1" />
                                Poster
                              </Button>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            {getCompanyIcon(experience.company)}
                            <span className="font-medium">{experience.company}</span>
                            <span>•</span>
                            <MapPin className="w-3 h-3" />
                            <span>{experience.location}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4 pt-0">
                          <ul className="space-y-2">
                            {experience.description.slice(0, 3).map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1 pt-2">
                            {experience.technologies.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                                {tech}
                              </Badge>
                            ))}
                            {experience.technologies.length > 4 && (
                              <Badge variant="outline" className="text-xs px-2 py-0.5">
                                +{experience.technologies.length - 4}
                              </Badge>
                            )}
                          </div>
                          <div className="text-center pt-2 border-t border-border/30">
                            <span className="text-xs text-muted-foreground">Click to view details</span>
                          </div>
                        </CardContent>
                      </Card>
                    </DialogTrigger>
                    <ExperienceDetailsModal experience={experience} />
                  </Dialog>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;