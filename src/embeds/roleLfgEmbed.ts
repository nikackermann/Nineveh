import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('LFG Notification Role Selection')
    .setDescription('Select LFG notification roles')
    .setFooter({ text: 'Multiple class selection are allowed' });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select LFG roles')
);
