import { SlashCommandBuilder } from 'discord.js';
import { Command } from '../interfaces/command';

export const ping: Command = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Replies with pong'),
    run: async (interaction) => {
        await interaction.reply('pong');
    },
};
