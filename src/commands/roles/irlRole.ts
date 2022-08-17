import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/irlRole.embed';

export const irlRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-irl')
        .setDescription('Creates role selection embed for IRL roles'),
    run: async (Bot, interaction) => {
        const file = new AttachmentBuilder('assets/irl-roles.gif');
        await interaction.reply({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};
