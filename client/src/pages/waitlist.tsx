import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Check, Loader2, CheckCircle2, Spade } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50">
                <Spade className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">BACCARAT</span>
            </div>
            <div className="text-sm text-accent uppercase tracking-[0.3em] mb-6 font-semibold">EXCLUSIVE ELITE WAITLIST</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Join the most successful baccarat players. Get premium strategies with{" "}
              <span className="text-primary">99.2% accuracy.</span>
            </h1>

            {/* Stats */}
            <div className="flex justify-center gap-4 mb-10">
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
                <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
                <div className="text-3xl font-bold text-accent mb-1">$500K+</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Wins Per Month</div>
              </div>
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
                <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Coverage</div>
              </div>
            </div>
          </div>

          {/* Success Box */}
          <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-10 shadow-2xl text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/50 mb-8">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Welcome to the Elite!
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              You're now on our exclusive waitlist. We'll notify you when premium baccarat strategies become available.
            </p>

            <div className="backdrop-blur-xl bg-background/60 border border-border rounded-2xl p-6 mb-8">
              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg mb-2">ELITE ACCESS SECURED</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    You'll be among the first to get premium baccarat strategies and exclusive table access
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground leading-relaxed">
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
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50">
              <Spade className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">BACCARAT</span>
          </div>
          <div className="text-sm text-accent uppercase tracking-[0.3em] mb-6 font-semibold">EXCLUSIVE ELITE WAITLIST</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Join the most successful baccarat players. Get premium strategies with{" "}
            <span className="text-primary">99.2% accuracy.</span>
          </h1>

          {/* Stats */}
          <div className="flex justify-center gap-4 mb-10">
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
              <div className="text-3xl font-bold text-primary mb-1">99.2%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
              <div className="text-3xl font-bold text-accent mb-1">$500K+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Wins Per Month</div>
            </div>
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-xl">
              <div className="text-3xl font-bold text-primary mb-1">24/7</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Coverage</div>
            </div>
          </div>

          {/* Features */}
          <div className="flex justify-center gap-12 mb-10 text-sm">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground mb-1">REAL-TIME BACCARAT SIGNALS</div>
                <div className="text-muted-foreground">Advanced pattern analysis & table insights</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                <Check className="w-3 h-3 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground mb-1">Elite Community</div>
                <div className="text-muted-foreground">24/7 support from professional players</div>
              </div>
            </div>
          </div>
        </div>

        {/* Already a Member */}
        <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-8 mb-6 shadow-xl">
          <div className="text-center">
            <div className="text-base font-semibold text-foreground mb-3">Already a Member?</div>
            <p className="text-sm text-muted-foreground mb-6">
              Access your BACCARAT elite gaming platform
            </p>
            <Button
              className="w-full bg-red-gradient hover:opacity-90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              data-testid="button-access-members"
            >
              ACCESS MEMBERS AREA
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-6 font-medium">OR</div>

        {/* Waitlist Form */}
        <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-10 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3">Join The WAITLIST</h2>
            <p className="text-sm text-muted-foreground">
              Limited spots available for premium baccarat strategies
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm font-semibold">Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter your full name"
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 transition-all"
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
                    <FormLabel className="text-foreground text-sm font-semibold">Email *</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 transition-all"
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
                    <FormLabel className="text-foreground text-sm font-semibold">Phone Number</FormLabel>
                    <div className="flex gap-3">
                      <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                        <SelectTrigger className="w-32 bg-background border-border text-foreground h-12 rounded-xl shadow-sm" data-testid="select-country">
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
                          className="flex-1 bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 transition-all"
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
                    <FormLabel className="text-foreground text-sm font-semibold">Baccarat Experience</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm" data-testid="select-experience">
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
                <label className="text-foreground text-sm font-semibold mb-4 block">Preferred Tables</label>
                <div className="grid grid-cols-2 gap-3">
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary" />
                    <span className="text-sm text-foreground font-medium">LOW LIMIT</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary" />
                    <span className="text-sm text-foreground font-medium">HIGH LIMIT</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary" />
                    <span className="text-sm text-foreground font-medium">BANKER</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary" />
                    <span className="text-sm text-foreground font-medium">PLAYER</span>
                  </label>
                </div>
              </div>

              <FormField
                control={form.control}
                name="referralCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground text-sm font-semibold">Referral Code (Optional)</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="Enter referral code"
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 transition-all"
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
                className="w-full bg-red-gradient hover:opacity-90 text-white font-bold h-14 rounded-2xl shadow-xl shadow-primary/30 text-base transition-all hover:scale-[1.02] active:scale-[0.98] mt-6"
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

              <p className="text-xs text-center text-muted-foreground leading-relaxed pt-2">
                Limited spots available for premium access. We respect your privacy and will only use your information for waitlist notifications.
              </p>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
