import { Interaction, InteractionType } from 'discord.js';
import { Bot } from '../interfaces/Bot';

export const interactionCreate = async (
    bot: Bot,
    interaction: Interaction
): Promise<void> => {
    try {
        // if interaction is a command, run it
        if (interaction.type === InteractionType.ApplicationCommand) {
            const target = bot.commands.find(
                (el) => el.data.name === interaction.commandName
            );
            await target?.run(bot, interaction);
        }
        // if interaction in a select menu, run it
        if (interaction.isSelectMenu()) {
            const target = bot.selectMenus.find(
                (el) => el.name === interaction.customId
            );
            await target?.run(bot, interaction);
        }
        // if interacton is a button, run it
        if (interaction.isButton()) {
        }
    } catch (error) {
        console.error(error);
    }
};
