const axios = require('axios');
const Dis = require('discord.js')
module.exports = {
    name: 'r',
    description: 'USes an API to grab Tanjong Pagar  images ',
    execute(message, args) {
        axios.get('https://github.com/S4ge-Rites/ASEAN-API-V2/blob/main/data/builds/singapore/tanjongpagar.json')
            .then(async response => {
                const Msg = new Dis.MessageEmbed()
                    .setDescription("This is your cat! Meowwwww")
                    .setColor("BLUE")
                    .setImage(response.data.url)
                message.reply({ embeds: [Msg] });
            });
    },
};