const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone');

const BOT_NAME = 'XIBS-XV Bot';
const BOT_PREFIX = '.';
const OWNER_NUMBER = '255754206718';
const OWNER_NAME = 'XIBS ETERNAL';

let currentLanguage = 'swa';

const menuEnglish = (msg) => `
Good Morning*, Dear *${msg._data.notifyName}*!
I am guided by our Bot Lord, Permanent Bot Lord: ${OWNER_NUMBER}

*Commands:*
${BOT_PREFIX}menu - Show this menu.
${BOT_PREFIX}ping - Check bot's responsiveness.
${BOT_PREFIX}echo [text] - Echoes your text back.
${BOT_PREFIX}kick @user - Kicks a user from a group (Admin only).
${BOT_PREFIX}antilink [on/off] - Toggle anti-link feature (Admin only).
`;

const menuKiswahili = (msg) => `
Habari za Asubuhi*, Mpendwa *${msg._data.notifyName}*!
Ninaongozwa na Bwana Bot wetu, Permanent Bot Lord: ${OWNER_NUMBER}

*Amri:*
${BOT_PREFIX}menu - Onyesha menyu hii.
${BOT_PREFIX}ping - Angalia mwitikio wa bot.
${BOT_PREFIX}echo [ujumbe] - Rudisha ujumbe wako.
${BOT_PREFIX}kick @mtumiaji - Mtoe mtumiaji kwenye kikundi (Admin pekee).
${BOT_PREFIX}antilink [washa/zima] - Washa au zima kipengele cha kuzuia linki (Admin pekee).
`;

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    client.sendMessage(OWNER_NUMBER + '@c.us', `Bot ${BOT_NAME} imeanza kufanya kazi!`);
});

client.on('message', async msg => {
    const chat = await msg.getChat();
    const args = msg.body.slice(BOT_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const commandBody = args.join(' ');

    if (!msg.body.startsWith(BOT_PREFIX)) {
        return;
    }

    switch (command) {
        case 'menu':
            if (currentLanguage === 'swa') {
                msg.reply(menuKiswahili(msg));
            } else {
                msg.reply(menuEnglish(msg));
            }
            break;
        case 'ping':
            await msg.reply('Pong!');
            break;
        case 'echo':
            if (args.length > 0) {
                await msg.reply(args.join(' '));
            } else {
                await msg.reply(`Matumizi: ${BOT_PREFIX}echo <ujumbe>`);
            }
            break;
        case 'kick':
            if (!chat.isGroup) {
                msg.reply('Amri hii inafanya kazi kwenye magroup pekee.');
                return;
            }
            const author = msg.author;
            const groupAdmins = chat.participants.filter(p => p.isAdmin).map(p => p.id._serialized);
            if (!groupAdmins.includes(author)) {
                msg.reply('Wewe sio admin wa group hili.');
                return;
            }
            if (msg.mentionedIds.length === 0) {
                msg.reply(`Matumizi: ${BOT_PREFIX}kick @mtumiaji`);
                return;
            }
            for (let participantId of msg.mentionedIds) {
                try {
                    await chat.removeParticipants([participantId]);
                    msg.reply(`Mtumiaji ${participantId} ametolewa.`);
                } catch (error) {
                    console.error('Error kicking participant:', error);
                    msg.reply('Imeshindwa kumtoa mtumiaji.');
                }
            }
            break;
        case 'antilink':
            if (!chat.isGroup) {
                msg.reply('Amri hii inafanya kazi kwenye magroup pekee.');
                return;
            }
            const sender = msg.author;
            const groupAdminsAnti = chat.participants.filter(p => p.isAdmin).map(p => p.id._serialized);
            if (!groupAdminsAnti.includes(sender)) {
                msg.reply('Wewe sio admin wa group hili.');
                return;
            }
            if (commandBody === 'on') {
                chat.setMessagesAdminsOnly(true);
                msg.reply('Kuzuia linki kumewashwa. Ni admins pekee wanaweza kutuma linki.');
            } else if (commandBody === 'off') {
                chat.setMessagesAdminsOnly(false);
                msg.reply('Kuzuia linki kumezimwa. Kila mtu anaweza kutuma linki.');
            } else {
                msg.reply(`Matumizi: ${BOT_PREFIX}antilink [on/off]`);
            }
            break;
        default:
            break;
    }
});

client.on('message', async msg => {
    const chat = await msg.getChat();
    if (chat.isGroup && chat.isMessagesAdminsOnly) {
        if (msg.body.includes('http://') || msg.body.includes('https://') || msg.body.includes('www.')) {
            const sender = msg.author;
            const groupAdmins = chat.participants.filter(p => p.isAdmin).map(p => p.id._serialized);
            if (!groupAdmins.includes(sender)) {
                await msg.delete(true);
                msg.reply('Linki zimezuiliwa kwenye group hili.');
            }
        }
    }
});

client.initialize();
