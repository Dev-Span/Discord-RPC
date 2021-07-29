var rpc = require("discord-rpc")
console.log("[LOG] Discord Rpc is Ready")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "", //Type your Details in "HERE"
assets : {
large_image : "Image", // Type your Image Name from https://discord.com/developers/applications/YOUR BOT ID/rich-presence/assets
large_text : "Your Status" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "" , url : ""},{label : "",url : ""}]
}         //Type in Label your Text and in Url a Link
})
})                       //Type in "HERE" your Bot client ID
client.login({ clientId : "" }).catch(console.error);
