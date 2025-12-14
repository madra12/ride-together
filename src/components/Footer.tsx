import { Link } from "react-router-dom";
import { Car, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Car className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">RideShare</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm">
              Connecting travelers, reducing costs, and building a sustainable future through shared journeys.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Find a Ride</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Offer a Ride</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">How it Works</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Popular Routes</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">About Us</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Careers</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Press</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Help Center</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Safety</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Terms of Service</Link></li>
              <li><Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 RideShare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
