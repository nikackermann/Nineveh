import { ActionRowBuilder, EmbedBuilder, SelectMenuBuilder } from 'discord.js';

export const embed = new EmbedBuilder()
    .setColor('#1e2124')
    .setTitle('Class Role Selection')
    .setDescription(
        'Select class discussion channel roles you would like to join'
    )
    .setFooter({ text: 'Multiple class selection are allowed' });

export const row = new ActionRowBuilder<SelectMenuBuilder>().addComponents(
    new SelectMenuBuilder()
        .setCustomId('role-class')
        .setPlaceholder('Select class channels')
        .setMinValues(0)
        .setMaxValues(23)
        .addOptions([
            {
                label: 'Artillerist',
                value: 'artillerist',
                emoji: {
                    name: 'artillerist',
                    id: '967477419923603518',
                },
            },
            {
                label: 'Artist',
                value: 'artist',
                emoji: {
                    name: 'Artist',
                    id: '930687087542431784',
                },
            },
            {
                label: 'Aeromancer',
                value: 'aeromancer',
                emoji: {
                    name: 'Aeromancer',
                    id: '994142659046281306',
                },
            },
            {
                label: 'Arcanist',
                value: 'arcanist',
                emoji: {
                    name: 'arcana',
                    id: '967477420351426560',
                },
            },
            {
                label: 'Bard',
                value: 'bard',
                emoji: {
                    name: 'bard',
                    id: '967477420422754314',
                },
            },
            {
                label: 'Berserker',
                value: 'berserker',
                emoji: {
                    name: 'berserker',
                    id: '967477420393386055',
                },
            },
            {
                label: 'Deadeye',
                value: 'deadeye',
                emoji: {
                    name: 'Deadeye',
                    id: '905274709107687474',
                },
            },
            {
                label: 'Deathblade',
                value: 'deathblade',
                emoji: {
                    name: 'Deathblade',
                    id: '905274708935737384',
                },
            },
            {
                label: 'Destroyer',
                value: 'destroyer',
                emoji: {
                    name: 'Destroyer',
                    id: '905274708696637440',
                },
            },
            {
                label: 'Glavier',
                value: 'glavier',
                emoji: {
                    name: 'Lancemaster',
                    id: '948965345568358470',
                },
            },
            {
                label: 'Gunlancer',
                value: 'gunlancer',
                emoji: {
                    name: 'Gunlancer',
                    id: '905274709904597002',
                },
            },
            {
                label: 'Gunslinger',
                value: 'gunslinger',
                emoji: {
                    name: 'Gunslinger',
                    id: '905274708780535808',
                },
            },
            {
                label: 'Paladin',
                value: 'paladin',
                emoji: {
                    name: 'Paladin',
                    id: '905274708658905099',
                },
            },
            {
                label: 'Reaper',
                value: 'reaper',
                emoji: {
                    name: 'Reaper',
                    id: '905274709153812540',
                },
            },
            {
                label: 'Machinist',
                value: 'machinist',
                emoji: {
                    name: 'scouter',
                    id: '967477420447907870',
                },
            },
            {
                label: 'Scrapper',
                value: 'scrapper',
                emoji: {
                    name: 'scrapper',
                    id: '967477420447907870',
                },
            },
            {
                label: 'Shadowhunter',
                value: 'shadowhunter',
                emoji: {
                    name: 'shadowhunter',
                    id: '967477420569550919',
                },
            },
            {
                label: 'Sharpshooter',
                value: 'sharpshooter',
                emoji: {
                    name: 'sharpshooter',
                    id: '967477420640854086',
                },
            },
            {
                label: 'Sorceress',
                value: 'sorceress',
                emoji: {
                    name: 'sorceress',
                    id: '967477420569534474',
                },
            },
            {
                label: 'Soulfist',
                value: 'soulfist',
                emoji: {
                    name: 'soulfist',
                    id: '967477420515004446',
                },
            },
            {
                label: 'Striker',
                value: 'striker',
                emoji: {
                    name: 'striker',
                    id: '967477420758278174',
                },
            },
            {
                label: 'Summoner',
                value: 'summoner',
                emoji: {
                    name: 'Summoner',
                    id: '905274709929762867',
                },
            },
            {
                label: 'Wardancer',
                value: 'wardancer',
                emoji: {
                    name: 'Wardancer',
                    id: '905274709615194112',
                },
            },
        ])
);
