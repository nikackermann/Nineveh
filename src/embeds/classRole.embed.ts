import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('Class Role Selection')
    .setDescription(
        'Select which class discussion channel roles you would like to join.'
    )
    .setFooter({
        text: 'You can select multiple class roles from the dropdown.',
    });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('select-role')
        .setPlaceholder('Select class channels')
        .setMinValues(0)
        .setMaxValues(22) //23
        .addOptions([
            {
                label: 'Arcanist',
                value: 'Arcanist Chat',
                emoji: {
                    name: 'arcana',
                    id: '967477420351426560',
                },
            },
            {
                label: 'Artillerist',
                value: 'Artillerist Chat',
                emoji: {
                    name: 'artillerist',
                    id: '967477419923603518',
                },
            },
            {
                label: 'Artist',
                value: 'Artist Chat',
                emoji: {
                    name: 'Artist',
                    id: '930687087542431784',
                },
            },
            // {
            //     label: 'Aeromancer',
            //     value: 'Aeromancer Chat',
            //     emoji: {
            //         name: 'Aeromancer',
            //         id: '994142659046281306',
            //     },
            // },
            {
                label: 'Bard',
                value: 'Bard Chat',
                emoji: {
                    name: 'bard',
                    id: '967477420422754314',
                },
            },
            {
                label: 'Berserker',
                value: 'Berserker Chat',
                emoji: {
                    name: 'berserker',
                    id: '967477420393386055',
                },
            },
            {
                label: 'Deadeye',
                value: 'Deadeye Chat',
                emoji: {
                    name: 'Deadeye',
                    id: '905274709107687474',
                },
            },
            {
                label: 'Deathblade',
                value: 'Deathblade Chat',
                emoji: {
                    name: 'Deathblade',
                    id: '905274708935737384',
                },
            },
            {
                label: 'Destroyer',
                value: 'Destroyer Chat',
                emoji: {
                    name: 'Destroyer',
                    id: '905274708696637440',
                },
            },
            {
                label: 'Glaivier',
                value: 'Glaivier Chat',
                emoji: {
                    name: 'Lancemaster',
                    id: '948965345568358470',
                },
            },
            {
                label: 'Gunlancer',
                value: 'Gunlancer Chat',
                emoji: {
                    name: 'Gunlancer',
                    id: '905274709904597002',
                },
            },
            {
                label: 'Gunslinger',
                value: 'Gunslinger Chat',
                emoji: {
                    name: 'Gunslinger',
                    id: '905274708780535808',
                },
            },
            {
                label: 'Paladin',
                value: 'Paladin Chat',
                emoji: {
                    name: 'Paladin',
                    id: '905274708658905099',
                },
            },
            {
                label: 'Reaper',
                value: 'Reaper Chat',
                emoji: {
                    name: 'Reaper',
                    id: '905274709153812540',
                },
            },
            {
                label: 'Machinist',
                value: 'Machinist Chat',
                emoji: {
                    name: 'scouter',
                    id: '967477420447907870',
                },
            },
            {
                label: 'Scrapper',
                value: 'Scrapper Chat',
                emoji: {
                    name: 'scrapper',
                    id: '967477420447907870',
                },
            },
            {
                label: 'Shadowhunter',
                value: 'Shadowhunter Chat',
                emoji: {
                    name: 'shadowhunter',
                    id: '967477420569550919',
                },
            },
            {
                label: 'Sharpshooter',
                value: 'Sharpshooter Chat',
                emoji: {
                    name: 'sharpshooter',
                    id: '967477420640854086',
                },
            },
            {
                label: 'Sorceress',
                value: 'Sorceress Chat',
                emoji: {
                    name: 'sorceress',
                    id: '967477420569534474',
                },
            },
            {
                label: 'Soulfist',
                value: 'Soulfist Chat',
                emoji: {
                    name: 'soulfist',
                    id: '967477420515004446',
                },
            },
            {
                label: 'Striker',
                value: 'Striker Chat',
                emoji: {
                    name: 'striker',
                    id: '967477420758278174',
                },
            },
            {
                label: 'Summoner',
                value: 'Summoner Chat',
                emoji: {
                    name: 'Summoner',
                    id: '905274709929762867',
                },
            },
            {
                label: 'Wardancer',
                value: 'Wardancer Chat',
                emoji: {
                    name: 'Wardancer',
                    id: '905274709615194112',
                },
            },
        ])
);
