const { Command } = require('discord-akairo')
const isImageUrl = require('is-image-url')
const redditApiImageGetter = require('reddit-api-image-getter')
const getter = new redditApiImageGetter()
const Perms = require('../../models/perms.js')

class TentaiCommand extends Command {
  constructor () {
    super('tentai', {
      aliases: ['tentai'],
      category: 'hidden',
      cooldown: 5000,
      ratelimit: 2,
      description: { content: 'Is it really forbidden is you love it?' }
    })
  }

  async exec (msg) {
    const nsfwMode = this.client.settings.get(msg.guild.id, 'nsfw', [])
    if (!nsfwMode || nsfwMode === false || !msg.channel.nsfw) return msg.util.reply(':underage: We gotta go someplace NSFW for this sorta thing.')

    const permission = await Perms.findAll({ where: { userID: msg.author.id } })

    const insult = ['Jugeullae?!', '죽을래']

    if (permission.length === 0) return msg.channel.send(insult[Math.floor(Math.random() * insult.length)]).then(msg.delete())
    if (permission[0].dataValues.tentai === 'false') return msg.channel.send(insult[Math.floor(Math.random() * insult.length)]).then(msg.delete())

    const loading = await this.client.emojis.resolve('541151509946171402')
    const ohNo = await this.client.emojis.resolve('541151482599440385')

    const m = await msg.channel.send(`${loading} **Now subsribed to vine facts!**`)

    var subreddits = [
      'Tentai',
      'consentacles',
      'Meatwalls'
    ]

    var img_sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))]

    const response = await getter.getHotImagesOfSubReddit(img_sub)
    const randomResponse = response[Math.floor(Math.random() * response.length)].url
    if (isImageUrl(randomResponse) !== true) return m.edit(`${ohNo} Something went wrong, try again.`)

    const embed = this.client.util.embed()
      .setTitle('Image didn\'t load click here.')
      .setURL(randomResponse)
      .setColor(process.env.EMBED)
      .setImage(randomResponse)
      .setFooter('Requested by REDACTED | via REDACTED • REDATED at XX:XX GMT', 'https://just.vulgarity.xyz/CWtyugHIu6oVFuYN.png')

    m.edit({ embed }).then(msg.delete())
  }
}

module.exports = TentaiCommand
