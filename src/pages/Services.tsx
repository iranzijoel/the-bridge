import { Link } from "react-router-dom";
import { ArrowRight, Zap, Home, Building2, Sun, Cpu, Plug, Lightbulb, Battery, Smartphone, Shield, Wifi, Camera, Thermometer, Video, Wind, Tv, Speaker, Fingerprint, Lock, Power } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const services = [
  {
    id: "residential",
    icon: Home,
    title: "Residential Electrical",
    description: "Complete electrical solutions for your home, from basic repairs to full system upgrades.",
    features: [
      { icon: Plug, text: "Electrical panel upgrades" },
      { icon: Lightbulb, text: "Lighting installation & design" },
      { icon: Shield, text: "Safety inspections" },
      { icon: Zap, text: "Wiring & rewiring" },
    ],
    details: "Whether you're building a new home, renovating, or need repairs, our residential team handles everything from outlet installations to complete electrical system overhauls. We ensure your home meets all safety codes while maximizing energy efficiency.",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Electrical",
    description: "Professional electrical services for businesses, offices, and industrial facilities.",
    features: [
      { icon: Building2, text: "Office & retail installations" },
      { icon: Lightbulb, text: "Commercial lighting" },
      { icon: Shield, text: "Code compliance" },
      { icon: Zap, text: "Emergency power systems" },
    ],
    details: "From small businesses to large industrial facilities, we provide comprehensive commercial electrical services. Our team understands the unique demands of commercial environments and works efficiently to minimize downtime.",
  },
  {
    id: "solar",
    icon: Sun,
    title: "Solar & Renewable Energy",
    description: "Harness the power of the sun and reduce your energy costs with our solar solutions.",
    features: [
      { icon: Sun, text: "Solar panel installation" },
      { icon: Battery, text: "Battery storage systems" },
      { icon: Plug, text: "Grid connection" },
      { icon: Zap, text: "Energy monitoring" },
    ],
    details: "Go green and save money with our solar energy solutions. We design and install complete solar systems tailored to your energy needs, including battery storage for energy independence and backup power.",
  },
  {
    id: "smart-home",
    icon: Cpu,
    title: "Smart Home Automation",
    description: "Transform your home into an intelligent living space with cutting-edge automation.",
    features: [
      { icon: Smartphone, text: "Smart lighting control" },
      { icon: Thermometer, text: "Climate automation" },
      { icon: Camera, text: "Security systems" },
      { icon: Wifi, text: "Whole-home connectivity" },
    ],
    details: "Experience the convenience of a fully automated home. Control your lights, climate, security, and more from your smartphone or voice assistant. We integrate the latest smart home technologies for seamless living.",
  },
  {
    id: "cctv",
    icon: Video,
    title: "CCTV & Security Cameras",
    description: "Protect your property with professional surveillance camera installation and monitoring systems.",
    features: [
      { icon: Camera, text: "HD & 4K camera installation" },
      { icon: Wifi, text: "Wireless & wired systems" },
      { icon: Smartphone, text: "Remote viewing setup" },
      { icon: Shield, text: "24/7 recording solutions" },
    ],
    details: "Keep your home or business secure with our professional CCTV installation services. We install everything from single cameras to comprehensive multi-camera systems with night vision, motion detection, and remote access capabilities.",
  },
  {
    id: "ac-installation",
    icon: Wind,
    title: "AC Installation & Repair",
    description: "Complete air conditioning electrical services for residential and commercial properties.",
    features: [
      { icon: Wind, text: "Split AC installation" },
      { icon: Power, text: "Electrical wiring for AC units" },
      { icon: Thermometer, text: "Smart thermostat setup" },
      { icon: Zap, text: "Power upgrades for AC systems" },
    ],
    details: "Stay cool with our expert AC installation and electrical services. We handle all electrical requirements for air conditioning systems, including dedicated circuits, power upgrades, and smart thermostat integration for energy-efficient cooling.",
  },
  {
    id: "home-entertainment",
    icon: Tv,
    title: "Home Entertainment Systems",
    description: "Professional installation of TVs, sound systems, and complete home theater setups.",
    features: [
      { icon: Tv, text: "TV mounting & installation" },
      { icon: Speaker, text: "Surround sound systems" },
      { icon: Wifi, text: "Home theater networking" },
      { icon: Power, text: "Cable management & wiring" },
    ],
    details: "Transform your living space into an entertainment hub with our professional home theater installation services. From wall-mounted TVs to complete surround sound systems, we ensure clean cable management and optimal setup for the best viewing experience.",
  },
  {
    id: "access-control",
    icon: Fingerprint,
    title: "Access Control & Intercoms",
    description: "Secure entry systems, video intercoms, and smart doorbell installations.",
    features: [
      { icon: Lock, text: "Keyless entry systems" },
      { icon: Fingerprint, text: "Biometric access control" },
      { icon: Video, text: "Video intercom installation" },
      { icon: Smartphone, text: "Smart doorbell setup" },
    ],
    details: "Control who enters your property with modern access control solutions. We install keyless entry systems, fingerprint scanners, video intercoms, and smart doorbells that let you see and communicate with visitors from anywhere.",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              Our Services
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              Comprehensive <span className="text-primary">Electrical</span> Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From traditional electrical work to cutting-edge smart home technology, we have the expertise to power every aspect of your life.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-electric">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{service.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground">{service.description}</p>
                <p className="text-muted-foreground leading-relaxed">{service.details}</p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-accent shadow-electric">
                  <Link to="/contact">
                    Get a Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <Card className="border-border bg-card">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">What We Offer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-3 p-3 rounded-lg bg-muted">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <feature.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-sm font-medium text-foreground">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Zap className="h-12 w-12 text-primary mx-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-muted-foreground">
              Every project is unique. Contact us to discuss your specific electrical needs and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent shadow-electric">
                <Link to="/contact">
                  Request a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10">
                <a href="tel:+250791372361">
                  Call Us Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;