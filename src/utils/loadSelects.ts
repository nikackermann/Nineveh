import { readdir } from 'fs/promises';
import { join } from 'path';
import { logger } from '../utils/logger';
import { Bot } from '../interfaces/Bot';
import { Select } from '../interfaces/Select';

/**
 * Reads the `/commands` directory and dynamically imports the files,
 * then pushes the imported data to an array.
 *
 * @param {Bot} bot
 * @returns {Command[]} Array of Command objects representing the imported commands.
 */
export const loadSelects = async (bot: Bot): Promise<Select[]> => {
    try {
        const result: Select[] = [];
        const files = await readdir(join(__dirname, '../interactions'));
        for (const file of files) {
            const name = file.split('.')[0];
            const mod = await import(join(__dirname, '../interactions', file));
            result.push(mod[name] as Select);
        }
        return result;
    } catch (err) {
        logger.error(`${err}`, { service: 'loadSelects' });
        return [];
    }
};
