import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-black via-[#1a0000] to-[#330000] text-white py-24 px-6 text-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/baccarat-bg.jpg')] bg-cover bg-center opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-3xl mx-auto"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-yellow-400 to-red-500">
          Welcome to Baccarat Waitlist
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-300">
          Experience the most exclusive Baccarat experience — reserve your place now.
        </p>
        <Button className="mt-8 bg-gradient-to-r from-red-700 via-red-600 to-yellow-500 hover:scale-105 transform transition-all duration-300 text-white text-lg px-10 py-6 rounded-full shadow-lg hover:shadow-red-500/40">
          Join the Waitlist
        </Button>
      </motion.div>
    </section>
  );
}
