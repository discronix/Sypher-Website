
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-20">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl"
        >
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold mb-4">1. Data Collection</h2>
              <p>We collect minimal data necessary for bot functionality, including:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Server IDs for configuration settings</li>
                <li>Command usage statistics for improvement</li>
                <li>User IDs for moderation features</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">2. Data Usage</h2>
              <p>Your data is used solely for providing and improving Sypher Bot services. We do not sell or share your data with third parties.</p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
              <p>We implement robust security measures to protect your data from unauthorized access or disclosure.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
