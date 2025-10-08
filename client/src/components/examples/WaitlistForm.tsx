import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Waitlist joined with email: ${email}`);
    setEmail("");
  };

  return (
    <motion.section
      className="bg-[#1a0000] py-20 px-6 text-center text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gradient bg-gradient-to-r from-yellow-400 to-red-600 bg-clip-text text-transparent">
        Join the Exclusive Waitlist
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto"
      >
        <Input
          type="email"
          placeholder="Enter your email"
          className="px-6 py-3 rounded-full bg-gray-900 border border-red-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          type="submit"
          className="bg-gradient-to-r from-red-700 to-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-md hover:shadow-yellow-500/30"
        >
          Join Now
        </Button>
      </form>
    </motion.section>
  );
}
