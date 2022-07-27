import { VoiceState } from 'discord.js';
import { Bot } from '../../interfaces/Bot';

export const voiceStateUpdate = async (
    bot: Bot,
    oldState: VoiceState,
    newState: VoiceState
) => {
    // channel id of join to create voice channel
    const joinToCreate = '1001859139175202936';

    const voiceChannelLeft: boolean =
        !!oldState.channelId && !newState.channelId;
    const voiceChannelMoved: boolean =
        !!oldState.channelId &&
        !!newState.channelId &&
        oldState.channelId !== newState.channelId;
    const voiceChannelJoined: boolean =
        !oldState.channelId && !!newState.channelId;

    if (voiceChannelLeft || voiceChannelMoved) {
        // The parent channel of the channel in which the member isn't anymore
        const parentChannel = bot.voiceManager.find((channelData) =>
            channelData.children.some(
                (child: any) => child.channel.id === oldState.channelId
            )
        );
    }
};
