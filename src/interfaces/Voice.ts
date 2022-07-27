import { VoiceState } from 'discord.js';
import { Bot } from './Bot';

export interface Voice {
    data: VoiceState;
    children: Voice[];
    /**
     * Handles the logic for a given context menu interaction.
     *
     * @param {Bot} bot Discord instance.
     * @param {ContextMenuInteraction} interaction The context menu interaction payload.
     */
    run: (bot: Bot, voiceState: VoiceState) => Promise<void>;
}
