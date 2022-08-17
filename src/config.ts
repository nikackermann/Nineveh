import { GatewayIntentBits } from 'discord.js';

export const Intents: GatewayIntentBits[] = [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildBans,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildPresences,
];

export const DefaultSettings = {
    logChannel: 'nineveh-logs',
    adminRole: 'Leadership',
    modRole: 'Council',
    systemNotice: 'true',
    roleSelectionChannel: {
        channel: 'role-selection',
        id: '994468706438610975',
    },
};
