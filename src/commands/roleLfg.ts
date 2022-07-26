import { SlashCommandBuilder, EmbedBuilder } from 'discord.js';
import { Command } from '../interfaces/command';

export const roleLfg: Command = {
    data: new SlashCommandBuilder()
        .setName('role-lfg')
        .setDescription('Creates embed with reaction handler for role LFG'),
    run: async (interaction) => {
        const embed = new EmbedBuilder()
            .setTitle('LFG Roles')
            .setDescription('Use the dropdown menu to select LFG roles.')
            .setColor('#0099ff')
            .setImage('placeholder');
    },
};
