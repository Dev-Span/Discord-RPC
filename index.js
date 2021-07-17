var rpc = require("discord-rpc")
console.log("[LOG] Discord Rpc is Ready")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Add Luna!!!",
assets : {
large_image : "Image",
large_text : "Your Status" // THIS WILL SHOW AS "Playing <Status>" from the outisde
},
buttons : [{label : "Luna Add Link" , url : "https://discord.com/oauth2/authorize?client_id=723927058870304869&permissions=8&scope=bot+&response_type=code&redirect_uri=https%3A%2F%2Fdiscord.com%2Finvite%2FexkAV5B9ez"},{label : "Nice Video",url : "https://www.youtube.com/watch?v=dQw4w9WgXcQ"}]
}
})
})
client.login({ clientId : "723927058870304869" }).catch(console.error);