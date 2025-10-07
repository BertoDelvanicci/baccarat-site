import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Check, Loader2, CheckCircle2, Spade, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function WaitlistPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const { toast } = useToast();

  const form = useForm<InsertWaitlist>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      experienceLevel: "beginner",
      referralCode: "",
    },
  });

  const onSubmit = async (data: InsertWaitlist) => {
    setIsSubmitting(true);
    // TODO: Replace with actual Firebase integration
    console.log("Waitlist signup:", { ...data, phone: `${selectedCountryCode}${data.phone}` });
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
  };

  const countryCodes = [
    { code: "+1", country: "🇺🇸 +1" },
    { code: "+44", country: "🇬🇧 +44" },
    { code: "+61", country: "🇦🇺 +61" },
    { code: "+33", country: "🇫🇷 +33" },
    { code: "+49", country: "🇩🇪 +49" },
  ];

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
                <Spade className="w-6 h-6 text-background" />
              </div>
              <span className="text-2xl font-bold text-accent">BACCARAT</span>
            </div>
            <div className="text-sm text-accent uppercase tracking-wider mb-4">EXCLUSIVE ELITE WAITLIST</div>
            <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Join the most successful baccarat players. Get premium strategies with{" "}
              <span className="text-accent">99.2% accuracy.</span>
            </h1>

            {/* Stats */}
            <div className="flex justify-center gap-4 mb-8">
              <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-accent">99.2%</div>
                <div className="text-xs text-muted-foreground">Success Rate</div>
              </div>
              <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-accent">$500K+</div>
                <div className="text-xs text-muted-foreground">Wins Per Month</div>
              </div>
              <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-xs text-muted-foreground">Coverage</div>
              </div>
            </div>
          </div>

          {/* Success Box */}
          <div className="backdrop-blur-sm bg-card border border-card-border rounded-xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-6">
              <CheckCircle2 className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Welcome to the Lions Pride!
            </h2>
            <p className="text-muted-foreground mb-8">
              You're now on our exclusive waitlist. We'll notify you when premium baccarat signals become available.
            </p>

            <div className="backdrop-blur-sm bg-background/50 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3 text-left">
                <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-foreground mb-1">ELITE LIONS ACCESS SECURED</div>
                  <div className="text-sm text-muted-foreground">
                    You'll be among the first to get premium baccarat strategies
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground">
                Success!<br />
                You've been added to our waitlist.<br />
                We'll notify you when we launch!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded bg-accent flex items-center justify-center">
              <Spade className="w-6 h-6 text-background" />
            </div>
            <span className="text-2xl font-bold text-accent">BACCARAT</span>
          </div>
          <div className="text-sm text-accent uppercase tracking-wider mb-4">EXCLUSIVE ELITE WAITLIST</div>
          <h1 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Join the most successful baccarat players. Get premium strategies with{" "}
            <span className="text-accent">99.2% accuracy.</span>
          </h1>

          {/* Stats */}
          <div className="flex justify-center gap-4 mb-8">
            <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-accent">99.2%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
            <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-accent">$500K+</div>
              <div className="text-xs text-muted-foreground">Wins Per Month</div>
            </div>
            <div className="backdrop-blur-sm bg-card/50 border border-card-border rounded-lg px-6 py-3">
              <div className="text-2xl font-bold text-accent">24/7</div>
              <div className="text-xs text-muted-foreground">Coverage</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex justify-center gap-12 mb-8 text-sm">
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div className="text-left">
                <div className="font-semibold text-foreground">REAL-TIME BACCARAT SIGNALS</div>
                <div className="text-muted-foreground">Advanced pattern analysis & table insights</div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Check className="w-5 h-5 text-accent mt-0.5" />
              <div className="text-left">
                <div className="font-semibold text-foreground">Elite Community</div>
                <div className="text-muted-foreground">24/7 support from professional players</div>
              </div>
            </div>
          </div>
        </div>

        {/* Already a Member */}
        <div className="backdrop-blur-sm bg-card border border-card-border rounded-xl p-6 mb-6">
          <div className="text-center">
            <div className="text-sm font-medium text-foreground mb-3">Already a Member?</div>
            <p className="text-sm text-muted-foreground mb-4">
              Access your BACCARAT elite gaming platform
            </p>
            <Button
              className="w-full bg-cyan-gradient hover:opacity-90 text-background font-semibold h-12 rounded-lg"
              data-testid="button-access-members"
            >
              ACCESS MEMBERS AREA
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-4">OR</div>

        {/* Waitlist Form */}
        <div className="backdrop-blur-sm bg-card border border-card-border rounded-xl p-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-accent mb-2">Join The WAITLIST</h2>
            <p className="text-sm text-muted-foreground">
              Limited spots available for premium baccarat signals
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your full name"
                        className="bg-background border-border text-foreground h-11 rounded-lg"
                        data-testid="input-fullname"
                      />
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
                    <FormLabel className="text-foreground text-sm">Email *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-background border-border text-foreground h-11 rounded-lg"
                        data-testid="input-email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Phone Number</FormLabel>
                    <div className="flex gap-2">
                      <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                        <SelectTrigger className="w-28 bg-background border-border text-foreground h-11 rounded-lg" data-testid="select-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((item) => (
                            <SelectItem key={item.code} value={item.code}>
                              {item.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormControl>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="Your phone number"
                          className="flex-1 bg-background border-border text-foreground h-11 rounded-lg"
                          data-testid="input-phone"
                        />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="experienceLevel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Baccarat Experience</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background border-border text-foreground h-11 rounded-lg" data-testid="select-experience">
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                        <SelectItem value="pro">ELITE (5+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div>
                <Label className="text-foreground text-sm mb-3 block">Preferred Tables</Label>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="banker" className="w-4 h-4 rounded border-border bg-background" />
                    <label htmlFor="banker" className="text-sm text-foreground">Banker Bets</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="vip" className="w-4 h-4 rounded border-border bg-background" />
                    <label htmlFor="vip" className="text-sm text-foreground">VIP Tables</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="player" className="w-4 h-4 rounded border-border bg-background" />
                    <label htmlFor="player" className="text-sm text-foreground">Player Bets</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="high" className="w-4 h-4 rounded border-border bg-background" />
                    <label htmlFor="high" className="text-sm text-foreground">High Stakes</label>
                  </div>
                </div>
              </div>

              <FormField
                control={form.control}
                name="referralCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm">Referral Code (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter referral code"
                        className="bg-background border-border text-foreground h-11 rounded-lg"
                        data-testid="input-referral"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cyan-gradient hover:opacity-90 text-background font-semibold h-12 rounded-lg"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Joining...
                  </>
                ) : (
                  "Join The WAITLIST"
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                Limited spots available for premium access. We respect your privacy and will only use your information for waitlist notifications.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
