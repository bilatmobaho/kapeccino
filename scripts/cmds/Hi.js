module.exports = {
	config: {
			name: "hi",
			version: "1.0",
			author: "Jaychris Garcia",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("𝙝𝙞 𝙠𝙖 𝙣𝙜 𝙝𝙞 𝙥𝙪𝙩𝙖𝙣𝙜 𝙞𝙣𝙖 𝙢𝙤 𝙡𝙤𝙫𝙚?");
}
};
