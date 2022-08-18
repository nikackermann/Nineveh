import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('LFG Role Selection')
    .setDescription(
        'Select which LFG notification channel roles you would like to join.'
    )
    .addFields({
        name: 'Available LFG Roles:',
        value: `<:argos:1009801022593576960> - <@&995768971594834052> - *Argos LFG Notification Role*\n<:valtan:1009801021301731459> - <@&1009301195472523385> - *Valtan Normal LFG Notification Role*\n<:valtan:1009801021301731459> - <@&1009301195472523385> - *Valtan Hard LFG Notification Role*\n<:vykas:1008728304737599609> - <@&1009301071677640777> - *Vykas Normal LFG Notification Role*\n<:vykas:1008728304737599609> - <@&1009805059518890035> - *Vykas Hard LFG Notification Role*\n<:kuku:1009801020043440158> - <@&995769459761483967> - *Kakul Saydon LFG Notification Role*
        `,
    })
    .setFooter({
        text: 'You can select multiple LFG roles from the dropdown.',
    });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select LFG roles')
        .setMinValues(0)
        .setMaxValues(8)
        .addOptions([
            {
                label: 'Argos',
                value: 'Argos',
                emoji: {
                    name: 'argos',
                    id: '1009801022593576960',
                },
            },
            {
                label: 'Valtan [Normal]',
                value: 'Valtan NM',
                emoji: {
                    name: 'valtan',
                    id: '1009801021301731459',
                },
            },
            {
                label: 'Valtan [Hard]',
                value: 'Valtan HM',
                emoji: {
                    name: 'valtan',
                    id: '1009801021301731459',
                },
            },
            {
                label: 'Vykas [Normal]',
                value: 'Vykas NM',
                emoji: {
                    name: 'vykas',
                    id: '1008728304737599609',
                },
            },
            {
                label: 'Vykas [Hard]',
                value: 'Vykas HM',
                emoji: {
                    name: 'vykas',
                    id: '1008728304737599609',
                },
            },
            {
                label: 'Kakul Saydon',
                value: 'Kakul Saydon',
                emoji: {
                    name: 'kuku',
                    id: '1009801020043440158',
                },
            },
            {
                label: 'Brelshaza [Normal]',
                value: 'Brelshaza NM',
                emoji: {
                    name: 'brelshaza',
                    id: '1009801024539738172',
                },
            },
            {
                label: 'Brelshaza [Hard]',
                value: 'Brelshaza HM',
                emoji: {
                    name: 'brelshaza',
                    id: '1009801024539738172',
                },
            },
        ])
);
