import {
    CommandInteraction,
    SlashCommandBuilder,
    SlashCommandSubcommandBuilder,
} from 'discord.js';
import { Bot } from './Bot';

export interface Command {
    data: SlashCommandBuilder | SlashCommandSubcommandBuilder;
    /**
     * Handles the logic for running a given command.
     *
     * @param {Client} client Discord instance.
     * @param {CommandInteraction} interaction The interaction payload from Discord.
     */
    run: (bot: Bot, interaction: CommandInteraction) => Promise<void>;
}
