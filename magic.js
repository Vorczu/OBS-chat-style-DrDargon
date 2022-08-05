


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

  const contener = document.createElement("div");
  contener.classList.add('msg_box')

  const name_box = document.createElement("div");
  name_box.classList.add('name_box')
  name_box.innerHTML = tags.username

  const msg_content = document.createElement("div");
  msg_content.classList.add('msg_content')
  msg_content.innerHTML = getMessageHTML(message, tags.emotes)

  contener.append(name_box,msg_content)
  document.getElementById('contener').appendChild(contener)

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
		










