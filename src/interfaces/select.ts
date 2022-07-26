import { SelectMenuInteraction, SelectMenuBuilder } from 'discord.js';

export interface Select {
    data: SelectMenuBuilder;
    run: (interaction: SelectMenuInteraction) => Promise<void>;
}
