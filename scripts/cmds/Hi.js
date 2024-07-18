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
	if (event.body && event.body.toLowerCase() == "hi") return message.reply("𝙩𝙖𝙣𝙜𝙞𝙣𝙖 𝙢𝙤 𝙣𝙖𝙜 𝙝𝙞 𝙜𝙖𝙜𝙤 𝙠𝙖𝙗𝙖 𝙥𝙖𝙠𝙞𝙨𝙨 𝙣𝙜𝙖 𝙤𝙧 𝙨𝙚𝙣𝙙 𝙠𝙞𝙛𝙛𝙮🖕🏻🖕🏻🖕🏻?");
}
};
