const Discord = require('discord.js')
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const client = new Discord.Client();
 
 
 
client.on('ready', () => {
    console.log(Logged in as ${client.user.tag}!);
    console.log(in ${client.guilds.size} servers )
    console.log([Codes] ${client.users.size})
    client.user.setStatus("dnd")
 client.user.setGame(☆,https://www.twitch.tv/skwadraa%60);
});`
client.login(process.env.BOT_TOKEN);
