const Discord = require("discord.js");
const embed = new Discord.MessageEmbed()
const embedb = new Discord.MessageEmbed()

module.exports = {
    name: "테스트",
    execute(message) {
        embed.setTitle("test")
        .setColor(0xBDF9B0)
        .addFields({
            name: "테스트합니다.",
            value: "bb"
        })
        return message.channel.send(embedb)
    },
};