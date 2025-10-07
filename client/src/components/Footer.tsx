import { Spade } from "lucide-react";
import cardHandImg from "@assets/240_F_115438689_ovJDITK0ku1u2lwbqMz7DMN1AI4q5xcj_1759875111099.jpg";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-yellow-500 flex items-center justify-center">
                <Spade className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif text-2xl font-bold text-foreground">
                Baccarat Elite
              </span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              The most exclusive baccarat community for serious players seeking professional strategies and VIP access.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-testid="link-about">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-testid="link-features">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-testid="link-pricing">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/60 hover:text-primary transition-colors" data-testid="link-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Already Member */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Already a Member?</h4>
            <p className="text-sm text-foreground/60 mb-4">
              Access your exclusive member dashboard
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
              data-testid="link-member-login"
            >
              Member Login →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/50">
            © 2025 Baccarat Elite. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors" data-testid="link-privacy">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-primary transition-colors" data-testid="link-terms">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
