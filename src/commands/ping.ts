import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces/Command';

export const ping: Command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    run: async (Bot, interaction) => {
        await interaction.reply('pong');
    },
};
