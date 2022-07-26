const fs = require('node:fs');
const path = require('node:path');
import { Client, Collection } from 'discord.js';
import { Intents } from './config';
import { logger } from './helpers/logger';
import dotenv from 'dotenv';
dotenv.config();

declare module 'discord.js' {
    export interface Client {
        commands: Collection<unknown, any>;
    }
}

/**
 * @description Initializes the bot.
 */
const init = async () => {
    const client = new Client({ intents: Intents });

    try {
        await client.login(process.env.DISCORD_TOKEN as string);
    } catch (err) {
        logger.error(`${err}`, { service: 'login' });
        process.exit(1);
    }

    /**
     * @description Loads all commands.
     */
    client.commands = new Collection();
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs
        .readdirSync(commandsPath)
        .filter((file: string) => file.endsWith('.ts'));

    for (const file of commandFiles) {
        const filePath = path.join(commandsPath, file);
        const command = await import(filePath);
        // Set a new item in the Collection
        // With the key as the command name and the value as the exported module
    }

    /**
     * @description Loads all events.
     */

    const eventsPath = path.join(__dirname, 'events');
    const eventFiles = fs
        .readdirSync(eventsPath)
        .filter((file: string) => file.endsWith('.ts'));
    console.log(eventFiles);
    for (const file of eventFiles) {
        const filePath = path.join(eventsPath, file);
        const event = require(filePath);
        console.log(event.name);
        if (event.once) {
            client.once(event.name, (...args) => event.run(...args));
        } else {
            client.on(event.name, (...args) => event.run(...args));
        }
    }

    // client.on('ready', async () => await onReady(client));

    // client.on(
    //     'interactionCreate',
    //     async (interaction) => await onInteraction(interaction)
    // );
};

init();
