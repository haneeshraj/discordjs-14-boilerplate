const {
  SlashCommandBuilder,
  SelectMenuBuilder,
  ActionRowBuilder,
  SelectMenuOptionBuilder,
} = require(`discord.js`);

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`menutest`)
    .setDescription(`menu test`),

  async execute(interaction, client) {
    if (!interaction.isChatInputCommand()) return;
    const menu = new SelectMenuBuilder()
      .setCustomId(`menu-custom-id`)
      .setMinValues(1)
      .setMaxValues(2)
      .setOptions(
        new SelectMenuOptionBuilder({
          label: "option 1",
          value: "brother",
        }),
        new SelectMenuOptionBuilder({
          label: "option 2",
          value: "sister",
        })
      );
    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
    });
  },
};
