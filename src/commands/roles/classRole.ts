import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/roleClassEmbed';

export const classRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-class')
        .setDescription('Creates role selection embed for class roles'),
    run: async (Bot, interaction) => {
        const file = new AttachmentBuilder('assets/class-roles.gif');
        await interaction.reply({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};
