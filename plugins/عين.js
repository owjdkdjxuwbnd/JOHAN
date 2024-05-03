const timeout = 60000;
const poin = 500;

const handler = async (m, { conn }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {};
    const id = m.chat;
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '❐┃لم يتم الإجابة على السؤال بعد┃❌ ❯', conn.tebakbendera[id][0]);
        throw false;
    }
    const response = await fetch('https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json');
    const src = await response.json();
    const image = src[Math.floor(Math.random() * src.length)].img;
    const caption = ❐┃احزر ماهية الصورة!❯;
    conn.tebakbendera[id] = [
        conn.sendFile(m.chat, image, '', caption, m),
        image,
        setTimeout(() => {
            if (conn.tebakbendera[id])
                conn.reply(m.chat, '⌛┃انتهى الوقت!❯', conn.tebakbendera[id][0]);
            delete conn.tebakbendera[id];
        }, timeout)
    ];
};

handler.help = ['guesswho'];
handler.tags = ['game'];
handler.command = /^عين/i;

module.exports = handler;
