import { ActivityType, Client } from 'discord.js';
import { REST } from '@discordjs/rest';
import { APIApplicationCommandOption, Routes } from 'discord-api-types/v10';
import { logger } from '../helpers/logger';
// import { CommandList } from '../commands/_commandList';

/**
 *
 * @param {Client} client
 */
export const onReady = async (client: Client) => {
    logger.info(`Logged in as ${client.user?.tag}!`, { service: 'login' });
    client.user?.setActivity('Lost Ark', { type: ActivityType.Playing });

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

        client.commands.forEach((command) =>
            commandData.push(
                command.data.toJSON() as {
                    name: string;
                    description?: string;
                    type?: number;
                    options?: APIApplicationCommandOption[];
                }
            )
        );
        await rest.put(
            Routes.applicationGuildCommands(
                client.user?.id || 'missing token',
                process.env.DISCORD_GUILD as string
            ),
            { body: commandData }
        );
        logger.info('Successfully updated commands!', { service: 'login' });
    } catch (err) {
        logger.error(`${err}`, { service: 'login' });
    }
};
