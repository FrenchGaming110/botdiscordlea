const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function(){
    bot.user.setGame("❤Xoruo❤");
    console.log("Le bot a bien été connecté");
})

bot.login("Mzc2MzM5NTg3Njk5ODM0ODgx.DQMT0g.YIHj8HWu2lzxzCHYE0NiLQW8vF4");

bot.on("message", function (message){
    if (message.content === ".ping") {
        message.channel.send ("pong");
    } else if (message.content === ("bonjour")){
        message.reply('Bonjour à toi ');
    } else if (message.content === ("cv?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("ça vas?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("ca vas?")){
        message.reply('Oui je vais bien et toi?');
    } else if (message.content === ("Cv?")){
        message.reply('Oui je vais bien et toi?');
    
    
    
    (own)
    } else if (message.content === ("merde")){
        message.reply('Attention à votre vocabulaire! :hushed: :hushed:  ');
    } else if (message.content === (".invite")){
        let m = " ";
        m += 'Voici le liens pour me mettre sur votre server: https://discordapp.com/oauth2/authorize?client_id=376339587699834881&scope=bot&permissions=2146958591 \n';
        message.author.sendMessage(m).catch(console.log); 
    } else if (message.content === (".own")){
        message.reply('LéaChouRix#5799 est la créatrice de ce bot');
    }
})


bot.on("guildMemberAdd", function (member) {
    member.createDM().then(function (channel) {
        return channel.send("Bienvenue a toi sur le serveur " + member.displayName)
    }).catch(console.error)
})

