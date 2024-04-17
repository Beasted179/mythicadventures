import './style.css'
import { showMainMenu } from './pages/mainMenu.js';
// At the top of your file
import { createRaindrop } from './utility/LuminaryManager.js';
import { debugLog } from './utility/debug.js';
// import { DiscordSDK } from "@discord/embedded-app-sdk";

// // Will eventually store the authenticated user's access_token
// let auth;

// const discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);



// async function setupDiscordSdk() {
//   await discordSdk.ready();
//   console.log("Discord SDK is ready");

//   // Authorize with Discord Client
//   const { code } = await discordSdk.commands.authorize({
//     client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
//     response_type: "code",
//     state: "",
//     prompt: "none",
//     scope: [
//       "identify",
//       "guilds",
//     ],
//   });

//   // Retrieve an access_token from your activity's server
//   const response = await fetch("/api/token", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       code,
//     }),
//   });
//   const { access_token } = await response.json();


//   auth = await discordSdk.commands.authenticate({
//     access_token,
//   });

//   if (auth == null) {
//     throw new Error("Authenticate command failed");
//   }
// }

// async function appendGuildAvatar() {
//   const app = document.querySelector('#app');

//   // 1. From the HTTP API fetch a list of all of the user's guilds
//   const guilds = await fetch(`https://discord.com/api/v10/users/@me/guilds`, {
//     headers: {
//       // NOTE: we're using the access_token provided by the "authenticate" command
//       Authorization: `Bearer ${auth.access_token}`,
//       'Content-Type': 'application/json',
//     },
//   }).then((response) => response.json());


//   const currentGuild = guilds.find((g) => g.id === discordSdk.guildId);


//   if (currentGuild != null) {
//     const guildImg = document.createElement('img');
//     guildImg.setAttribute(
//       'src',
//       // More info on image formatting here: https://discord.com/developers/docs/reference#image-formatting
//       `https://cdn.discordapp.com/icons/${currentGuild.id}/${currentGuild.icon}.webp?size=128`
//     );
//     guildImg.setAttribute('width', '128px');
//     guildImg.setAttribute('height', '128px');
//     guildImg.setAttribute('style', 'border-radius: 50%;');
//     app.appendChild(guildImg);
//   }
// }

// async function appendVoiceChannelName() {
//   const app = document.querySelector('#app');

//   let activityChannelName = 'Unknown';

//   if (discordSdk.channelId != null && discordSdk.guildId != null) {
//     // Over RPC collect info about the channel
//     const channel = await discordSdk.commands.getChannel({channel_id: discordSdk.channelId});
//     if (channel.name != null) {
//       activityChannelName = channel.name;
//     }
//   }

//   // Update the UI with the name of the current voice channel
//   const textTagString = `Activity Channel: "${activityChannelName}"`;
//   const textTag = document.createElement('p');
//   textTag.textContent = textTagString;
//   app.appendChild(textTag);
// }

// setupDiscordSdk().then(() => {
//   console.log("Discord SDK is authenticated");

//   appendVoiceChannelName();
//   appendGuildAvatar();
// });


document.addEventListener('DOMContentLoaded', () => {
  debugLog('DOMContentLoaded event fired: Initializing app.');
  initializeApp();
});

function initializeApp() {
  debugLog('initializeApp: Starting app initialization.');
  showMainMenu(); // Ensure main menu and animation container are set up first
  debugLog('initializeApp: trying to initialize luminaries');
  setInterval(createRaindrop, 20);
  debugLog('initializeApp: App initialization is complete.');
}

