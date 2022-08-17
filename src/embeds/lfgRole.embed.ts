import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('LFG Role Selection')
    .setDescription(
        'Select which LFG notification channel roles you would like to join.'
    )
    .setFooter({
        text: 'You can select multiple LFG roles from the dropdown.',
    });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select LFG roles')
        .setMinValues(0)
        .setMaxValues(2)
        .addOptions([
            {
                label: 'Argos',
                value: 'Argos',
            },
            {
                label: 'Valtan',
                value: 'Valtan',
            },
            {
                label: 'Vykas',
                value: 'Vykas',
            },
            {
                label: 'Kakul Saydon',
                value: 'Kakul Saydon',
            },
        ])
);
