import { GatewayIntentBits } from "discord.js";

export const Intents: GatewayIntentBits[] = [
  GatewayIntentBits.Guilds,
  GatewayIntentBits.GuildBans,
  GatewayIntentBits.DirectMessages,
  GatewayIntentBits.GuildMessages,
  GatewayIntentBits.GuildPresences,
];

export const DefaultSettings = {
  modLogChannel: "csb-log",
  modRole: "Council",
  adminRole: "Leadership",
  systemNotice: "true",
};
