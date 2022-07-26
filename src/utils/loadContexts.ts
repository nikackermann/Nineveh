import { readdir } from 'fs/promises';
import { join } from 'path';
import { logger } from '../utils/logger';
import { Context } from '../interfaces/Context';
import { Bot } from '../interfaces/Bot';

/**
 * Reads the `/commands` directory and dynamically imports the files,
 * then pushes the imported data to an array.
 *
 * @param {Bot} bot
 * @returns {Command[]} Array of Command objects representing the imported commands.
 */
export const loadContexts = async (bot: Bot): Promise<Context[]> => {
    try {
        const result: Context[] = [];
        const files = await readdir(join(__dirname, '../contexts'));
        for (const file of files) {
            const name = file.split('.')[0];
            const mod = await import(join(__dirname, '../contexts', file));
            result.push(mod[name] as Context);
        }
        return result;
    } catch (err) {
        logger.error(`${err}`, { service: 'loadContexts' });
        return [];
    }
};
