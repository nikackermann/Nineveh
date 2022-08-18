import { AttachmentBuilder, SlashCommandBuilder } from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/lfgRole.embed';

export const lfgRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-lfg')
        .setDescription('Creates role selection embed for LFG roles'),
    run: async (Bot, interaction) => {
        try {
            const file = new AttachmentBuilder(
                'https://cdn.discordapp.com/attachments/993870193367461918/1009449090221883512/lfg-roles.gif',
                {
                    name: 'lfg-roles.gif',
                }
            );
            await interaction.reply({
                embeds: [embed],
                files: [file],
                components: [row],
            });
        } catch (error) {
            console.error(error);
        }
    },
};
