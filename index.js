const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log('Client [Bot] Slydex-inator 3000#0552 connecté !');
});

client.on('message', function (message) {
    if (message.content === ';;ping') {
        message.reply('pong !')
    }
})

client.on('message', message => {
  if (message.content === ';;avatar') {
    message.reply(message.author.displayAvatarURL());
  }
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if (!channel) return;
        channel.send(`Bienvenue sur notre serveur! ${member}`);
});

//commande de kick
  
client.on('message', message => {
    if (!message.guild) return;

    if (message.content.startsWith(';;kick')) {
      const user = message.mentions.users.first();
    if (user) {
        const member = message.guild.member(user);
    if (member) {
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              message.reply(`l'utilisateur **${user.tag}** a été kick.`);
            })
            .catch(err => {
              message.reply('je ne suis pas capable de kick le membre (mon rôle est peut-être inférieur au sien).');
              console.error(err);
            });
        } else {
          
          message.reply("l'utilisateur n'a pas été trouvé !");
        }
      } else {
        message.reply("aucun utilisateur n'a été mentionné !");
      }
    }
  });

//commande de ban

  client.on('message', message => {
    if (!message.guild) return;
  
    if (message.content.startsWith(';;ban')) {
      const user = message.mentions.users.first();
      
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: "Il l'a surememt mérité !",
            })
            .then(() => {
              message.reply(`l'utilisateur **${user.tag}** a bien été ban !`);
            })
            .catch(err => {
              message.reply('je ne suis pas capable de ban le membre (mon rôle est peut-être inférieur au sien).');
              console.error(err);
            });
        } else {
          message.reply("l'utilisateur n'a pas été trouvé !");
        }
      } else {
        message.reply("aucun utilisateur n'a été mentionné !");
      }
    }
  });

client.login('NzEwNDAwMzA2ODk4NTM0NDAw.Xrz8nw.S-_5SwitTpfJwuWgSwPSKJRdIbA')