import { ContextMenuCommandInteraction } from 'discord.js';
import { Bot } from './Bot';

export interface Context {
    data: {
        name: string;
        type: 2 | 3;
    };
    /**
     * Handles the logic for a given context menu interaction.
     *
     * @param {Bot} bot Discord instance.
     * @param {ContextMenuInteraction} interaction The context menu interaction payload.
     */
    run: (
        bot: Bot,
        interaction: ContextMenuCommandInteraction
    ) => Promise<void>;
}
