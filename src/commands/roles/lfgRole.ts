import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/lfgRole.embed';

export const lfgRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-lfg')
        .setDescription('Creates role selection embed for LFG roles'),
    run: async (Bot, interaction) => {
        const file = new AttachmentBuilder('assets/lfg-roles.gif');
        await interaction.reply({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};