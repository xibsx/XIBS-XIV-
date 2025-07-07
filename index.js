const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone');

const BOT_NAME = 'XIBS-XV Bot';
const BOT_PREFIX = '.';
const OWNER_NUMBER = '255754206718';
const OWNER_NAME = 'XIBS ETERNAL';

let currentLanguage = 'swa';

const menuEnglish = (msg) => `
👋 *Good Morning*, Dear *${msg._data.notifyName || "User"}*!
I am guided by our Bot Lord, Permanent Bot Lord: ${OWNER_NUMBER}
✨ Welcome to your tech hub, *${BOT_NAME}*!
I'm here to give you amazing AI power, modern tools, and endless entertainment.

━━━━━━━━━━━━━━━━━━━
🚀 *${BOT_NAME} INFO* 🚀
├─ 🤖 Name: *${BOT_NAME}*
├─ 🌟 Our Prefix: \`${BOT_PREFIX}\` (Use dot before each command)
├─ ⚙️ Version: 4.7 (Latest Build)
├─ ⏰ Current Time: ${moment().tz('Africa/Dar_es_Salaam').format('hh:mm:ss A (Africa/Dar_es_Salaam)')}
├─ 🗓️ Date: ${moment().tz('Africa/Dar_es_Salaam').format('dddd, MMMM D, YYYY')}
├─ 📆 Day: ${moment().tz('Africa/Dar_es_Salaam').format('dddd')}
└─ 📊 Total Commands: (Number of Commands)
━━━━━━━━━━━━━━━━━━━

🌐 *UNLOCK A WORLD OF POSSIBILITIES!* 🌐
Choose the category to see its commands:

╭─「 🎶 *ENTERTAINMENT & MEDIA* 」
│  • .play
│  • .song
│  • .video
│  • .ytmp3
│  • .ytmp4
╰─

╭─「 ⬇️ *DOWNLOADER MENU* 」
│  • .tiktok
│  • .igmp4
│  • .instagram
│  • .twitter
│  • .facebook
╰─

╭─「 ✨ *SPECIAL MENU* 」
│  • .antibug
│  • .text2pdf
│  • .reactchannel
│    (No specific command shown for .cut, .savevideo, .addmusic)
╰─

╭─「 🐞 *BUG MENU* 」
│  • .unlimitedlag (23490****)
│  • .rideordie (23490****)
│  • .zoro (23490****)
│  • .elite (23490****)
╰─

╭─「 ⚙️ *TOOLS MENU* 」
│  • .diary <entry>
│  • .post <audio>
│  • .font
│  • .searchgroup
│  • .toimg <sticker>
│  • .tovideo <sticker>
│  • .tomap3
│  • .remindme
│  • .wanumner
│  • .save
│  • .ss
│  • .encrypt
│  • .languages
│  • .credits
│  • .support
│  • .repost
│  • .vv2
│  • .fliptext
│  • .volvid
╰─

╭─「 🛡️ *ANTI MENU* 」
│  • .antilink
│  • .antilink-kick <on/off>
│  • .antilink-warn <on/off>
│  • .antilink-delete <on/off>
│  • .antidelete <on/off>
│  • .antispam <on/off>
│  • .antitagn <on/off>
│  • .antitemu <on/off>
│  • .anti-left <on/off>
│  • .anti-block <on/off>
╰─

╭─「 📢 *CHANNEL MENU* 」
│  • .getnewsletter
│  • .createchannel
│  • .removepic
│  • .updatedesc
│  • .updatename
│  • .updatepic
│  • .mutenews
│  • .unmutenews
│  • .followchannel
│  • .unfollowchannel
│  • .deletechannel
╰─

╭─「 💰 *ECONOMY MENU* 」
│  • .daily
│  • .transfer <tag> <amount>
│  • .bank
│  • .wallet
│  • .withdraw
│  • .deposit
│  • .shop
│  • .buyguard
│  • .buy
│  • .lottery
│  • .buyticket
│  • .roll-dice
│  • .duel
╰─

╭─「 ⚔️ *WEAPONS MENU* 」
│  • .buyweapon
│  • .myweapons
│  • .attack
╰─

╭─「 🐾 *PET MENU* 」
│  • .buypet <number>
│  • .mypet
│  • .train <number>
│  • .battle @user
╰─

╭─「 📈 *LEVEL-UP MENU* 」
│  • .level
│  • .levelup <on/off>
│  • .leaderboard
╰─

╭─「 🎧 *VOICE CHANGER MENU* 」
│  • .bass
│  • .blown
│  • .deep
│  • .earrape
│  • .fast
│  • .fat
│  • .nightcore
│  • .reverse
│  • .robot
│  • .slow
│  • .smooth
│  • .squirrel
╰─

╭─「 👥 *GROUP MENU* 」
│  • .add <tags>
│  • .kick <tags>
│  • .remove <country code>
│  • .everyone
│  • .tagall
│  • .leavegc
│  • .join
│  • .invite
│  • .getname
│  • .getdescgc
│  • .getppgc
│  • .setppgc
│  • .svcontact
│  • .listonline
│  • .opengroup
│  • .closegroup
│  • .linkgc
│  • .resetlink
│  • .creategc
│  • .hidetag
│  • .promote <tags>
│  • .demote <tags>
│  • .promoteall <tags>
│  • .demoteall <tags>
│  • .promote <tags>
│  • .kickall <tags>
│  • .warn <tags>
│  • .abr tem <phone number>
│  • .ubr tem <phone number>
│  • .abr perm <phone number>
│  • .ubr perm <phone number>
│  • .setstickerlimit <count> <time_in_minutes>
│  • .stickerlimitstatus
╰─

╭─「 👑 *OWNER MENU* 」
│  • .chatbot <on/off>
│  • .chatbotgc <on/off>
│  • .chatbotall <on/off>
│  • .update
│  • .shutdown
│  • .setbio
│  • .mode-private
│  • .mode-public
│  • .report
│  • .clearchat
│  • .setpp
│  • .getpp
│  • .listblock
│  • .block
│  • .unblock
│  • .getbio
│  • .restart
│  • .antiviewonce <on/off>
│  • .antidelete <on/off>
│  • .anticall <on/off>
│  • .autoviewstatus <on/off>
│  • .autostatusreact <on/off>
│  • .autobio <on/off>
│  • .autoreact <on/off>
│  • .autotyping <on/off>
│  • .autorecording <on/off>
│  • .alwaysonline <on/off>
│  • .autoread <on/off>
│  • .unavailable
│  • .delete
│  • .mode
│  • .sudo
│  • .delsudo
│  • .listsudo
│  • .$
│  • .=>
│  • .>
│  • .premium
│  • .buypremium
│  • .addcase
│  • .delcase
│  • .restart
│  • .stop
╰─

╭─「 👤 *USER MENU* 」
│  • .afk
│  • .server
│  • .disk
│  • .lookup
│  • .ping
│  • .alive
│  • .system
│  • .disk
│  • .runtime
╰─

╭─「 😂 *FUN MENU* 」
│  • .top
│  • .fact
│  • .flipcoin
│  • .rate
│  • .rizz
│  • .flirt
│  • .pickupline
│  • .joke
│  • .ship
│  • .dare
│  • .truth
│  • .trivia
│  • .answer
│  • .scoreboard
│  • .horoscope
│  • .stupidcheck
│  • .gaycheck
│  • .waifucheck
│  • .hotcheck
│  • .uncleancheck
│  • .evilcheck
│  • .smart check
│  • .soulmate <tag>
│  • .couple <tag>
│  • .what
│  • .where
│  • .when
│  • .is
╰─

╭─「 🎤 *VOICE CHANGER MENU* 」
│  • .bass
│  • .blown
│  • .deep
│  • .earrape
│  • .fast
│  • .fat
│  • .nightcore
│  • .reverse
│  • .robot
│  • .slow
│  • .smooth
│  • .squirrel
╰─

💡 *NOTE:* Use \`${BOT_PREFIX}command\` or \`${BOT_PREFIX}menucategory\` to see full list.
Example: \`${BOT_PREFIX}aimenu\`
`;

const menuSwahili = (msg) => `
👋 *Habari za Asubuhi*, Mpendwa *${msg._data.notifyName || "Mtumiaji"}*!
Mimi huongozwa na Bot Lord wetu, Permanent Bot Lord: ${OWNER_NUMBER}
✨ Karibu kwenye kituo chako cha teknolojia, *${BOT_NAME}*!
Mimi niko hapa kukupa uwezo wa ajabu wa AI, zana za kisasa, na burudani isiyo na kikomo.

━━━━━━━━━━━━━━━━━━━
🚀 *TAARIFA ZA ${BOT_NAME}* 🚀
├─ 🤖 Jina: *${BOT_NAME}*
├─ 🌟 Kiambishi awali Chetu: \`${BOT_PREFIX}\` (Tumia nukta kabla ya kila amri)
├─ ⚙️ Toleo: 4.7 (Toleo Jipya Zaidi)
├─ ⏰ Muda wa Sasa: ${moment().tz('Africa/Dar_es_Salaam').format('hh:mm:ss A (Africa/Dar_es_Salaam)')}
├─ 🗓️ Tarehe: ${moment().tz('Africa/Dar_es_Salaam').format('dddd, MMMM D, YYYY')}
├─ 📆 Siku: ${moment().tz('Africa/Dar_es_Salaam').format('dddd')}
└─ 📊 Jumla ya Amri: (Idadi ya Amri)
━━━━━━━━━━━━━━━━━━━

🌐 *FUNGUA ULIMWENGU WA UWEZO!* 🌐
Chagua kategoria unayotaka kuona amri zake:

╭─「 🎶 *BURUDANI & MEDIA* 」
│  • .play
│  • .song
│  • .video
│  • .ytmp3
│  • .ytmp4
╰─

╭─「 ⬇️ *MENU YA KUPAKUA* 」
│  • .tiktok
│  • .igmp4
│  • .instagram
│  • .twitter
│  • .facebook
╰─

╭─「 ✨ *MENU MAALUMU* 」
│  • .antibug
│  • .text2pdf
│  • .reactchannel
│  (Hakuna amri maalum iliyoonyeshwa kwa .cut, .savevideo, .addmusic)
╰─

╭─「 🐞 *MENU YA BUG* 」
│  • .unlimitedlag (23490****)
│  • .rideordie (23490****)
│  • .zoro (23490****)
│  • .elite (23490****)
╰─

╭─「 ⚙️ *MENU YA ZANA* 」
│  • .diary <andiko>
│  • .post <sauti>
│  • .font
│  • .searchgroup
│  • .toimg <sticker>
│  • .tovideo <sticker>
│  • .tomap3
│  • .remindme
│  • .wanumner
│  • .save
│  • .ss
│  • .encrypt
│  • .languages
│  • .credits
│  • .support
│  • .repost
│  • .vv2
│  • .fliptext
│  • .volvid
╰─

╭─「 🛡️ *MENU YA KUZUIA* 」
│  • .antilink
│  • .antilink-kick <washa/zima>
│  • .antilink-warn <washa/zima>
│  • .antilink-delete <washa/zima>
│  • .antidelete <washa/zima>
│  • .antispam <washa/zima>
│  • .antitagn <washa/zima>
│  • .antitemu <washa/zima>
│  • .anti-left <washa/zima>
│  • .anti-block <washa/zima>
╰─

╭─「 📢 *MENU YA CHANNEL* 」
│  • .getnewsletter
│  • .createchannel
│  • .removepic
│  • .updatedesc
│  • .updatename
│  • .updatepic
│  • .mutenews
│  • .unmutenews
│  • .followchannel
│  • .unfollowchannel
│  • .deletechannel
╰─

╭─「 💰 *MENU YA UCHUMI* 」
│  • .daily
│  • .transfer <lebo> <kiasi>
│  • .bank
│  • .wallet
│  • .withdraw
│  • .deposit
│  • .shop
│  • .buyguard
│  • .buy
│  • .lottery
│  • .buyticket
│  • .roll-dice
│  • .duel
╰─

╭─「 ⚔️ *MENU YA SILAHA* 」
│  • .buyweapon
│  • .myweapons
│  • .attack
╰─

╭─「 🐾 *MENU YA WANYAMA* 」
│  • .buypet <namba>
│  • .mypet
│  • .train <namba>
│  • .battle @mtumiaji
╰─

╭─「 📈 *MENU YA KUPANDA LEVEL* 」
│  • .level
│  • .levelup <washa/zima>
│  • .leaderboard
╰─

╭─「 🎧 *MENU YA KUBADILI SAUTI* 」
│  • .bass
│  • .blown
│  • .deep
│  • .earrape
│  • .fast
│  • .fat
│  • .nightcore
│  • .reverse
│  • .robot
│  • .slow
│  • .smooth
│  • .squirrel
╰─

╭─「 👥 *MENU YA KUNDI* 」
│  • .add <lebo>
│  • .kick <lebo>
│  • .remove <namba ya nchi>
│  • .everyone
│  • .tagall
│  • .leavegc
│  • .idadi ya watu walio mtandaoni
│  • .join
│  • .invite
│  • .getname
│  • .getdescgc
│  • .getppgc
│  • .setppgc
│  • .svcontact
│  • .listonline
│  • .opengroup
│  • .closegroup
│  • .linkgc
│  • .resetlink
│  • .creategc
│  • .hidetag
│  • .promote <lebo>
│  • .demote <lebo>
│  • .promoteall <lebo>
│  • .demoteall <lebo>
│  • .promote <lebo>
│  • .kickall <lebo>
│  • .warn <lebo>
│  • .abr tem <namba ya simu>
│  • .ubr tem <namba ya simu>
│  • .abr perm <namba ya simu>
│  • .ubr perm <namba ya simu>
│  • .setstickerlimit <hesabu> <muda_kwa_dakika>
│  • .stickerlimitstatus
╰─

╭─「 👑 *MENU YA MMILIKI* 」
│  • .chatbot <washa/zima>
│  • .chatbotgc <washa/zima>
│  • .chatbotall <washa/zima>
│  • .update
│  • .shutdown
│  • .setbio
│  • .mode-private
│  • .mode-public
│  • .report
│  • .clearchat
│  • .setpp
│  • .getpp
│  • .listblock
│  • .block
│  • .unblock
│  • .getbio
│  • .restart
│  • .antiviewonce <washa/zima>
│  • .antidelete <washa/zima>
│  • .anticall <washa/zima>
│  • .autoviewstatus <washa/zima>
│  • .autostatusreact <washa/zima>
│  • .autobio <washa/zima>
│  • .autoreact <washa/zima>
│  • .autotyping <washa/zima>
│  • .autorecording <washa/zima>
│  • .alwaysonline <washa/zima>
│  • .autoread <washa/zima>
│  • .unavailable
│  • .delete
│  • .mode
│  • .sudo
│  • .delsudo
│  • .listsudo
│  • .$
│  • .=>
│  • .>
│  • .premium
│  • .buypremium
│  • .addcase
│  • .delcase
│  • .restart
│  • .stop
╰─

╭─「 👤 *MENU YA MTUMIAJI* 」
│  • .afk
│  • .server
│  • .disk
│  • .lookup
│  • .ping
│  • .alive
│  • .system
│  • .disk
│  • .runtime
╰─

╭─「 😂 *FUN MENU* 」
│  • .top
│  • .fact
│  • .flipcoin
│  • .rate
│  • .rizz
│  • .flirt
│  • .pickupline
│  • .joke
│  • .ship
│  • .dare
│  • .truth
│  • .trivia
│  • .answer
│  • .scoreboard
│  • .horoscope
│  • .stupidcheck
│  • .gaycheck
│  • .waifucheck
│  • .hotcheck
│  • .uncleancheck
│  • .evilcheck
│  • .smart check
│  • .soulmate <lebo>
│  • .couple <lebo>
│  • .what
│  • .where
│  • .when
│  • .is
╰─

╭─「 🎤 *MENU YA KUBADILI SAUTI* 」
│  • .bass
│  • .blown
│  • .deep
│  • .earrape
│  • .fast
│  • .fat
│  • .nightcore
│  • .reverse
│  • .robot
│  • .slow
│  • .smooth
│  • .squirrel
╰─

💡 *KUMBUKA:* Tumia \`${BOT_PREFIX}amri\` au \`${BOT_PREFIX}menukategoria\` kuona orodha kamili.
Mfano: \`${BOT_PREFIX}aimenu\`
`;

function sendHelpMessage(msg, commandName, correctSyntax, explanation) {
    msg.reply(
        `Kosa! Amri ya ${commandName} inahitaji chaguo sahihi.\n` +
        `Syntax sahihi: \`${correctSyntax}\`\n` +
        `Mfano: \`${correctSyntax.replace('<', '').replace('>', '')}\`\n\n` +
        `*Maelezo ya Amri:*\n` +
        `${explanation}\n\n` +
        `Kwa msaada zaidi, wasiliana na:` +
        `\n*BOT LORD: ${OWNER_NAME}*` +
        `\n*MEET AT: ${OWNER_NUMBER}*`
    );
}

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" }),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true
    }
});

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
    console.log(`Bot Lord: ${OWNER_NAME} (${OWNER_NUMBER})`);
    console.log(`Bot Name: ${BOT_NAME}`);
    console.log(`Bot Prefix: ${BOT_PREFIX}`);
    client.sendMessage(OWNER_NUMBER + '@c.us', `Bot yako, ${BOT_NAME}, Imeunganishwa na Iko Tayari!`);
});

client.on('authenticated', (session) => {
    console.log('AUTHENTICATED', session);
});

client.on('auth_failure', msg => {
    console.error('AUTHENTICATION FAILURE', msg);
});

client.on('disconnected', (reason) => {
    console.log('Client was disconnected', reason);
});

client.on('message', async msg => {
    if (msg.body === null) return;
    if (!msg.body.startsWith(BOT_PREFIX)) return;

    const chat = await msg.getChat();
    const args = msg.body.slice(BOT_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    const commandBody = args.join(' ').trim();

    const sender = msg.author || msg.from;
    const isOwner = sender === `${OWNER_NUMBER}@c.us`;

    const isBotAdmin = chat.isGroup ? chat.participants.find(p => p.id.user === client.info.me.user)?.isAdmin : false;

    if (command === 'welcome' && !commandBody) {
        sendHelpMessage(
            msg,
            BOT_PREFIX + 'welcome',
            BOT_PREFIX + 'welcome <on/off>',
            `Amri ya ${BOT_PREFIX}welcome huwezesha au kuzima ujumbe wa kukaribisha wanachama wapya kwenye group.`
        );
        return;
    }

    switch (command) {
        case 'menu':
            if (currentLanguage === 'eng') {
                msg.reply(menuEnglish(msg));
            } else {
                msg.reply(menuSwahili(msg));
            }
            break;

        case 'menulang':
            const lang = commandBody.toLowerCase();
            if (lang && (lang === 'eng' || lang === 'swa')) {
                currentLanguage = lang;
                msg.reply(`Lugha ya menu imebadilishwa kuwa ${lang === 'eng' ? 'Kiingereza' : 'Kiswahili'}.`);
                if (currentLanguage === 'eng') {
                    msg.reply(menuEnglish(msg));
                } else {
                    msg.reply(menuSwahili(msg));
                }
            } else {
                msg.reply(`Tafadhali tumia: ${BOT_PREFIX}menulang <eng/swa>`);
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

        case 'ag':
        case 'attackgroup':
            if (!isOwner) {
                msg.reply('❌ Amri hii inaruhusiwa kwa Bot Owner pekee!');
                return;
            }

            if (chat.isGroup) {
                if (!isBotAdmin) {
                    msg.reply('🚨 Bot haina admin rights. Tafadhali nipe admin rights ili nifanye operesheni hii.');
                    return;
                }

                let participantsToKick = [];
                for (let participant of chat.participants) {
                    const participantId = participant.id.user;
                    if (participantId !== client.info.me.user && participantId !== OWNER_NUMBER) {
                        participantsToKick.push(participant.id);
                    }
                }

                if (participantsToKick.length > 0) {
                    try {
                        await chat.removeParticipants(participantsToKick);
                        msg.reply('💥 Kundi limesafishwa! Wanachama wote wametolewa, isipokuwa Bot Owner na Bot.');
                    } catch (error) {
                        console.error('Error removing participants:', error);
                        msg.reply('🚨 Kushindwa kuondoa wanachama. Kunaweza kuwa na tatizo au ruhusa.');
                    }
                } else {
                    msg.reply('Hakuna wanachama wa kuondoa au tayari wametolewa, isipokuwa Bot Owner na Bot.');
                }
                msg.reply('Group belongs to user!');
            } else {
                msg.reply('Amri hii inafanya kazi kwenye magroup pekee.');
            }
            break;

        case 'agm':
        case 'attackgroupmember':
            if (chat.isGroup) {
                chat.sendMessage(`🚨 Ombi la kushambulia group limetumwa na @${msg.author.split('@')[0]}! Ili kuepuka matumizi mabaya, Bot haiwezi kufanya hivi moja kwa moja. Admin wa group anaombwa aangalie.`, {
                    mentions: [msg.author]
                });
                msg.reply('Ombi lako la kushambulia group limetumwa, lakini kwa usalama, Bot haiwezi kufanya hivyo moja kwa moja.');
            } else {
                msg.reply('Amri hii inafanya kazi kwenye magroup pekee.');
            }
            break;

        case 'antilink':
            if (!chat.isGroup) {
                msg.reply('Amri hii inafanya kazi kwenye magroup pekee.');
                return;
            }
            const senderAnti = msg.author || msg.from;
            const groupAdminsAnti = chat.participants.filter(p => p.isAdmin).map(p => p.id._serialized);
            if (!groupAdminsAnti.includes(senderAnti)) {
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
            const sender = msg.author || msg.from;
            const groupAdmins = chat.participants.filter(p => p.isAdmin).map(p => p.id._serialized);
            if (!groupAdmins.includes(sender)) {
                await msg.delete(true);
                msg.reply('Linki zimezuiliwa kwenye group hili.');
            }
        }
    }
});

client.initialize();
