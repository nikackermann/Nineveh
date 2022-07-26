import { Interaction, InteractionType, Client } from 'discord.js';
// import { CommandList } from '../commands/_commandList';

export const onInteraction = async (interaction: Interaction) => {
    if (interaction.type === InteractionType.ApplicationCommand) {
        console.log(interaction.client.commands);
        // for (const Command of interaction.client.commands) {
        //     if (interaction.commandName === Command.data.name) {
        //         await Command.run(interaction);
        //         break;
        //     }
        // }
    }
};
