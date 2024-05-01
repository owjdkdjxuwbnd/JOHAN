let handler = async (m, { conn, usedPrefix, command }) => {
  await conn.sendMessage(m.chat, {
   react: {
 text: "🏮",
 key: m.key,
   }
  })

  await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: global.veeeee }, { quoted: m })
}

handler.help = ['ايديت_زو-رو']
handler.tags = ['anime']
handler.command = /^(ايديت)$/i
handler.limit = false

export default handler

const dir = [
'https://telegra.ph/file/5fb7c13a4d93917f97ff3.mp4',
'https://telegra.ph/file/2a4e007bec39cc66385b0.mp4',
'https://telegra.ph/file/a22d5d23a85c4d7b2cdac.mp4',
'https://telegra.ph/file/148dcadb72c631e0a9d1c.mp4',
'https://telegra.ph/file/6699964c4f9486bafac22.mp4',
'https://telegra.ph/file/aec768d540e249ceb0c5b.mp4',
'https://telegra.ph/file/b2f92a40a7b869896d360.mp4',
'https://telegra.ph/file/cd611bb1e76ceac182de8.mp4',
'https://telegra.ph/file/0c4046c6477431bbed40d.mp4',
'https://telegra.ph/file/d84e53e96fb44ec4cbd23.mp4',
'https://telegra.ph/file/1286e1bf83c9901308cd8.mp4', 
'https://telegra.ph/file/6d07aa99493e66b23c236.mp4', 
'https://telegra.ph/file/8a2050122f2c1b92f0709.mp4', 
'https://telegra.ph/file/5e2beb8168f08cacb78cb.mp4', 
'https://telegra.ph/file/1378087748b7cb0ab03aa.mp4', 
'https://telegra.ph/file/11db0441667135adedfb8.mp4', 
'https://telegra.ph/file/5bfca85a339866921829d.mp4', 
'https://telegra.ph/file/3da0f258090f4895b98cb.mp4', 
'https://telegra.ph/file/6d07aa99493e66b23c236.mp4', 
'https://telegra.ph/file/be173d81570d9c9eb3805.mp4', 
'https://telegra.ph/file/9b2f9bf537f957ced14c1.mp4', 
'https://telegra.ph/file/253ae92c0a3e04f2482c4.mp4', 
'https://telegra.ph/file/4b3752321ce6296acd2ec.mp4', 
'https://telegra.ph/file/1d95f84409472d2fded0a.mp4', 
'https://telegra.ph/file/02a1d7e447d57804aaeb2.mp4', 
'https://telegra.ph/file/ac6a784a501e0ccf38f2b.mp4', 
'https://telegra.ph/file/bd57deaa5fd64f51c4073.mp4', 

'',
]
