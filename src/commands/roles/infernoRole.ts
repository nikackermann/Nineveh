import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/infernoRole.embed';

export const infernoRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-inferno')
        .setDescription('Creates role selection embed for Inferno role'),
    run: async (Bot, interaction) => {
        const file = new AttachmentBuilder('assets/inferno-roles.gif');
        await interaction.reply({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};
