import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { Mail, Send, Github, Linkedin, MapPin, Phone, MessageSquare, Calendar, FileText, Download } from 'lucide-react';
import ResumePDF from "@/assets/docs/Munib_Resume.pdf";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      description: "Get in touch",
      value: "munibmoienuddin@gmail.com",
      action: "Send Email",
      href: "mailto:munibmoienuddin@gmail.com"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Resume",
      description: "View my experience",
      value: "",
      action: "View Resume",
      href: ResumePDF
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      name: "GitHub",
      url: "https://github.com/IAMMUNIBMIR",
      handle: "@IAMMUNIBMIR",
      color: "hover:bg-primary/10"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/munibmoienuddin", 
      handle: "in/munibmoienuddin",
      color: "hover:bg-accent/10"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b bg-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="opacity-0 animate-fade-in-scale animate-delay-200">
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <MessageSquare className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-center">Send a Message</h3>
                  <p className="text-muted-foreground text-center">
                    Fill out the form and I'll get back to you within 24 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className="h-12 bg-muted/50 border-border/50 focus:border-primary transition-all-smooth"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="h-12 bg-muted/50 border-border/50 focus:border-primary transition-all-smooth"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello!"
                      rows={6}
                      required
                      className="resize-none bg-muted/50 border-border/50 focus:border-primary transition-all-smooth"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-12 bg-gradient-primary hover:scale-105 transition-all duration-300 shadow-glow font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 opacity-0 animate-fade-in-scale animate-delay-300">
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group shadow-card border-border/50 hover-lift bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{method.title}</h3>
                        <p className="text-muted-foreground text-sm">{method.description}</p>
                        <p className="font-medium text-primary">{method.value}</p>
                      </div>
                      <Button variant="outline" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <a href={method.href}>{method.action}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>


            {/* Social Links */}
            <Card className="shadow-card border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-4 text-center">Connect on Social</h3>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-2 p-4 rounded-lg border border-border/50 transition-all-smooth ${social.color} group`}
                    >
                      <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
                        {social.icon}
                      </div>
                      <div className="text-center">
                        <p className="font-medium text-sm">{social.name}</p>
                        <p className="text-xs text-muted-foreground">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Ending Message */}
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm text-muted-foreground text-center">
                    Ready to collaborate? Let's build something amazing together.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;