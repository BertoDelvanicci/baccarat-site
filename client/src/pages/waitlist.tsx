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

// --- Firebase imports ---
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
// ------------------------

const countryCodes = [
  { code: "+1", country: "🇺🇸 United States", flag: "🇺🇸", areaCode: "+1" },
  { code: "+1", country: "🇨🇦 Canada", flag: "🇨🇦", areaCode: "+1" },
  { code: "+44", country: "🇬🇧 United Kingdom", flag: "🇬🇧", areaCode: "+44" },
  { code: "+61", country: "🇦🇺 Australia", flag: "🇦🇺", areaCode: "+61" },
  { code: "+91", country: "🇮🇳 India", flag: "🇮🇳", areaCode: "+91" },
  { code: "+86", country: "🇨🇳 China", flag: "🇨🇳", areaCode: "+86" },
  { code: "+81", country: "🇯🇵 Japan", flag: "🇯🇵", areaCode: "+81" },
  { code: "+49", country: "🇩🇪 Germany", flag: "🇩🇪", areaCode: "+49" },
  { code: "+33", country: "🇫🇷 France", flag: "🇫🇷", areaCode: "+33" },
  { code: "+39", country: "🇮🇹 Italy", flag: "🇮🇹", areaCode: "+39" },
  { code: "+34", country: "🇪🇸 Spain", flag: "🇪🇸", areaCode: "+34" },
  { code: "+7", country: "🇷🇺 Russia", flag: "🇷🇺", areaCode: "+7" },
  { code: "+82", country: "🇰🇷 South Korea", flag: "🇰🇷", areaCode: "+82" },
  { code: "+55", country: "🇧🇷 Brazil", flag: "🇧🇷", areaCode: "+55" },
  { code: "+52", country: "🇲🇽 Mexico", flag: "🇲🇽", areaCode: "+52" },
  { code: "+27", country: "🇿🇦 South Africa", flag: "🇿🇦", areaCode: "+27" },
  { code: "+234", country: "🇳🇬 Nigeria", flag: "🇳🇬", areaCode: "+234" },
  { code: "+20", country: "🇪🇬 Egypt", flag: "🇪🇬", areaCode: "+20" },
  { code: "+90", country: "🇹🇷 Turkey", flag: "🇹🇷", areaCode: "+90" },
  { code: "+971", country: "🇦🇪 UAE", flag: "🇦🇪", areaCode: "+971" },
  { code: "+966", country: "🇸🇦 Saudi Arabia", flag: "🇸🇦", areaCode: "+966" },
  { code: "+65", country: "🇸🇬 Singapore", flag: "🇸🇬", areaCode: "+65" },
  { code: "+60", country: "🇲🇾 Malaysia", flag: "🇲🇾", areaCode: "+60" },
  { code: "+62", country: "🇮🇩 Indonesia", flag: "🇮🇩", areaCode: "+62" },
  { code: "+63", country: "🇵🇭 Philippines", flag: "🇵🇭", areaCode: "+63" },
  { code: "+66", country: "🇹🇭 Thailand", flag: "🇹🇭", areaCode: "+66" },
  { code: "+84", country: "🇻🇳 Vietnam", flag: "🇻🇳", areaCode: "+84" },
  { code: "+880", country: "🇧🇩 Bangladesh", flag: "🇧🇩", areaCode: "+880" },
  { code: "+92", country: "🇵🇰 Pakistan", flag: "🇵🇰", areaCode: "+92" },
  { code: "+64", country: "🇳🇿 New Zealand", flag: "🇳🇿", areaCode: "+64" },
  { code: "+31", country: "🇳🇱 Netherlands", flag: "🇳🇱", areaCode: "+31" },
  { code: "+46", country: "🇸🇪 Sweden", flag: "🇸🇪", areaCode: "+46" },
  { code: "+47", country: "🇳🇴 Norway", flag: "🇳🇴", areaCode: "+47" },
  { code: "+45", country: "🇩🇰 Denmark", flag: "🇩🇰", areaCode: "+45" },
  { code: "+358", country: "🇫🇮 Finland", flag: "🇫🇮", areaCode: "+358" },
  { code: "+48", country: "🇵🇱 Poland", flag: "🇵🇱", areaCode: "+48" },
  { code: "+41", country: "🇨🇭 Switzerland", flag: "🇨🇭", areaCode: "+41" },
  { code: "+43", country: "🇦🇹 Austria", flag: "🇦🇹", areaCode: "+43" },
  { code: "+32", country: "🇧🇪 Belgium", flag: "🇧🇪", areaCode: "+32" },
  { code: "+351", country: "🇵🇹 Portugal", flag: "🇵🇹", areaCode: "+351" },
  { code: "+30", country: "🇬🇷 Greece", flag: "🇬🇷", areaCode: "+30" },
  { code: "+420", country: "🇨🇿 Czech Republic", flag: "🇨🇿", areaCode: "+420" },
  { code: "+36", country: "🇭🇺 Hungary", flag: "🇭🇺", areaCode: "+36" },
  { code: "+40", country: "🇷🇴 Romania", flag: "🇷🇴", areaCode: "+40" },
  { code: "+353", country: "🇮🇪 Ireland", flag: "🇮🇪", areaCode: "+353" },
  { code: "+972", country: "🇮🇱 Israel", flag: "🇮🇱", areaCode: "+972" },
  { code: "+852", country: "🇭🇰 Hong Kong", flag: "🇭🇰", areaCode: "+852" },
  { code: "+886", country: "🇹🇼 Taiwan", flag: "🇹🇼", areaCode: "+886" },
  { code: "+56", country: "🇨🇱 Chile", flag: "🇨🇱", areaCode: "+56" },
  { code: "+54", country: "🇦🇷 Argentina", flag: "🇦🇷", areaCode: "+54" },
  { code: "+57", country: "🇨🇴 Colombia", flag: "🇨🇴", areaCode: "+57" },
  { code: "+51", country: "🇵🇪 Peru", flag: "🇵🇪", areaCode: "+51" },
  { code: "+58", country: "🇻🇪 Venezuela", flag: "🇻🇪", areaCode: "+58" },
];

const formatPhoneNumber = (value: string) => {
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
  }
  return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
};

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

  // ---------- UPDATED onSubmit: sends to Firestore ----------
  const onSubmit = async (data: InsertWaitlist) => {
    setIsSubmitting(true);

    try {
      const fullPhone = `${selectedCountryCode}${data.phone}`;

      // write to Firestore collection: "waitlist_submissions"
      await addDoc(collection(db, "waitlist_submissions"), {
        fullName: data.fullName,
        email: data.email,
        phone: fullPhone,
        experienceLevel: data.experienceLevel,
        referralCode: data.referralCode || "",
        source: "website",
        status: "pending",
        submittedAt: serverTimestamp(),
      });

      toast({
        title: "Successfully Joined!",
        description: "Your waitlist application has been submitted.",
      });

      setShowSuccess(true);
    } catch (error) {
      console.error("❌ Error adding document: ", error);
      toast({
        title: "Error submitting form",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  // ---------------------------------------------------------

  if (showSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50 animate-pulse">
                <Spade className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">BACCARAT</span>
            </div>
            <div className="text-sm text-accent uppercase tracking-[0.3em] mb-6 font-semibold">EXCLUSIVE BETTING WAITLIST</div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
              Join the most successful baccarat blueprints. Get premium strategies with{" "}
              <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">99.2% accuracy.</span>
            </h1>

            {/* Stats with iOS glow */}
            <div className="flex justify-center gap-4 mb-10">
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">99.2%</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
              </div>
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-shadow">
                <div className="text-3xl font-bold text-accent mb-1 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">GLOBAL</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Strategies work globally</div>
              </div>
              <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
                <div className="text-3xl font-bold text-primary mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">24/7</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider">LIVE EDUCATION</div>
              </div>
            </div>
          </div>

          {/* Success Box with iOS glow */}
          <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-10 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-2xl shadow-primary/60 mb-8 animate-pulse">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Registration Complete!
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Your waitlist application has been successfully submitted. Our admin team will review your application and notify you once approved.
            </p>

            <div className="backdrop-blur-xl bg-background/60 border border-border rounded-2xl p-6 mb-8 shadow-xl shadow-primary/10">
              <div className="flex items-start gap-4 text-left">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 shadow-lg shadow-primary/50">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-lg mb-2 drop-shadow-[0_0_8px_rgba(239,68,68,0.3)]">APPLICATION RECEIVED</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    An admin will review your waitlist application. You'll receive an email notification once you're approved for premium baccarat strategies and exclusive table access.
                  </div>
                </div>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs text-muted-foreground leading-relaxed">
                Thank you!<br />
                We'll review your application shortly.<br />
                Check your email for updates.
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
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/50 animate-pulse">
              <Spade className="w-7 h-7 text-white" />
            </div>
            <span className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">BACCARAT</span>
          </div>
          <div className="text-sm text-accent uppercase tracking-[0.3em] mb-6 font-semibold drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]">EXCLUSIVE BETTING WAITLIST</div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Join the most successful baccarat blueprints. Get premium strategies with{" "}
            <span className="text-primary drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">99.2% accuracy.</span>
          </h1>

          {/* Stats with iOS glow */}
          <div className="flex justify-center gap-4 mb-10">
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <div className="text-3xl font-bold text-primary mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">99.2%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Success Rate</div>
            </div>
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-accent/20 hover:shadow-accent/40 transition-shadow">
              <div className="text-3xl font-bold text-accent mb-1 drop-shadow-[0_0_10px_rgba(251,191,36,0.6)]">GLOBAL</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Strategies work globally</div>
            </div>
            <div className="backdrop-blur-xl bg-card/80 border border-card-border rounded-2xl px-8 py-4 shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-shadow">
              <div className="text-3xl font-bold text-primary mb-1 drop-shadow-[0_0_10px_rgba(239,68,68,0.6)]">24/7</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">LIVE EDUCATION</div>
            </div>
          </div>
        </div>

        {/* Already a Member with iOS glow */}
        <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-8 mb-6 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow">
          <div className="text-center">
            <div className="text-base font-semibold text-foreground mb-3">Already a Member?</div>
            <p className="text-sm text-muted-foreground mb-6">
              Access your BACCARAT elite gaming platform
            </p>
            <Button
              className="w-full bg-red-gradient hover:opacity-90 text-white font-bold h-14 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 text-base transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group"
              data-testid="button-access-members"
            >
              <span className="relative z-10">ACCESS MEMBERS AREA</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </Button>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground mb-6 font-medium">OR</div>

        {/* Waitlist Form with iOS glow */}
        <div className="backdrop-blur-2xl bg-card/90 border border-card-border rounded-3xl p-10 shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-shadow">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-primary mb-3 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">Join The WAITLIST</h2>
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
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all"
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
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all"
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
                        <SelectTrigger className="w-48 bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all" data-testid="select-country">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="max-h-[300px]">
                          {countryCodes.map((item, index) => (
                            <SelectItem key={`${item.country}-${index}`} value={item.code}>
                              {item.country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <div className="relative flex-1">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm font-medium pointer-events-none">
                          {selectedCountryCode}
                        </span>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="123-456-7890"
                            value={field.value}
                            onChange={(e) => {
                              const formatted = formatPhoneNumber(e.target.value);
                              field.onChange(formatted);
                            }}
                            maxLength={12}
                            className="flex-1 bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all pl-16"
                            data-testid="input-phone"
                          />
                        </FormControl>
                      </div>
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
                        <SelectTrigger className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all" data-testid="select-experience">
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
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary shadow-sm" />
                    <span className="text-sm text-foreground font-medium">LOW LIMIT</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary shadow-sm" />
                    <span className="text-sm text-foreground font-medium">HIGH LIMIT</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary shadow-sm" />
                    <span className="text-sm text-foreground font-medium">BANKER</span>
                  </label>
                  <label className="flex items-center gap-3 bg-background border border-border rounded-xl px-4 py-3 cursor-pointer hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all">
                    <input type="checkbox" className="w-5 h-5 rounded border-border bg-background accent-primary shadow-sm" />
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
                        className="bg-background border-border text-foreground h-12 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/50 focus:shadow-lg focus:shadow-primary/30 transition-all"
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
                className="w-full bg-red-gradient hover:opacity-90 text-white font-bold h-14 rounded-2xl shadow-2xl shadow-primary/50 hover:shadow-primary/70 text-base transition-all hover:scale-[1.02] active:scale-[0.98] mt-6 relative overflow-hidden group"
                data-testid="button-submit"
              >
                <span className="relative z-10">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin inline" />
                      Joining...
                    </>
                  ) : (
                    "Join The WAITLIST"
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
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
