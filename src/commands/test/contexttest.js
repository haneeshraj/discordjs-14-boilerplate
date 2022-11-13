const {
  ContextMenuCommandBuilder,
  ApplicationCommandType,
} = require(`discord.js`);

module.exports = {
  data: new ContextMenuCommandBuilder()
    .setName(`contexttest`)
    .setType(ApplicationCommandType.User),
  async execute(interaction, client) {
    await interaction.reply({
      content: `your mom`,
    });
  },
};
