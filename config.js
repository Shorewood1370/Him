//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348109243618";
global.sudo = process.env.SUDO || "2348109243618,2349076810086";
global.owner = process.env.OWNER_NUMBER || "2348109243618";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 4;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1BYa3RrWW96eFo1bW0rd01NS3RCVUdvZjFJNEpYNXJLRkloSWltY1MwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN1RzUmZzNEhmc2Z3bS9HQjh0SDBuczd6cit2NjhyUENWWmtrQjFtTlNIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRXdHdGNVM3Q2MlFYUkN0ZnBwRGJjeU9HS1FrY255Z3Q3S2t2OEJWcjNVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUT01TclI3dEwvLzdjazdUSXh5ZlN6ZVJUNE00QmRKbys2N3BISzdnWDJzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdGOFh6cTc2RXFTQVdHUmRUV0pmc1loTWJ2QVcwcGlPcWN4WmNVMFE4SGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdPOFo4YlE4ZUhOanRLSmd3RkwyZ3lVL29qalFlTzRkazh0UDgxL3ZZaGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpjR0Ntd0RXTzhHU1l1YWs3RnhkTkpPVm1QMmoyOUMzbEhNTzU1OG9sQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQldRWlcwcnVvQ0Eza3ExU0xHUFQ5dDlGTnh1dlJ6RFZIdHFnMHVvbWdrOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjEzdXFqaDJhZWZKalNWR0xodXdGcE5PeFlabW5vMUh6ZERTTm96MlZFOVhzY0JFMktMK0dBSzJzNlQyZ3ZaczdzVnBwcENBNSsyWUNKazhERHFUUkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzksImFkdlNlY3JldEtleSI6InJZbkF1VEdjU1VPSFR6OFpMM3pBVXM2eVJGVXowZ2hLNGpIYmhEYWRWSnc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTA3NjgxMDA4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJCNjM1REE3MDQxMTA4NDdGODZEREJBMzU1MkNGRUI5MiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzM2NzgwMjMwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJPTzJ4VTc0S1JrLVEyNzNiZXI2T2t3IiwicGhvbmVJZCI6ImVjNmM4MTM5LWE0YmQtNDc4YS1hYzdjLWZkYzgyNGRmYzQ2NiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDeUZFc2M3c2FrTTlhTXFHVVhEUTg3Zm9hZkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3o1UXVHaDlVRXM5NG95QVFVY3YzQnpkdnRzPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Iko5TDI4S1EyIiwibWUiOnsiaWQiOiIyMzQ5MDc2ODEwMDg2OjEwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdjRtbzhDRUxYVGxMd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFU29mWXJTbWVJVnNtdE5BbGJGeDA2VGNIL095WGJIaGpzSUpLL0xqSXdvPSIsImFjY291bnRTaWduYXR1cmUiOiJLclU3TWEzNzFZaThleWpkVm11NVl5WGJhMVRmbnpkbE9ES0psc2F4cFFBdlhVRDVaMHpxZjB4MFVrWWZFTmt0RVRmYXVEbHRmWEJjT01KNkdiTnJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaHNxaVNXTUZvU2F6OXhKQkNUUjh1azZ0TDd2Nk9HM0lhaDNZUzRYVXlhcFlmOVN1emcvcnYzWmd5REtpb0Z6M1VwejVzSGJFaXQwWFZEZ2RsY2VTRFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MDc2ODEwMDg2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJFcUgySzBwbmlGYkpyVFFKV3hjZE9rM0IvenNsMng0WTdDQ1N2eTR5TUsifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzY3ODAyMjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXgyIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "ʜɪᴍ𓃵⁩",
  packname: process.env.PACK_NAME || "𝕆𝕟𝕝𝕪𝟙⁩",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HIM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
