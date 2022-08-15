import { join } from 'path';
import { Command } from '../interfaces/Command';
import { logger } from '../utils/logger';
import { Bot } from '../interfaces/Bot';
import { readdirSync } from 'fs';

/**
 * Reads the `/commands` directory and dynamically imports the files,
 * then pushes the imported data to an array.
 *
 * @param {Bot} bot
 * @returns {Command[]} Array of Command objects representing the imported commands.
 */
export const loadCommands = async (bot: Bot): Promise<Command[]> => {
    try {
        const result: Command[] = [];
        const folders = readdirSync('src/commands');
        /**
         * TODO: Clean up this mess.
         */
        for (const folder of folders) {
            const files = readdirSync(`src/commands/${folder}`).filter((file) =>
                file.endsWith('.ts')
            );
            for (const file of files) {
                const name = file.split('.')[0];
                const mod = await import(
                    join(__dirname, `../commands/${folder}`, file)
                );
                result.push(mod[name] as Command);
            }
        }
        // const files = await readdir(join(__dirname, '../commands'));
        return result;
    } catch (err) {
        logger.error(`${err}`, { service: 'loadCommands' });
        return [];
    }
};
