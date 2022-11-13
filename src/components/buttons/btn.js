module.exports = {
  data: {
    name: `customid`,
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: "test",
    });
  },
};
