let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `◥ ツقائمة الخياراتツ ◤`,
rows: [
{title: "✨ | ◥ ツالترحيبツ ◤", description: "تنشيط الترحيب او ايقاف تشغيله", rowId: `${usedPrefix + command} welcome`},
{title: "🌎 | ◥ ツالوضع العامツ ◤", description: "تفعيل البوت ف العام والخاص (الشات - الجروبات) )", rowId: `${usedPrefix + command} public`},
{title: "🥵 | ◥ ツالاباحيةツ ◤", description:" تم حذفها من قبل المطور", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | ◥ ツمضاد الروابطツ ◤", description: "مضادات روابط جروبات الواتس", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | ◥ ツ2 مضاد الروابطツ ◤", description: "مضادات جميع الروابط", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | ◥ ツتغيراتツ ◤", description: "اشعارات لتغيرات المجموعة", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | ◥ ツتقيدツ ◤", description: "تنشيط او تعطيل الطرد", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | ◥ ツالقراءة التلقائيةツ ◤", description: "قراءة النصوص تلقائيا", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | ◥ ツالصوتツ ◤", description: "اوامر تغير الصوت", rowId: `${usedPrefix + command} audios`},
{title: "👾 | ◥ ツاستيكر تلقائيツ ◤", description: "هتبقي اي حاجه البوت هيبعتها بعد كده استيكر", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | ◥ ツفقطツ ◤", description: "تنفيذ الاوامر ف الشات الخاص بس", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | ◥ ツجروبات فقطツ ◤", description: "تنفيذ الاوامر للجروبات بس", rowId: `${usedPrefix + command} gconly`},
{title: "❌ | ◥ ツضد المشاهدةツ ◤", description: "مضاد الرؤيه مره واحده فقط", rowId: `${usedPrefix + command} antiviewonce`},
{title: "📵 | ◥ ツانتي المكالماتツ ◤", description: "مضاد المكالمات", rowId: `${usedPrefix + command} anticall`},
{title: "💬 | ◥ ツمكافحة خاصةツ ◤", description: "البوت هيحظر اي حد هيتكلم معاه ف الخاص", rowId: `${usedPrefix + command} antiprivado`},
{title: "🤬 | ◥ ツانتي توكسيكツ ◤", description: "مضاد التوكسيك", rowId: `${usedPrefix + command} antitoxic`},
{title: "🕸️ | ◥ ツمضاد فيرس تراباツ ◤", description: "تنشيط او تعطيل مضادات الفيروسات", rowId: `${usedPrefix + command} antitraba`},
{title: "👎🏻 | ◥ ツمعاداة الغربツ ◤", description: "طرد الارقام الغربية من الجروب - معطل من قبل المطور", rowId: `${usedPrefix + command} antiarabes`},  
]}, ]
//let name = await conn.getName(m.sender)
const listMessage = {
text: ' ',
footer: `┏━━━━━━━━━━━━━┓
