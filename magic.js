


var jsFile = document.createElement("script");
jsFile.src = "tmi.js";  // it can be path also  "{themes('/scripts/homePage.js')}"
document.body.appendChild(jsFile);  //append it as src to body




const client = new tmi.Client({
	channels: [ 'just_vorczu' ]
});

client.connect();




client.on('message', (channel, tags, message, self) => {
	console.log(tags);
	console.log(message);
	console.log(channel);
	console.log(self);

  

});


function getMessageHTML(message, emotes) {
    if (!emotes) return message;
    const stringReplacements = [];
  
    Object.entries(emotes).forEach(([id, positions]) => {
      const position = positions[0];
      const [start, end] = position.split("-");
      const stringToReplace = message.substring(
        parseInt(start, 10),
        parseInt(end, 10) + 1
      );
  
      stringReplacements.push({
        stringToReplace: stringToReplace,
        replacement: `<img src="https://static-cdn.jtvnw.net/emoticons/v1/${id}/1.0">`,
      });
    });
  
    const messageHTML = stringReplacements.reduce(
      (acc, { stringToReplace, replacement }) => {
        return acc.split(stringToReplace).join(replacement);
      },
      message
    );
  
    return messageHTML;   
  }
		










