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

  async function onSubmit(data: z.infer<typeof contactSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  }

  const projects = [
    {
      title: "AI-Powered Size Chart Generator",
      description: "An intelligent tool that generates accurate clothing size charts using computer vision and machine learning algorithms.",
      tags: ["Python", "TensorFlow", "React", "FastAPI"],
      icon: <Brain className="h-6 w-6 text-primary" />,
      color: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Vehicle Detection & Counting",
      description: "Real-time traffic analysis system using OpenCV and Python to detect and count vehicles in video feeds.",
      tags: ["Python", "OpenCV", "YOLO", "Data Analysis"],
      icon: <Terminal className="h-6 w-6 text-primary" />,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Currency Rate Notifier",
      description: "Automated system that tracks exchange rates and sends real-time notifications for target currency values.",
      tags: ["C++", "API Integration", "Automation"],
      icon: <Database className="h-6 w-6 text-primary" />,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      title: "Personal Cloud Storage",
      description: "Secure, AI-enhanced cloud storage solution with smart categorization and efficient file retrieval.",
      tags: ["React", "Node.js", "AWS", "AI"],
      icon: <Layout className="h-6 w-6 text-primary" />,
      color: "from-purple-500/20 to-cyan-500/20",
    },
  ];

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" },
    { name: "React", level: 85, color: "from-cyan-400 to-blue-500" },
    { name: "Python", level: 80, color: "from-blue-400 to-purple-500" },
    { name: "C++", level: 75, color: "from-purple-400 to-pink-500" },
    { name: "SQL/DBMS", level: 80, color: "from-green-400 to-cyan-500" },
    { name: "AI & ML", level: 70, color: "from-pink-400 to-purple-500" },
    { name: "Git", level: 85, color: "from-red-400 to-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        {/* Animated Background with Orbs */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBg} 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background z-10" />
          
          {/* Animated Orbs */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ y: [0, 50, 0], x: [0, 25, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
            animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="container relative z-20 px-6 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tight mb-6">
              Hi, I'm <span className="text-gradient">Yash Potdukhe</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light leading-relaxed">
              I'm a Web Developer and AI/ML enthusiast focused on creating responsive websites and experimenting with machine learning concepts. I love solving problems and improving my skills.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="text-lg px-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg glow-primary" 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View My Work <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 rounded-full border-primary/40 hover:border-primary/60" 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me <Mail className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold font-heading mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
                animate={{ backgroundPosition: ["0%", "100%"] }}
              >
                About Me
              </motion.h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate Web Developer and AI & Data Science Engineering student with a knack for building robust applications and exploring the frontiers of machine learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With experience from my internship at <span className="text-primary font-semibold">Talent Battle</span>, I've honed my skills in creating responsive user interfaces, integrating APIs, and solving complex problems with code. I bridge the gap between elegant web design and intelligent backend logic.
              </p>
              <div className="flex gap-4">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild className="hover-lift glow-primary-sm">
                    <a href="https://github.com/YashPotdukhe25" target="_blank"><Github className="h-5 w-5" /></a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild className="hover-lift glow-primary-sm">
                    <a href="https://www.linkedin.com/in/yashpotdukhe25" target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5" /></a>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="icon" asChild className="hover-lift glow-primary-sm">
                    <a href="mailto:yashpotdukhe25@gmail.com"><Mail className="h-5 w-5" /></a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <motion.div 
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary/30 to-purple-900/30 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center glow-primary hover-lift"
                animate={{ rotateZ: [0, 5, 0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
                  <Code2 className="w-32 h-32 text-primary opacity-70" />
                </motion.div>
              </motion.div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">Technical Arsenal</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive toolkit for building modern, scalable, and intelligent applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 border border-primary/20 hover:border-primary/50 transition-all group hover-lift backdrop-blur-sm"
              >
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">{skill.name}</h3>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">{skill.level}%</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gradient-to-b from-background to-muted/50">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <p className="text-muted-foreground text-lg">Showcasing innovation in Web Dev and AI.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12, duration: 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className={`h-full bg-gradient-to-br ${project.color} backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all hover-lift overflow-hidden group`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="relative">
                    <motion.div 
                      className="mb-4 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors"
                      animate={{ rotate: [0, 5, 0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {project.icon}
                    </motion.div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-colors">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <Badge key={tag} variant="secondary" className="text-xs bg-primary/20 text-primary border-primary/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Internship Experience */}
      <section id="experience" className="py-24 bg-background">
        <div className="container px-6 mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Experience
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0 hover-lift"
            >
              <motion.div 
                className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary glow-primary"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <div className="bg-gradient-to-br from-primary/10 to-secondary p-6 rounded-xl border border-primary/30 hover:border-primary/60 transition-all backdrop-blur-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Web Developer Intern</h3>
                    <p className="text-lg font-medium text-foreground">Talent Battle</p>
                  </div>
                  <Badge variant="outline" className="w-fit mt-2 sm:mt-0 border-primary/40">2023 - Present</Badge>
                </div>
                
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Built responsive UIs and integrated REST APIs for seamless data flow.",
                    "Debugged and optimized frontend performance, improving load times by 20%.",
                    "Developed a C++ Currency Converter & Rate Notifier as a side module."
                  ].map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="mr-3 mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-6 mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold font-heading mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Get In Touch
            </motion.h2>
            <p className="text-muted-foreground text-lg">Have a project in mind? Let's build something amazing together.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/10 to-secondary/20 border-primary/30 backdrop-blur-sm hover-lift">
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
                              <Input placeholder="Your Name" className="bg-secondary/50 border-primary/30 hover:border-primary/50 focus:border-primary/70" {...field} />
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
                              <Input placeholder="Your Email" className="bg-secondary/50 border-primary/30 hover:border-primary/50 focus:border-primary/70" {...field} />
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
                              placeholder="Your Message" 
                              className="min-h-[150px] bg-secondary/50 border-primary/30 hover:border-primary/50 focus:border-primary/70" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button type="submit" className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 glow-primary">
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20 bg-background/50 backdrop-blur-sm">
        <div className="container px-6 mx-auto flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-6">
            <motion.a 
              href="https://github.com/YashPotdukhe25" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHub
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/yashpotdukhe25" 
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              LinkedIn
            </motion.a>
          </div>
        </div>
      </footer>
    </div>
  );
}