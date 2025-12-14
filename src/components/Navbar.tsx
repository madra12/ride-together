import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">RideShare</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Find a Ride
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              Offer a Ride
            </Link>
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
              How it Works
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">Log in</Button>
            <Button variant="default">Sign up</Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link to="/" className="text-foreground font-medium py-2">
              Find a Ride
            </Link>
            <Link to="/" className="text-foreground font-medium py-2">
              Offer a Ride
            </Link>
            <Link to="/" className="text-foreground font-medium py-2">
              How it Works
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" className="w-full">Log in</Button>
              <Button variant="default" className="w-full">Sign up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
