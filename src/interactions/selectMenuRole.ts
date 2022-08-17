import { GuildMemberRoleManager, Role } from 'discord.js';
import { RateLimiter } from 'discord.js-rate-limiter';
import { Select } from '../interfaces/Select';

export const selectMenuRole: Select = {
    name: 'select-role',
    cooldown: new RateLimiter(1, 5000), // need to setup a ratelimiter class
    run: async (Bot, interaction) => {
        const { customId, values } = interaction;
        const member = interaction.member?.roles as GuildMemberRoleManager;
        const rolesRemoved = [];
        const rolesAdded = [];

        try {
            // check if select interaction is of type role.
            if (customId !== 'select-role') return;

            const component = interaction.component;
            const componentValues = component.options as any;

            const memberRoles = await member.cache.map((role) => role.name);
            const hasRole = componentValues.filter((item: any) =>
                memberRoles.includes(item.value)
            );
            if (hasRole.length > 0) {
                for (const id of hasRole) {
                    const role = await member.guild.roles.cache.find(
                        (r) => r.name === id.value
                    );
                    rolesRemoved.push(`${role}`);
                    member.remove(role as Role);
                }

                await interaction.reply({
                    content: `Removed Roles: ${rolesRemoved.join(' ')}`,
                    ephemeral: true,
                });
            } else {
                for (const id of values) {
                    const role = await member.guild.roles.cache.find(
                        (r) => r.name === id
                    );
                    rolesAdded.push(`${role}`);
                    member.add(role as Role);
                    console.log(role);
                }
                await interaction.reply({
                    // content: `Removed Roles: ${rolesRemoved.join(' ')}`,
                    content: `Added Roles: ${rolesAdded.join(' ')}`,
                    ephemeral: true,
                });
            }
        } catch (error) {
            console.error(error);
        }
    },
};
