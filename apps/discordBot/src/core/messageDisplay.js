const { EmbedBuilder } = require("discord.js");

//Send message to user in channel when command is successful
async function success(interaction, title, desc, ephemeral, logo) {
  let messageEmbed;
  if (logo) {
    messageEmbed = new EmbedBuilder()
      .setColor(0x00ff000)
      .setTitle(title)
      .setDescription(desc)
      .setThumbnail(logo);
  } else {
    messageEmbed = new EmbedBuilder()
      .setColor(0x00ff000)
      .setTitle(title)
      .setDescription(desc);
  }

  if (interaction.deferred || interaction.replied) {
    interaction.followUp({
      embeds: [messageEmbed],
      ephemeral: ephemeral,
    });
  } else {
    interaction.reply({
      embeds: [messageEmbed],
      ephemeral: ephemeral,
    });
  }
}

//Send message to user in channel when command is not success
async function notSuccess(interaction, title, desc, ephemeral) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0xff0000)
    .setTitle(title)
    .setDescription(desc);
  if (interaction.deferred || interaction.replied) {
    interaction.followUp({
      embeds: [messageEmbed],
      ephemeral: ephemeral,
    });
  } else {
    interaction.reply({
      embeds: [messageEmbed],
      ephemeral: ephemeral,
    });
  }
}

async function successUpdate(interaction, title, desc, ephemeral) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0x00ff000)
    .setTitle(title)
    .setDescription(desc);

  interaction.update({
    embeds: [messageEmbed],
    components: [],
    ephemeral: ephemeral,
  });
}

//Send message to user in channel when command is not success
async function notSuccessUpdate(interaction, title, desc, ephemeral) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0xff0000)
    .setTitle(title)
    .setDescription(desc);

  interaction.update({
    embeds: [messageEmbed],
    components: [],
    ephemeral: ephemeral,
  });
}

//Send attachment to user in channel when command is successful
async function sendAttachment(interaction, title, desc, attachment, fileName) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0x00ff00)
    .setTitle(title)
    .setDescription(desc)
    .setImage(`attachment://${fileName}`);

  interaction.reply({
    embeds: [messageEmbed],
    files: [attachment],
    ephemeral: true,
  });
}

async function successDM(user, title, desc) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0x00ff000)
    .setTitle(title)
    .setDescription(desc);
  user.send({
    embeds: [messageEmbed],
  });
}

//Send message to user in channel when command is not success
async function notSuccessDM(user, title, desc) {
  const messageEmbed = new EmbedBuilder()
    .setColor(0xff0000)
    .setTitle(title)
    .setDescription(desc);
  user.send({
    embeds: [messageEmbed],
  });
}

module.exports = {
  success: success,
  notSuccess: notSuccess,
  sendAttachment: sendAttachment,
  successUpdate: successUpdate,
  notSuccessUpdate: notSuccessUpdate,
  successDM: successDM,
  notSuccessDM: notSuccessDM,
};
