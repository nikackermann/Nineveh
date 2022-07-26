import { Bot } from '../interfaces/Bot';

import { ready } from './ready';
import { interactionCreate } from './interactionCreate';

export const handleEvents = (bot: Bot): void => {
    bot.on('ready', async () => {
        await ready(bot);
    });

    bot.on('interactionCreate', async (interaction) => {
        await interactionCreate(bot, interaction);
    });
};
