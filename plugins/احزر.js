import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let rees = (await axios.get(https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json)).data  
let url = await rees[Math.floor(rees.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', *احزر من انا*, m)} 


handler.help = ['messi']
handler.tags = ['img']
handler.command = /^(احرز)$/i
export default handler
