import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlist } from "@shared/schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Check, Loader2, Crown } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface WaitlistFormProps {
  onSuccess?: () => void;
}

export default function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Welcome to Baccarat Elite!",
      description: "You've been added to our exclusive waitlist. Check your email for confirmation.",
    });
    
    if (onSuccess) {
      onSuccess();
    }
  };

  const countryCodes = [
    { code: "+1", country: "🇺🇸 US/CA" },
    { code: "+44", country: "🇬🇧 UK" },
    { code: "+61", country: "🇦🇺 AU" },
    { code: "+33", country: "🇫🇷 FR" },
    { code: "+49", country: "🇩🇪 DE" },
    { code: "+86", country: "🇨🇳 CN" },
    { code: "+81", country: "🇯🇵 JP" },
  ];

  return (
    <div className="relative backdrop-blur-2xl bg-white/5 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
      {/* Glow Effect */}
      <div className="absolute -inset-px bg-gradient-to-r from-primary/20 to-yellow-500/20 rounded-3xl blur-xl opacity-50" />
      
      <div className="relative">
        {/* Form Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 mb-4">
            <Crown className="w-8 h-8 text-white" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Join the Elite
          </h2>
          <p className="text-foreground/60">
            Secure your spot in the most exclusive baccarat community
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Full Name *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="John Doe"
                      className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary/50 h-12 rounded-xl"
                      data-testid="input-fullname"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Email Address *</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="john@example.com"
                      className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary/50 h-12 rounded-xl"
                      data-testid="input-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Phone */}
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Phone Number *</FormLabel>
                  <div className="flex gap-2">
                    <Select value={selectedCountryCode} onValueChange={setSelectedCountryCode}>
                      <SelectTrigger className="w-32 bg-white/5 border-white/20 text-foreground h-12 rounded-xl" data-testid="select-country">
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
                        placeholder="555-123-4567"
                        className="flex-1 bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary/50 h-12 rounded-xl"
                        data-testid="input-phone"
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Experience Level */}
            <FormField
              control={form.control}
              name="experienceLevel"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground font-medium">Baccarat Experience *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white/5 border-white/20 text-foreground h-12 rounded-xl" data-testid="select-experience">
                        <SelectValue placeholder="Select your experience level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner (0-1 year)</SelectItem>
                      <SelectItem value="intermediate">Intermediate (1-3 years)</SelectItem>
                      <SelectItem value="advanced">Advanced (3-5 years)</SelectItem>
                      <SelectItem value="pro">Pro (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Referral Code (Optional) */}
            <FormField
              control={form.control}
              name="referralCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-foreground/70 font-medium">Referral Code (Optional)</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Enter code if you have one"
                      className="bg-white/5 border-white/20 text-foreground placeholder:text-foreground/40 focus:ring-2 focus:ring-primary/50 h-12 rounded-xl"
                      data-testid="input-referral"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-14 rounded-full bg-gold-gradient text-white font-semibold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
              data-testid="button-submit"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Joining Waitlist...
                </>
              ) : (
                <>
                  <Check className="w-5 h-5 mr-2" />
                  Join the Waitlist
                </>
              )}
            </Button>

            {/* Privacy Notice */}
            <p className="text-xs text-center text-foreground/50">
              <Check className="w-3 h-3 inline mr-1 text-primary" />
              Your information is secure and will only be used for waitlist notifications
            </p>
          </form>
        </Form>
      </div>
    </div>
  );
}
