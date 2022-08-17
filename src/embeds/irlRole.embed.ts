import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('IRL Role Selection')
    .setDescription(
        'Select which IRL notification channel roles you would like to join.'
    );

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select IRL roles')
        .setMinValues(0)
        .setMaxValues(2)
        .addOptions([
            {
                label: 'Co-op Battle',
                value: 'Co-op Battle',
            },
            {
                label: 'Team Deathmatch',
                value: 'Team Deathmatch',
            },
        ])
);
