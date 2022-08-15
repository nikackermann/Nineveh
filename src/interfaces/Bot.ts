import { Client } from 'discord.js';
import { Command } from './Command';
import { Context } from './Context';
import { Voice } from './Voice';
import { Select } from './Select';

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
    selectMenus: Select[];
}
