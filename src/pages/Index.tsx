import { Link } from "react-router-dom";
import { ArrowRight, Zap, Home, Building2, Sun, Cpu, Video, Wind, Tv, Shield, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const services = [
  {
    icon: Home,
    title: "Residential Electrical",
    description: "Complete home electrical solutions from repairs to full rewiring.",
    link: "/services#residential",
  },
  {
    icon: Building2,
    title: "Commercial Electrical",
    description: "Professional electrical services for businesses and industrial facilities.",
    link: "/services#commercial",
  },
  {
    icon: Sun,
    title: "Solar & Renewable",
    description: "Harness the power of the sun with our solar installation services.",
    link: "/services#solar",
  },
  {
    icon: Cpu,
    title: "Smart Home Automation",
    description: "Transform your home with intelligent automation systems.",
    link: "/services#smart-home",
  },
  {
    icon: Video,
    title: "CCTV & Security",
    description: "Protect your property with professional camera installation.",
    link: "/services#cctv",
  },
  {
    icon: Wind,
    title: "AC Installation",
    description: "Expert air conditioning electrical services for homes & offices.",
    link: "/services#ac-installation",
  },
  {
    icon: Tv,
    title: "Home Entertainment",
    description: "TV mounting, surround sound, and home theater setup.",
    link: "/services#home-entertainment",
  },
  {
    icon: Shield,
    title: "Access Control",
    description: "Smart doorbells, intercoms, and keyless entry systems.",
    link: "/services#access-control",
  },
];

const features = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your peace of mind.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency Service",
    description: "Available around the clock for urgent electrical needs.",
  },
  {
    icon: Award,
    title: "Expert Technicians",
    description: "Highly trained and experienced electrical professionals.",
  },
  {
    icon: CheckCircle,
    title: "Guaranteed Work",
    description: "All our work comes with a satisfaction guarantee.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              Professional Electrical & Electronic Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight">
              Powering Your World with{" "}
              <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              From residential wiring to commercial installations, solar energy to CCTV cameras, AC units to smart home automation – we deliver reliable electrical solutions that keep you connected.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent shadow-electric animate-pulse-glow">
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <Link to="/services">
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive electrical and electronic solutions tailored to meet your residential, commercial, and security needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-electric transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-accent transition-colors"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Why Choose <span className="text-primary">The Bridge</span>?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional electrical services with professionalism and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-electric">
                  <feature.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Zap className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Power Up Your Project?
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today for a free consultation and quote. Our expert team is ready to bring your electrical vision to life.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent shadow-electric">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;