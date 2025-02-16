
import { motion } from "framer-motion";

const Terms = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-20">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p>By using Sypher Bot, you agree to these Terms of Service and all applicable laws and regulations.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
              <p>Permission is granted to use Sypher Bot for your Discord server subject to the following conditions:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>You must not use the bot for malicious purposes</li>
                <li>You must not exploit any vulnerabilities in the bot</li>
                <li>You must comply with Discord's Terms of Service</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Service Modifications</h2>
              <p>We reserve the right to modify or discontinue our service at any time without notice.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Terms;
