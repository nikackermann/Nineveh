import { Client } from 'discord.js';
import { Command } from './Command';
import { Context } from './Context';
import { Voice } from './Voice';

export interface Bot extends Client {
    config: {
        token: string;
        dbToken: string;
        version: string;
        id: string;
        owner: string;
    };
    commands: Command[];
    contexts: Context[];
    voiceManager: Voice[];
}
