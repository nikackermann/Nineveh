import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces/Command';

export const roleLfg: Command = {
    data: new SlashCommandBuilder()
        .setName('role-lfg')
        .setDescription('Creates role selection embed for LFG roles'),
    run: async (Bot, interaction) => {
        await interaction.reply('pong');
    },
};
