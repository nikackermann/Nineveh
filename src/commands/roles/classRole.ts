import {
    AttachmentBuilder,
    SlashCommandBuilder,
    TextChannel,
} from 'discord.js';
import { Command } from '../../interfaces/Command';
import { embed, row } from '../../embeds/classRole.embed';

export const classRole: Command = {
    data: new SlashCommandBuilder()
        .setName('role-class')
        .setDescription('Creates role selection embed for class roles'),
    run: async (Bot, interaction) => {
        const channel = Bot.channels.cache.get(
            Bot.defaultSettings.roleSelectionChannel.id
        ) as TextChannel;
        const file = new AttachmentBuilder(
            'https://cdn.discordapp.com/attachments/993870193367461918/1009449092109308004/class-roles.gif',
            {
                name: 'class-roles.gif',
            }
        );
        await channel.send({
            embeds: [embed],
            files: [file],
            components: [row],
        });
    },
};
