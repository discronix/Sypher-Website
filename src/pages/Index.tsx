import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideShieldCheck, LucideUsers, LucideTicket, LucideShieldAlert, LucideMusic, LucideUserCog, LucideClock, LucideChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Commands from "@/components/Commands";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  const navItems = {
    "Main": ["home", "commands", "premium"],
    "Legal": ["terms", "privacy"]
  };

  const features = [
    { icon: LucideShieldCheck, title: "Fastest Antinuke", description: "Protect your server from malicious attacks and unauthorized access with our advanced Anti-Nuke system." },
    { icon: LucideUsers, title: "Welcomer", description: "A warm and personalized welcome system to greet new members joining our community!" },
    { icon: LucideTicket, title: "Tickets System", description: "Efficiently manage and resolve user inquiries with our advanced ticketing solution." },
    { icon: LucideShieldAlert, title: "Automated Moderation", description: "Keep your server safe with advanced moderation features like antispam, antilink." },
    { icon: LucideMusic, title: "Music Playback", description: "Play your favorite tracks from YouTube, Spotify, and more, directly in your server." },
    { icon: LucideUserCog, title: "Custom Roles", description: "Create and manage custom roles to make your server unique." },
    { icon: LucideClock, title: "24/7 Uptime", description: "Always online, so your server never misses out on the action." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <header className="relative overflow-hidden py-20 text-center">
        <div className="container px-4 mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl -z-10" />
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src="https://cdn.discordapp.com/attachments/1335595045780324382/1340555663973285948/1000439278_2.gif?ex=67b2c940&is=67b177c0&hm=96b7033de30ae1eb79545ffea832fd2d6fffe9427a1584a82ce7064f98bc6628"
              alt="Sypher Logo"
              className="w-36 h-36 mx-auto rounded-full border-4 border-white shadow-2xl animate-float ring-4 ring-purple-200"
            />
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Sypher - Your Ultimate Discord Bot
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Powerful, Efficient, and Easy to Use. Enhance your Discord server today!
          </motion.p>
        </div>
      </header>

      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md py-4">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {navItems["Main"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === section 
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform -translate-y-0.5" 
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
            <div className="relative">
              <button
                onClick={() => setIsLegalOpen(!isLegalOpen)}
                className="px-6 py-2.5 rounded-lg font-medium transition-all duration-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 flex items-center gap-2"
              >
                Legal
                <LucideChevronDown className={`w-4 h-4 transition-transform ${isLegalOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLegalOpen && (
                <div className="absolute top-full mt-2 w-48 rounded-lg bg-white shadow-lg py-2 animate-fade-in">
                  <Link
                    to="/terms"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Terms of Service
                  </Link>
                  <Link
                    to="/privacy"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-20"
          >
            <div className="container px-4 mx-auto">
              <div className="text-center mb-20">
                <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Make your server smarter with Sypher
                </h2>
                <div className="flex justify-center gap-6">
                  <a
                    href="https://dsc.gg/sypher-invite"
                    target="_blank"
                    className="px-8 py-4 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Invite Sypher Now
                  </a>
                  <a
                    href="https://dsc.gg/sypher-support"
                    target="_blank"
                    className="px-8 py-4 rounded-lg font-medium text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Join Support Server
                  </a>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <feature.icon className="w-12 h-12 text-purple-500 mb-6 mx-auto" />
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === "commands" && (
          <motion.section
            key="commands"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Commands />
          </motion.section>
        )}

        {activeSection === "premium" && (
          <motion.section
            key="premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-20"
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className="p-10 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-xl">
                <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Premium Features
                </h2>
                <p className="text-center text-gray-600 text-lg mb-10">
                  Unlock the full potential of Sypher with these amazing premium features:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    "Priority Support",
                    "Exclusive Premium Commands",
                    "Increased Automation Limits",
                    "Advanced Moderation Features",
                    "Advanced Antinuke System",
                    "Premium Role in Support Server",
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === "terms" && (
          <motion.section
            key="terms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16"
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Terms & Conditions</h2>
                <div className="space-y-6">
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">1.</span> By using Soward, you agree to follow the Discord Terms of Service and Community Guidelines.
                    </p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">2.</span> We reserve the right to modify features and pricing without notice.
                    </p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg">
                    <p className="text-gray-700">
                      <span className="font-semibold">3.</span> The use of Soward for malicious activities is strictly prohibited and will result in a ban.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="mt-20 py-8 bg-gradient-to-r from-blue-500/5 to-purple-500/5 border-t border-gray-200">
        <div className="container px-4 mx-auto">
          <p className="text-center text-gray-600">
            © 2024 Sypher | Developed with passion by Doremxn
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/terms" className="text-gray-600 hover:text-gray-900">Terms</Link>
            <Link to="/privacy" className="text-gray-600 hover:text-gray-900">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
