import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img 
              src={logo} 
              alt="The Bridge Installation Group Electronics" 
              className="h-16 w-auto"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Professional electrical and electronic services for residential, commercial, security, and smart home solutions. Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Our Services
            </h3>
            <nav className="flex flex-col gap-2">
              <Link to="/services#residential" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Residential Electrical
              </Link>
              <Link to="/services#commercial" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Commercial Electrical
              </Link>
              <Link to="/services#solar" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Solar & Renewable
              </Link>
              <Link to="/services#smart-home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Smart Home Automation
              </Link>
              <Link to="/services#cctv" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                CCTV & Security Cameras
              </Link>
              <Link to="/services#ac-installation" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AC Installation
              </Link>
              <Link to="/services#home-entertainment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home Entertainment
              </Link>
              <Link to="/services#access-control" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Access Control
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Contact Us
            </h3>
            <div className="flex flex-col gap-3">
              <a href="tel:+250791372361" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4 flex-shrink-0" />
                +250791372361
              </a>
              <a href="mailto:info@bridgeinstallation.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-4 w-4 flex-shrink-0" />
                info@bridgeinstallation.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span>Serving Greater Metropolitan Area</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Bridge Installation Group Electronics. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Licensed & Insured Electrical Contractors
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;