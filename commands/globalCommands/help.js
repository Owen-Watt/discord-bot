const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Displays list of commands'),

	async execute(interaction) {
        const helpEmbed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle('Support Server')
        .setURL('https://discord.gg/mACacV4eG8')
        .setDescription(
        (`\nā¢ \`\`/hug [user]\`\` - hugs the user ā¤ļø`) +
        (`\nā¢ \`\`/punch [user]\`\` - punches the user šŖ`) +
        (`\nā¢ \`\`/stab [user]\`\` - stabs the user š`) +
        (`\n\nā¢ \`\`/balance\`\` - view your cash balance š°`) +
        (`\nā¢ \`\`/daily\`\` - claims daily cash reward š¤`) +
        (`\nā¢ \`\`/coinflip [bet amount]\`\` - test your luck on a coinflip šµ`) +
        (`\nā¢ \`\`/tip [tip amount] [user]\`\` - generously tip a user š`) +
        (`\n\nā¢ \`\`/leaderboard\`\` - view your servers cash leaderboard š`) +
        (`\nā¢ \`\`/stats [category] [user]\`\` - view a users statistics š`)
        )

        var response;
        // try catch to check if the user has direct messages turned on or off, if off, the response will display the error
        try{
            interaction.member.send({ 
                embeds: [ helpEmbed ]  
            });
            response = ":white_check_mark: Check your direct messages!"; 
        }catch(error){
            response = `:x: ${error}`
        }
        

        await interaction.reply({
            content: response,
            ephemeral: true,
        })
	},
};
