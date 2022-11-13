const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder().setName(`ping`).setDescription(`pings`),

  async execute(interaction, client) {
    const button = new ButtonBuilder()
      .setCustomId(`customid`)
      .setLabel(`btn`)
      .setStyle(ButtonStyle.Primary);
    if (!interaction.isChatInputCommand()) return;

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(button)],
    });
  },
};
