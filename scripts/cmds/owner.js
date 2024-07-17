const { GoatWrapper } = require('fca-liane-utils');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

module.exports = {
	config: {
		name: "owner",
		author: "Tokodori",
		role: 0,
		shortDescription: " ",
		longDescription: "",
		category: "admin",
		guide: "{pn}"
	},

	onStart: async function ({ api, event }) {
		try {
			const ownerInfo = {
				name: '𝙢𝙖𝙧𝙠',
				gender: '𝗠𝗮𝗹𝗲',
				hobby: '𝙣𝙖𝙟𝙖𝙟𝙖𝙠𝙤𝙡',
				Fb: '𝙝𝙩𝙩𝙥𝙨://𝙬𝙬𝙬.𝙛𝙖𝙘𝙚𝙗𝙤𝙤𝙠.𝙘𝙤𝙢/𝙈𝙖𝙧𝙠𝙚𝙮4370
				Relationship: '𝙢𝙞𝙨𝙨 𝙠𝙤𝙣𝙖 𝙨𝙞 𝙖𝙨𝙝𝙡𝙚𝙮',
				bio: '𝗗𝗶𝘀𝗰𝗼𝗻𝗻𝗲𝗰𝘁 𝗺𝗲 𝗳𝗿𝗼𝗺 𝘁𝗵𝗲 𝘄𝗼𝗿𝗹𝗱 𝗼𝗳 𝘁𝗲𝗰𝗵𝗻𝗼𝗹𝗼𝗴𝘆 𝗮𝗻𝗱 𝗶 𝘄𝗶𝗹𝗹 𝗯𝗲 𝘆𝗼𝘂𝗿 𝗴𝘂𝗶𝗱𝗲. 𝗜 𝘄𝗶𝗹𝗹 𝗵𝗲𝗹𝗽 𝘆𝗼𝘂 𝘁𝗼 𝗹𝗲𝗮𝗿𝗻 𝗮𝗻𝗱 𝗴𝗿𝗼𝘄. 𝗜 𝘄𝗶𝗹𝗹 𝗯𝗲 𝘆𝗼𝘂𝗿 𝗳𝗿𝗶𝗲𝗻𝗱 𝗮𝗻𝗱 𝗴𝘂𝗶𝗱𝗲 𝘆𝗼𝘂 𝘁𝗵𝗿𝗼𝘂𝗴𝗵 𝘁𝗵𝗲 𝗷𝗼𝘂𝗿𝗻𝗲𝘆 𝗼𝗳 𝗰𝗼𝗱𝗶𝗻𝗴'
			};

			const bold = 'https://i.imgur.com/SyBjkss.mp4';
			const tmpFolderPath = path.join(__dirname, 'tmp');

			if (!fs.existsSync(tmpFolderPath)) {
				fs.mkdirSync(tmpFolderPath);
			}

			const videoResponse = await axios.get(bold, { responseType: 'arraybuffer' });
			const videoPath = path.join(tmpFolderPath, 'owner_video.mp4');

			fs.writeFileSync(videoPath, Buffer.from(videoResponse.data, 'binary'));

			const response = `
◈ 𝖮𝖶𝖭𝖤𝖱 𝖨𝖭𝖥𝖮𝖱𝖬𝖠𝖳𝖨𝖮𝖭:\n
Name: ${𝙢𝙖𝙧𝙠 𝙥𝙤𝙜𝙞}
Gender: ${𝙢𝙖𝙡𝙚}
Relationship: ${𝙢𝙞𝙨𝙨𝙠𝙤𝙣𝙖𝙨𝙞𝙖𝙨𝙝𝙡𝙚𝙮}
Hobby: ${𝙣𝙖𝙜 𝙟𝙖𝙟𝙖𝙠𝙤𝙡}
Fb: ${https://www.facebook.com/Markey4370}
Bio: ${𝙥𝙤𝙜𝙞 𝙠𝙤 𝙩𝙖𝙡𝙜𝙖}
			`;

			await api.sendMessage({
				body: response,
				attachment: fs.createReadStream(videoPath)
			}, event.threadID, event.messageID);

			fs.unlinkSync(videoPath);

			api.setMessageReaction('🚀', event.messageID, (err) => {}, true);
		} catch (error) {
			console.error('Error in ownerinfo command:', error);
			return api.sendMessage('An error occurred while processing the command.', event.threadID);
		}
	}
};

const wrapper = new GoatWrapper(module.exports);
wrapper.applyNoPrefix({ allowPrefix: true });
