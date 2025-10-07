import { CheckCircle2, Sparkles } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface SuccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessModal({ open, onClose }: SuccessModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="backdrop-blur-2xl bg-background/95 border-white/20 max-w-md">
        <div className="text-center py-6">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-yellow-500 mb-6 animate-fadeIn">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>

          {/* Success Message */}
          <h3 className="font-serif text-3xl font-bold text-foreground mb-3">
            Welcome to the Elite!
          </h3>
          <p className="text-foreground/70 mb-6 leading-relaxed">
            You've secured your spot on our exclusive waitlist. Check your email for a confirmation and next steps.
          </p>

          {/* What's Next */}
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-white/10 mb-6 text-left">
            <div className="flex items-start gap-3 mb-3">
              <Sparkles className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">What happens next?</h4>
                <ul className="text-sm text-foreground/70 space-y-1">
                  <li>• Email confirmation within 5 minutes</li>
                  <li>• Personal invitation to our platform</li>
                  <li>• Exclusive onboarding session</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <Button
            onClick={onClose}
            className="w-full h-12 rounded-full bg-gold-gradient text-white font-semibold hover:scale-105 transition-transform"
            data-testid="button-close-success"
          >
            Got it, thanks!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
