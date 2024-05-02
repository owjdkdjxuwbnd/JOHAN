import axios from 'axios';
const handler = async (m, {conn, usedPrefix, command}) => {
  const pablo = (await axios.get(https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json)).data;
  const pabloo = await pablo[Math.floor(pablo.length * Math.random())];
  conn.sendFile(m.chat, pabloo, 'error.jpg', *احزر من انا*, m);
};


handler.help = ['gamos', 'gamo'];
handler.tags = ['internet'];
handler.command = /^احزر$/i;
export default handler;
