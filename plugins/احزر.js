import axios from 'axios';

const handler = async (m, {conn, usedPrefix, command}) => {
  try {
    const response = await axios.get(https://raw.githubusercontent.com/owjdkdjxuwbnd/JOHAN/master/src/JSON/%D8%A7%D8%AD%D8%B2%D8%B1.json);
    const data = response.data;
    
    const pablo = JSON.parse(data);
    
    if (!pablo || pablo.length === 0) {
      return conn.reply(m.chat, 'لا يوجد بيانات متاحة', m);
    }
    
    const pabloo = pablo[Math.floor(Math.random() * pablo.length)];
    
    conn.sendFile(m.chat, pabloo, 'error.jpg', '*احزر من انا*', m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ أثناء معالجة الطلب', m);
  }
};

handler.help = ['gamos', 'gamo'];
handler.tags = ['internet'];
handler.command = /^احزر$/i;

export default handler;
