const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('테스트')
        .setDescription('테스트입니다.'),
    async execute(interaction) {
        await interaction.reply('테스트완료되었습니다.');
    },
};
