import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/pvpRole.embed';

export const pvpRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-pvp')
        .setDescription('Creates role selection embed for PVP roles'),
    run: async (Bot, interaction) => {
        const file = new AttachmentBuilder('assets/pvp-roles.gif');
        await interaction.reply({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};
