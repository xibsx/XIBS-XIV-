// ====== Requires na Ufafanuzi wa Variables ======
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const moment = require('moment-timezone'); // Kwa tarehe na saa
const fs = require('fs'); // Kwa ajili ya kuandika/kusoma files, muhimu kwa kuhifadhi session

const BOT_NAME = 'XIBS-XV Bot';
const BOT_PREFIX = '.'; // Kiambishi awali cha commands
const OWNER_NUMBER = '255754206718'; // <--- HAKIKISHA HII NI NAMBA YAKO HALISI YA BOT LORD (Bila + au nafasi)
const OWNER_NAME = 'XIBS ETERNAL'; // Jina la Bot Lord

// Global variable ya lugha.
// Kumbuka: Hii itarejeshwa kuwa 'swa' au 'eng' kila Heroku dyno inapo-restart
// bila database ya kudumu.
let currentLanguage = 'swa'; // Anza na Kiswahili kama default.

// --- LUGHA ZA MENU ---
// HIZI NDIO MENU KAMILI KWA LUGHA MBILI.
// Zimepangwa ili variables kama ${msg._data.notifyName} zijazwe kiotomatiki.
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
│  • .cut <start/end>
│  • .savevideo <video>
│  • .addmusic <audio>
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
│  • .cut <mwanzo/mwisho>
│  • .savevideo <video>
│  • .addmusic <sauti>
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

╭─「 😂 *MENU YA FURAHA* 」
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

// --- Kazi Maalum ya Kutoa Ujumbe wa Msaada ---
// Hii inatumika kutoa hints kwa commands zisizokamilika
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


// ====== Client Initialization na Events ======
// Njia ya kuhifadhi session (kwa Heroku, hii itapotea kila dyno inaporestart bila Persistent Storage)
const SESSION_FILE_PATH = './session.json';
let sessionCfg;
if (fs.existsSync(SESSION_FILE_PATH)) {
    sessionCfg = require(SESSION_FILE_PATH);
}

const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client-one" }), // Kwa kuhifadhi session locally
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // Muhimu kwa Heroku
        headless: true // Kwa background process (bila kuonyesha browser)
    }
});

client.on('qr', (qr) => {
    // Generate na display QR code katika terminal
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
    // Hifadhi session.json. Kwenye Heroku, hii itafutika ila kama unatumia persistent storage.
    // fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
    //     if (err) {
    //         console.error('Failed to write session file:', err);
    //     }
    // });
});

client.on('auth_failure', msg => {
    // Fired if session restore failed
    console.error('AUTHENTICATION FAILURE', msg);
    // Unaweza kuongeza logic ya kufuta session file na kuanzisha upya hapa
    // fs.unlinkSync(SESSION_FILE_PATH); // Futa session invalid
});

client.on('disconnected', (reason) => {
    console.log('Client was disconnected', reason);
    // Reinitialize client or alert owner
});

// ====== Kila Ujumbe Mpya ======
client.on('message', async msg => {
    if (msg.body === null) return; // Ignore messages with null body
    if (!msg.body.startsWith(BOT_PREFIX)) return; // Ignore messages not starting with prefix

    const chat = await msg.getChat();
    const args = msg.body.slice(BOT_PREFIX.length).trim().split(/ +/);
    const command = args.shift().toLowerCase(); // Amri yenyewe (bila prefix)
    const commandBody = args.join(' ').trim(); // Sehemu iliyobaki ya ujumbe baada ya amri

    const sender = msg.author || msg.from;
    const isOwner = sender === `${OWNER_NUMBER}@c.us`; // Kuangalia kama mtumiaji ni Bot Owner

    // Kuangalia kama bot ni admin kwenye group (kwa commands zinazohitaji admin rights)
    const isBotAdmin = chat.isGroup ? chat.participants.find(p => p.id.user === client.info.me.user)?.isAdmin : false;

    // --- LOGIC YA KUONGOZA COMMAND ZISIZOKAMILIKA ---
    // Hii logic inakagua commands maalum zinazohitaji arguments na kutoa hint
    if (command === 'welcome' && !commandBody) {
        sendHelpMessage(
            msg,
            BOT_PREFIX + 'welcome',
            BOT_PREFIX + 'welcome <on/off>',
            `Amri ya ${BOT_PREFIX}welcome huwezesha au kuzima ujumbe wa kukaribisha wanachama wapya kwenye group.`
        );
        return; // Muhimu kuacha execution hapa baada ya kutoa hint
    }
    // Unaweza kuongeza commands zingine hapa ambazo zinahitaji arguments
    // Mfano:
    // if (command === 'transfer' && !commandBody) {
    //     sendHelpMessage(
    //         msg,
    //         BOT_PREFIX + 'transfer',
    //         BOT_PREFIX + 'transfer <@mtumiaji> <kiasi>',
    //         `Amri ya ${BOT_PREFIX}transfer hutumika kuhamisha fedha kwa mtumiaji mwingine.`
    //     );
    //     return;
    // }


    // ====== SWITCH STATEMENT YA COMMANDS ZOTE ======
    switch (command) {
        // --- MENU COMMANDS ---
        case 'menu':
            if (currentLanguage === 'eng') {
                msg.reply(menuEnglish(msg)); // Tunapita 'msg' kwa ajili ya template literal
            } else {
                msg.reply(menuSwahili(msg)); // Tunapita 'msg' kwa ajili ya template literal
            }
            break;

        case 'menulang':
            const lang = commandBody.toLowerCase(); // commandBody tayari imefanyiwa trim()
            if (lang && (lang === 'eng' || lang === 'swa')) {
                currentLanguage = lang;
                msg.reply(`Lugha ya menu imebadilishwa kuwa ${lang === 'eng' ? 'Kiingereza' : 'Kiswahili'}.`);
                // Tuma menu mpya katika lugha iliyochaguliwa
                if (currentLanguage === 'eng') {
                    msg.reply(menuEnglish(msg));
                } else {
                    msg.reply(menuSwahili(msg));
                }
            } else {
                msg.reply(`Tafadhali tumia: ${BOT_PREFIX}menulang <eng/swa>`);
            }
            break;

        // --- GROUP ATTACK COMMANDS ---
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
                    // client.info.me.user ni namba ya bot yenyewe
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
                    msg.reply('Hakuna wanachama wa kuondoa au tayari wametolewa, isipipokuwa Bot Owner na Bot.');
                }
                // Tuma ujumbe kwenye group baada ya kumaliza
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

        // --- ANTI MENU (Commands hizi zimejumuishwa kwa logic ya .antilink, .antidelete n.k.) ---
        // Kwa mfano, logic ya antilink inapaswa kuwa nje ya switch case, au kuwa na case yake.
        // Hapa tunaweka mfumo tu. Implementation halisi inategemea jinsi ulivyoiweka awali.
        case 'antilink':
            // Mfano wa jinsi unavyoweza kuweka on/off kwa features
            if (commandBody === 'on') {
                // antilinkEnabled = true; // Unahitaji variable kama hii kufafanuliwa hapo juu
                msg.reply('Antilink imewashwa.');
            } else if (commandBody === 'off') {
                // antilinkEnabled = false;
                msg.reply('Antilink imezimwa.');
            } else {
                sendHelpMessage(msg, BOT_PREFIX + 'antilink', BOT_PREFIX + 'antilink <on/off>', 'Huwasha au kuzima ulinzi wa linki kwenye group.');
            }
            break;

        case 'antidelete':
            if (commandBody === 'on') {
                // antideleteEnabled = true;
                msg.reply('Antidelete imewashwa. Bot itaweza kuona ujumbe uliofutwa.');
            } else if (commandBody === 'off') {
                // antideleteEnabled = false;
                msg.reply('Antidelete imezimwa.');
            } else {
                sendHelpMessage(msg, BOT_PREFIX + 'antidelete', BOT_PREFIX + 'antidelete <on/off>', 'Huwasha au kuzima uwezo wa bot kuona ujumbe uliofutwa.');
            }
            break;

        // --- Mfano wa kutumia sendHelpMessage kwa commands zingine ---
        case 'add':
            if (!commandBody) {
                sendHelpMessage(msg, BOT_PREFIX + 'add', BOT_PREFIX + 'add <namba>', 'Humuongeza mwanachama mpya kwenye group.');
                return;
            }
            // Logic halisi ya .add inaendelea hapa
            break;
            
        case 'kick':
            if (!commandBody) {
                sendHelpMessage(msg, BOT_PREFIX + 'kick', BOT_PREFIX + 'kick <@mtumiaji>', 'Humtoa mwanachama kwenye group.');
                return;
            }
            // Logic halisi ya .kick inaendelea hapa
            break;

        // ... (Endelea kuweka kesi zako zingine za commands kama zilivyokuwa kwenye index.js yako ya awali)
        // Hakikisha kila case inatumia 'command' (bila prefix)

        default:
            // Kama command haijatambuliwa, unaweza kutoa ujumbe wa msaada wa jumla
            // Au tuachie kimya
            // msg.reply(`Amri '${msg.body}' haijatambuliwa. Tumia ${BOT_PREFIX}menu kuona orodha ya amri.`);
            break;
    }
});

// ====== Mwanzo wa Bot ======
client.initialize();