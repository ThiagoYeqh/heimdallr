const { Command } = require('discord-akairo');

class StarCommand extends Command {
	constructor() {
		super('starboard', {
			aliases: ['starboard'],
			category: 'starboard',
			channel: 'guild',
			userPermissions: ['ADMINISTRATOR'],
			args: [
				{
					id: 'channel',
					match: 'content',
					type: 'textChannel',
					prompt: {
						start: 'What channel would you like to use as the starboard?',
						retry: 'Please provide a valid text channel.'
					}
				},
				{
					id: 'confirm',
					match: 'none',
					type: (word, message, { channel }) => {
						const oldID = this.client.settings.get(message.guild, 'starboardChannelID');
						if (oldID && oldID !== channel.id) {
							if (!word) return null;

							// Yes, yea, ye, or y.
							if (/^y(?:e(?:a|s)?)?$/i.test(word)) return true;
							return false;
						}

						return true;
					},
					prompt: {
						start: msg => `Are you sure you want to delete the previous starboard of ${this.client.starboards.get(msg.guild.id).channel}? (y/N)`,
						retry: ''
					}
				}
			],
			description: {
				content: [
					'Sets the channel for the starboard.',
					'If there is already a channel and you change it to another, it will reset all stars.'
				],
				usage: '<channel>',
				examples: ['#starboard']
			}
		});
	}

	async exec(message, { channel, confirm }) {
		if (!confirm) {
			return message.util.reply('Starboard change has been cancelled.');
		}

		const oldID = this.client.settings.get(message.guild, 'starboardChannelID');
		await this.client.settings.set(message.guild, 'starboardChannelID', channel.id);

		if (oldID && oldID !== channel.id) {
			await this.client.starboards.get(channel.guild.id).destroy();
		}

		return message.util.reply(`Starboard channel has been set to ${channel}`);
	}
}

module.exports = StarCommand;
