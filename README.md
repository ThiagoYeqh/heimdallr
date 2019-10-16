[![Codacy Badge](https://img.shields.io/codacy/grade/f6f32a91a6994bb69f8f282365c60857?style=flat-square)](https://www.codacy.com/manual/VulgarBear/heimdall?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=AgardianDevelopment/heimdall&amp;utm_campaign=Badge_Grade)
![license](https://img.shields.io/github/license/AgardianDevelopment/heimdall?style=flat-square)
![Commit](https://img.shields.io/github/last-commit/AgardianDevelopment/heimdall?style=flat-square)
[![Discord](https://img.shields.io/discord/540671346728763392?label=discord&style=flat-square)](https://discord.gg/E9cJjvw)

[![Bots for Discord](https://botsfordiscord.com/api/bot/391050398850613250/widget)](https://botsfordiscord.com/bots/391050398850613250)

# Heimdall

A multi-tasking discord bot created with [discord.js](https://discord.js.org/#/) and [discord-akario](https://github.com/1Computer1/discord-akairo) 

Made by [Argardian Development](https://github.com/AgardianDevelopment).

## Features

- Setting a custom prefix.
- Starring and unstarring messages via reaction or command.
- Setting a custom emoji for reactions.
- Setting a custom starboard channel.
- Deleting messages from the starboard in case of abuse.
- Viewing the people who starred a message.
- Adding positive reputation to users.
- Viewing local and global stars and reputation.
- Blacklisting people from using the starboard or adding reputation.
- Moderation tools to help kick some ass when needed.
- Search movies, anime, manga, games, and more.
- Fun commands for people of all ages.
- NSFW commands for those little deviants with ability to enable or disable. 

## Guild setup

Once you invite Heimdall to your server you will need to do a little setup if you wish to use all the features it has to offer. Firstly if you want a custom prefix input `@Heimdall prefix <prefix>`. After that you can run the `setup` command to configure everything. Alternatively you can run each setup function on its own find out more with the `help` command. To set a starboard outside the setup use the `starboard` command. Any problems you encounter feel free to contact via our [discord](https://discord.gg/9gDgF6).

## Self-hosting

Asgaridan Development highly reccomends you invite this bot instead of self-hosting. Self-hosting aka running the bot provided within this repo on your own is permitted but not supported by Asgaridan Development. Source code is provided in the interest of being open with our community. Ultimately no help or guidance will be provided for setup, editing, or any actions from running the bot within your own self-hosted enviroment. You are more then welcome to join the support server but understand any issues or questions stemming from self-hosting may be ignored or disregarded entirely. If you still wish to continue to self host the bot you will need at the very least the following:

- Discord Developer Application
- Node v10.0.0+
- PostgreSQL Server
- Creation of a config.json file
- API Keys for used services