import { Bot } from '../interfaces/Bot';

import { ready } from './ready';
import { interactionCreate } from './interactionCreate';
import { voiceStateUpdate } from './voice/voiceStateUpdate';

export const handleEvents = (bot: Bot): void => {
    bot.on('ready', async () => {
        await ready(bot);
    });

    bot.on('interactionCreate', async (interaction) => {
        await interactionCreate(bot, interaction);
    });

    bot.on('voiceStateUpdate', async (oldState, newState) => {
        await voiceStateUpdate(bot, oldState, newState);
    });
};
