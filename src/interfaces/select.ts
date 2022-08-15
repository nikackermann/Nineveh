import { SelectMenuInteraction } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { Bot } from './Bot';

export interface Select {
    name: string;
    cooldown: RateLimiter;
    run: (bot: Bot, interaction: SelectMenuInteraction) => Promise<void>;
}
