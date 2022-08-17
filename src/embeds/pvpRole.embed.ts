import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('PVP Role Selection')
    .setDescription(
        'Select which PVP notification channel roles you would like to join.'
    )
    .setFooter({
        text: 'You can select multiple PVP roles from the dropdown.',
    });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select PVP roles')
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
