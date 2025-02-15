
import { motion } from "framer-motion";
import {
  LucideShieldCheck,
  LucideUsers,
  LucideTicket,
  LucideMusic,
  LucideDollarSign,
  LucideSmile,
  LucideMic,
  LucideGift,
  LucideSettings,
} from "lucide-react";

interface CommandCategory {
  title: string;
  icon: React.ComponentType;
  commands: string[];
  description: string;
}

const commandCategories: CommandCategory[] = [
  {
    title: "Security",
    icon: LucideShieldCheck,
    description: "Advanced security features to protect your server",
    commands: ["antinuke", "whitelist", "extraowner"],
  },
  {
    title: "Automod",
    icon: LucideShieldCheck,
    description: "Automated moderation tools",
    commands: ["automod", "antispam", "antilink", "antibadwords"],
  },
  {
    title: "Moderation",
    icon: LucideSettings,
    description: "Server moderation commands",
    commands: [
      "purge", "ban", "kick", "unban", "unbanall",
      "snipe", "editsnipe", "ignore", "lock", "unlock",
      "lockall", "unlockall", "hide", "hideall",
      "unhide", "unhideall", "role", "mute", "unmute",
      "mediachannel", "nickname"
    ],
  },
  {
    title: "Ticket",
    icon: LucideTicket,
    description: "Ticket management system",
    commands: ["ticket"],
  },
  {
    title: "Welcomer",
    icon: LucideUsers,
    description: "Welcome new members",
    commands: ["welcomer", "welcome", "autorole", "autonick", "greet"],
  },
  {
    title: "Music",
    icon: LucideMusic,
    description: "Music playback controls",
    commands: [
      "play", "pause", "resume", "skip", "loop", "queue",
      "volume", "stop", "current", "autoplay", "music"
    ],
  },
  {
    title: "Utils",
    icon: LucideSettings,
    description: "Utility commands",
    commands: [
      "ping", "invite", "support", "vote", "stats",
      "steal", "noprefix", "afk", "prefix",
      "relationship", "profile", "avatar", "banner",
      "list", "uptime", "roleicon", "serverinfo",
      "userinfo", "roleinfo", "membercount",
      "firstmessage", "boostcount"
    ],
  },
  {
    title: "Giveaway",
    icon: LucideGift,
    description: "Giveaway management",
    commands: ["giveaway", "gstart", "gdelete", "gend", "glist", "greroll", "greqrole"],
  },
  {
    title: "Fun",
    icon: LucideSmile,
    description: "Fun interaction commands",
    commands: [
      "slap", "hug", "kiss", "pat", "cry", "dance", "laugh",
      "smile", "angry", "confused", "sleep", "gay",
      "lesbian", "horny", "simp", "iq", "cute", "fakeban",
      "fakekick", "nukeall", "ship"
    ],
  },
  {
    title: "Voice",
    icon: LucideMic,
    description: "Voice channel management",
    commands: [
      "vcmute", "vcunmute", "vcdeafen", "vcundeafen",
      "vcmove", "vcmoveall", "vcdisconnect", "vcpull",
      "vcmuteall", "vcunmuteall", "vcdeafenall",
      "vcundeafenall", "vcdisconnectall"
    ],
  },
  {
    title: "Economy",
    icon: LucideDollarSign,
    description: "Economy system commands",
    commands: ["balance", "givebalance", "daily", "memorymatch", "coinflip"],
  }
];

const Commands = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Bot Commands</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {commandCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="feature-card"
            >
              <category.icon className="w-8 h-8 text-soward mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2 text-center">{category.title}</h3>
              <p className="text-gray-600 text-sm mb-4 text-center">{category.description}</p>
              <div className="flex flex-wrap gap-2">
                {category.commands.map((command) => (
                  <span
                    key={command}
                    className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600"
                  >
                    {command}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Commands;
