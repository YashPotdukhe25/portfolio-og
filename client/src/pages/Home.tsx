import { motion } from "framer-motion";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Database, 
  Layout, 
  Brain, 
  Terminal, 
  ExternalLink,
  ArrowRight,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import heroBg from "@assets/generated_images/abstract_blue-purple_technology_background_for_hero_section.png";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

// Form Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Home() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof contactSchema>) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  const projects = [
    {
      title: "AI-Powered Size Chart Generator",
      description: "An intelligent tool that generates accurate clothing size charts using computer vision and machine learning algorithms.",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      icon: <Brain className="h-6 w-6 text-primary" />,
    },
    {
      title: "Vehicle Detection & Counting",
      description: "Real-time traffic analysis system using OpenCV and Python to detect and count vehicles in video feeds.",
      tags: ["Python", "OpenCV", "YOLO", "Data Analysis"],
      icon: <Terminal className="h-6 w-6 text-primary" />,
    },
    {
      title: "Currency Rate Notifier",
      description: "Automated system that tracks exchange rates and sends real-time notifications for target currency values.",
      tags: ["C++", "API Integration", "Automation"],
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      title: "Personal Cloud Storage",
      description: "Secure, AI-enhanced cloud storage solution with smart categorization and efficient file retrieval.",
      tags: ["React", "Node.js", "AWS", "AI"],
      icon: <Layout className="h-6 w-6 text-primary" />,
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 95 },
    { name: "React", level: 85 },
    { name: "Python", level: 80 },
    { name: "C++", level: 75 },
    { name: "SQL/DBMS", level: 80 },
    { name: "AI & ML", level: 70 },
    { name: "Git", level: 85 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
        </div>

        <div className="container relative z-20 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm rounded-full border-primary/20 bg-primary/10 text-primary font-medium">
              Available for Hire
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-heading tracking-tight mb-6">
              Hi, I’m <span className="text-gradient">Yash Potdukhe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8 font-light">
              Web Developer & AI/ML Enthusiast crafting intelligent digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-lg px-8 rounded-full" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 rounded-full" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">About Me</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Web Developer and AI & Data Science Engineering student with a knack for building robust applications and exploring the frontiers of machine learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With experience from my internship at <span className="text-primary font-semibold">Talent Battle</span>, I've honed my skills in creating responsive user interfaces, integrating APIs, and solving complex problems with code. I bridge the gap between elegant web design and intelligent backend logic.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" asChild>
                  <a href="https://github.com/YashPotdukhe25" target="_blank"><Github className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="https://www.linkedin.com/in/yashpotdukhe25" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="mailto:yashpotdukhe25@gmail.com"><Mail className="h-5 w-5" /></a>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-purple-900/20 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                 <Code2 className="w-32 h-32 text-primary opacity-50" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Technical Arsenal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, scalable, and intelligent applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all group"
              >
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{skill.name}</h3>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">Showcasing innovation in Web Dev and AI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                  <CardHeader>
                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      {project.icon}
                    </div>
                    <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="w-full group">
                      View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Experience */}
      <section id="experience" className="py-20">
        <div className="container px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-center mb-16">Experience</h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(124,58,237,0.5)]" />
              
              <div className="bg-card p-6 rounded-xl border border-border">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">Web Developer Intern</h3>
                    <p className="text-lg font-medium">Talent Battle</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0">2023 - Present</Badge>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Built responsive UIs and integrated REST APIs for seamless data flow.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Debugged and optimized frontend performance, improving load times by 20%.
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                    Developed a C++ Currency Converter & Rate Notifier as a side module.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Get In Touch</h2>
            <p className="text-muted-foreground">Have a project in mind? Let's build something amazing together.</p>
          </div>

          <Card className="bg-card border-border">
            <CardContent className="p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell me about your project..." 
                            className="min-h-[150px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full md:w-auto" size="lg">
                    Send Message <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border bg-background">
        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Yashuu. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/YashPotdukhe25" className="text-muted-foreground hover:text-primary transition-colors text-sm">GitHub</a>
            <a href="https://www.linkedin.com/in/yashpotdukhe25" className="text-muted-foreground hover:text-primary transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}