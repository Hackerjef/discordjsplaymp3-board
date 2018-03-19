const config = require("./config.json");
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log("mans not hot")
});

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!');
    }
    if (msg.content === '!shutdown') {
        msg.reply('bye');
        client.destroy();
    }
    checkifgood(msg);
});

var checkifgood = function(msg) {
    fs.readFile("./lyrics.txt", 'utf8', function (err, data) {
        if (err) throw err;
        if (data.indexOf(msg) >= 0) {
            if (!message.member.voiceChannel) return;
            var voiceChannel = msg.member.voiceChannel;
            voiceChannel.join().then(connection => {
                const dispatcher = connection.playFile('./music.mp3');
                dispatcher.on('error', e => {
                    // Catch any errors that may arise
                    console.log(e);
                });

            }).catch(err => console.log(err));
        }
    })
}



client.login(config.token);