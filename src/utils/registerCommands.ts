import { REST } from '@discordjs/rest';
import {
    RESTPostAPIApplicationCommandsJSONBody,
    RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord-api-types/v9';
import { APIApplicationCommandOption, Routes } from 'discord-api-types/v10';
import { Bot } from '../interfaces/Bot';
import { logger } from './logger';

/**
 * Takes both the commands and contexts, parses the `data` properties as needed,
 * and builds an array of all command data. Then, posts the data to the Discord endpoint
 * for registering commands.
 *
 * Will register commands globally if in a production environment, otherwise defaults to the
 * home guild only.
 *
 * @param {Client} client Discord instance.
 * @returns {boolean} True if the commands were registered, false on error.
 */
export const registerCommands = async (bot: Bot): Promise<boolean> => {
    try {
        const rest = new REST({ version: '10' }).setToken(
            process.env.DISCORD_TOKEN as string
        );

        const commandData: {
            name: string;
            description?: string;
            type?: number;
            options?: APIApplicationCommandOption[];
        }[] = [];

        bot.commands.forEach((command) => {
            const data =
                command.data.toJSON() as RESTPostAPIApplicationCommandsJSONBody;
            data.options?.sort((a, b) => a.name.localeCompare(b.name));

            commandData.push(data);
        });
        bot.contexts.forEach((context) => commandData.push(context.data));
        if (process.env.NODE_ENV === 'production') {
            logger.info('Registering commands globally!', {
                service: 'registerCommands',
            });
            await rest.put(Routes.applicationCommands(bot.config.id), {
                body: commandData,
            });
        } else {
            logger.info('Registering commands in home guild!', {
                service: 'registerCommands',
            });
            await rest.put(
                Routes.applicationGuildCommands(
                    bot.user?.id || 'missing token',
                    process.env.DISCORD_GUILD as string
                ),
                { body: commandData }
            );
        }
        return true;
    } catch (err) {
        logger.error(`${err}`, { service: 'registerCommands' });
        return false;
    }
};
