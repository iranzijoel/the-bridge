import { Link } from "react-router-dom";
import { ArrowRight, Zap, Target, Eye, Users, Award, Calendar, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";

const values = [
  {
    title: "Integrity",
    description: "We operate with honesty and transparency in every interaction.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest quality in every project we undertake.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction and safety are our top priorities.",
  },
  {
    icon: Wrench,
    title: "Innovation",
    description: "We embrace new technologies and methods to serve you better.",
  },
];

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Emergency Support" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Zap className="h-4 w-4" />
              About Us
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground">
              Building <span className="text-primary">Connections</span> Through Excellence
            </h1>
            <p className="text-lg text-muted-foreground">
              The Bridge Installation Group Electronics is your trusted partner for all electrical needs, delivering quality and reliability since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The Bridge Installation Group Electronics was founded with a simple mission: to provide exceptional electrical services that bridge the gap between cutting-edge technology and everyday needs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What started as a small team of dedicated electricians has grown into a full-service electrical company serving residential, commercial, and industrial clients. Our commitment to quality workmanship and customer satisfaction has made us a trusted name in the community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we continue to expand our services to include solar energy solutions and smart home automation, helping our clients embrace the future of electrical technology while maintaining the same personal touch that has defined us from day one.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <Zap className="h-24 w-24 text-primary mx-auto" />
                  <p className="text-2xl font-bold text-foreground">Powering Excellence</p>
                  <p className="text-muted-foreground">Since Day One</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border bg-card hover:shadow-electric transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide safe, reliable, and innovative electrical solutions that power homes and businesses while exceeding customer expectations through exceptional service and technical expertise.
                </p>
              </CardContent>
            </Card>
            <Card className="border-border bg-card hover:shadow-electric transition-shadow duration-300">
              <CardContent className="p-8 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading electrical services provider in our region, recognized for our commitment to sustainability, innovation, and building lasting relationships with our clients.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Our <span className="text-primary">Values</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-electric transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  {value.icon && (
                    <div className="w-14 h-14 mx-auto rounded-full bg-primary flex items-center justify-center shadow-electric">
                      <value.icon className="h-7 w-7 text-primary-foreground" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-card-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help power your next project.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-accent shadow-electric">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;