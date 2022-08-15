import { ActivityType, Client } from 'discord.js';
import { Intents } from './config';
import { logger } from './utils/logger';
import dotenv from 'dotenv';
import { loadCommands } from './utils/loadCommands';
import { Bot } from './interfaces/Bot';
import { loadContexts } from './utils/loadContexts';
import { registerCommands } from './utils/registerCommands';
import { handleEvents } from './events/_handleEvents';
import { interactionCreate } from './events/interactionCreate';
import { loadSelects } from './utils/loadSelects';
dotenv.config();

/**
 * @description Initializes the bot.
 */
const init = async () => {
    const client = new Client({
        intents: Intents,
    }) as Bot;

    /**
     * @description Loads all commands.
     */
    const commands = await loadCommands(client);
    const contexts = await loadContexts(client);
    const selectMenus = await loadSelects(client);

    client.commands = commands;
    client.contexts = contexts;
    client.selectMenus = selectMenus;

    if (!commands.length) {
        logger.error('Failed to load commands!', { service: 'init' });
        return;
    }

    if (process.env.NODE_ENV !== 'production') {
        logger.info('Running in development mode!', { service: 'init' });
        const success = await registerCommands(client);
        if (!success) {
            logger.error('Failed to register commands!', { service: 'init' });
            return;
        }
    }

    handleEvents(client);

    try {
        logger.info('Logging into Discord...', { service: 'init' });
        await client.login(process.env.DISCORD_TOKEN as string);
    } catch (err) {
        logger.error(`${err}`, { service: 'init' });
        process.exit(1);
    }
};
init();
