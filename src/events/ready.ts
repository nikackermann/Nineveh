import { ActivityType } from 'discord.js';
import { logger } from '../utils/logger';
import { Bot } from '../interfaces/Bot';

/**
 *
 * @param {Bot} bot
 */
export const ready = async (bot: Bot): Promise<void> => {
    logger.info(`Logged in as ${bot.user?.tag}!`, { service: 'login' });
    bot.user?.setActivity('Lost Ark', { type: ActivityType.Playing });
};
