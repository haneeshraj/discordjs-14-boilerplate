module.exports = {
  data: {
    name: `menu-custom-id`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `you selected: ${interaction.values[0]}`,
    });
  },
};
