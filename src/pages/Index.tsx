
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LucideShieldCheck, LucideUsers, LucideTicket, LucideShieldAlert, LucideMusic, LucideUserCog, LucideClock } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="relative overflow-hidden py-16 text-center">
        <div className="container px-4 mx-auto">
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="https://images-ext-1.discordapp.net/external/VALP_6NuCDjaixXxwuqz5QM6hZ-nZZQosglbOuh9IXM/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1013771497157972008/895bc9e1e03c0bb00fef75f61444f919.png"
            alt="Soward Logo"
            className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-xl animate-float"
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-4xl md:text-5xl font-bold text-gradient"
          >
            Soward - Your Ultimate Discord Bot
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            Powerful, Efficient, and Easy to Use. Enhance your Discord server today!
          </motion.p>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass-card py-4">
        <div className="container px-4 mx-auto flex justify-center space-x-4">
          {["home", "premium", "terms"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`nav-link capitalize ${
                activeSection === section ? "bg-soward text-white" : ""
              }`}
            >
              {section}
            </button>
          ))}
        </div>
      </nav>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === "home" && (
          <motion.section
            key="home"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16"
          >
            <div className="container px-4 mx-auto">
              {/* Hero */}
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-8">Make your server smarter with Soward</h2>
                <div className="flex justify-center gap-4">
                  <a
                    href="https://discord.com/oauth2/authorize?client_id=1013771497157972008&permissions=8&scope=bot"
                    target="_blank"
                    className="btn-primary"
                  >
                    Invite Soward Now
                  </a>
                  <a
                    href="https://discord.gg/soward"
                    target="_blank"
                    className="btn-primary"
                  >
                    Join Support Server
                  </a>
                </div>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="feature-card"
                  >
                    <feature.icon className="w-12 h-12 text-soward mb-4 mx-auto" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>
        )}

        {activeSection === "premium" && (
          <motion.section
            key="premium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16"
          >
            <div className="container px-4 mx-auto max-w-3xl">
              <div className="glass-card p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-center mb-8 text-gradient">Premium Features</h2>
                <p className="text-center text-gray-600 mb-8">
                  Unlock the full potential of Soward with these amazing premium features:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      className="flex items-center p-4 bg-white/50 rounded-lg"
                    >
                      <div className="w-2 h-2 bg-soward rounded-full mr-3" />
                      <span>{feature}</span>
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

      {/* Footer */}
      <footer className="glass-card mt-16 py-6">
        <p className="text-center text-gray-600">
          © 2024 Soward | Developed with passion by Prince
        </p>
      </footer>
    </div>
  );
};

export default Index;
