const axios = require("axios");

module.exports = {
  config: {
    name: "mark",
    aliases: ["mark"],
    version: "1.0",
    author: "AceGun",
    countDown: 5,
    role: 0,
    shortDescription: "Get pickup lines",
    longDescription: {
      en: "Get random pickup lines.",
    },
    category: "fun",
    guide: {
      en: "{prefix}pickuplines",
    },
  },

  onStart: async function ({ api, event }) {
    try {
      const response = await axios.get("https://api.popcat.xyz/pickuplines");
      const { pickupline } = response.data;
      const message = `💘 ${bat tinawag mo ako crush munam ako 🙄}`;
      return api.sendMessage(message, event.threadID);
    } catch (error) {
      console.error(error);
    }
  },
};
