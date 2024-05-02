let handler = async(m, {
  conn,
  text,
  command
}) => {
    await conn.sendMessage(m.chat, {
     react: {
   text: "🔮",
   key: m.key,
     }
    })
  let yh = global.e7zar
  let url = yh[Math.floor(Math.random() * yh.length)]
  conn.sendMessage(m.chat, {
    image: {
      url: url
    },
    caption: "احزر ما اسم الشخصيه 🔮"
  }, {
    quoted: m
  });
}
handler.command = /^(احزر)$/i
handler.tags = ['anime']
handler.help = ['e7zar']
export default handler

