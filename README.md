# <div align='center'>Baileys - Typescript/Javascript WhatsApp Web API</div>

<p align="center">
  <img src="https://img2.pixhost.to/images/9521/751472173_alan.jpg" alt="Thumbnail" />
</p>

<div align='center'>

![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/whiskeysockets/baileys/total)
![NPM Downloads](https://img.shields.io/npm/dw/%40whiskeysockets%2Fbaileys?label=npm&color=%23CB3837)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/whiskeysockets/baileys)
![GitHub License](https://img.shields.io/github/license/whiskeysockets/baileys)
![Discord](https://img.shields.io/discord/725839806084546610?label=discord&color=%235865F2)
![GitHub Repo stars](https://img.shields.io/github/stars/whiskeysockets/baileys)
![GitHub forks](https://img.shields.io/github/forks/whiskeysockets/baileys)

</div>

WhatsApp Baileys is an open-source library designed to help developers build automation solutions and integrations with WhatsApp efficiently and directly. Using websocket technology without the need for a browser, this library supports a wide range of features such as message management, chat handling, group administration, as well as interactive messages and action buttons for a more dynamic user experience.

Actively developed and maintained, baileys continuously receives updates to enhance stability and performance. One of the main focuses is to improve the pairing and authentication processes to be more stable and secure. Pairing features can be customized with your own codes, making the process more reliable and less prone to interruptions.

This library is highly suitable for building business bots, chat automation systems, customer service solutions, and various other communication automation applications that require high stability and comprehensive features. With a lightweight and modular design, baileys is easy to integrate into different systems and platforms.

---

### Main Features and Advantages

- Supports automatic and custom pairing processes
- Fixes previous pairing issues that often caused failures or disconnections
- Supports interactive messages, action buttons, and dynamic menus
- Efficient automatic session management for reliable operation
- Compatible with the latest multi-device features from WhatsApp
- Lightweight, stable, and easy to integrate into various systems
- Suitable for developing bots, automation, and complete communication solutions
- Comprehensive documentation and example codes to facilitate development

---

## Getting Started

Begin by installing the library via your preferred package manager, then follow the provided configuration guide. You can also utilize the ready-made example codes to understand how the features work. Use session storage and interactive messaging features to build complete, stable solutions tailored to your business or project needs.

---

## Add Function ( Simple code )

# AlannXD Baileys

Simple WhatsApp Web API Library Based On Baileys.

---

## Usage
```json
"depencies": {
  "@alannxd/baileys": "latest"
  // or "@whiskeysocket/baileys": "npm:@alannxd/baileys"
}
```
## Import
```javascript
const {
  default: makeWASocket,
  // Other function
} = require('@alannxd/baileys');
```

---
# How To Connect To Whatsapp
## With QR Code
```javascript
const {
  default: makeWASocket,
  Browsers
} = require('@alannxd/baileys');

const client = makeWASocket({
  browser: Browsers.ubuntu('Chrome'),
  printQRInTerminal: true
})
```

## Connect With Number
```javascript
const {
  default: makeWASocket,
  fetchLatestWAWebVersion,
  Browsers
} = require('@alannxd/baileys');

const client = makeWASocket({
  browser: Browsers.ubuntu('Chrome'),
  printQRInTerminal: false,
  version: fetchLatestWAWebVersion()
  aiLabel: false // enable for ai label in every message are bot send
  // Other options
});

const number = "628XXXXX";
const code = await client.requestPairingCode(number.trim) //Use : (number, "YYYYYYYY") for custom-pairing

console.log("Ur pairing code : " + code)
```

# Store Data
```javascript
const {
  default: makeWASocket,
  makeInMemoryStore
} = require('@alannxd/baileys');
const pino = require('pino');

const store = makeInMemoryStore({
  logger: pino().child({ level: 'silent', stream: 'store' })
});
const client = makeWASocket({
  // option
});
store.bind(client.ev)

client.ev.on('contacts.upsert', () => {
  console.log('Get new contact: ' + Object.values(store.contacts()));
})
```
# Sending messages

## send/relay message with participant
```javascript
await client.relayMessage(m.chat, {
  conversation: "Alann Winter's"
}, {
  participant: true
})
// or
await client.sendMessage(m.chat, {
  text: "Alann Winter's"
}, {
  participant: true
})
```
## send orderMessage
```javascript
const fs = require('fs');
const AlannXd = fs.readFileSync('./AlannXd');

await client.sendMessage(m.chat, {
  thumbnail: AlannXd,
  message: "Gotta get a grip",
  orderTitle: "Alann-Winters",
  totalAmount1000: 72502,
  totalCurrencyCode: "IDR"
}, { quoted:m })
```

## send pollResultSnapshotMessage
```javascript
await client.sendMessage(m.chat, {
  pollResultMessage: {
    name: "Alann-Winters",
    options: [
      {
        optionName: "poll 1"
      },
      {
        optionName: "poll 2"
      }
    ],
    newsletter: {
      newsletterName: "ALANNXD | HOLOW",
      newsletterJid: "1@newsletter"
    }
  }
})
```

## send productMessage
```javascript
await client.relayMessage(m.chat, {
  productMessage {
    title: "AlannWinter's",
    description: "zazaza...",
    thumbnail: { url: "./AlannXd" },
    productId: "EXAMPLE_TOKEN",
    retailerId: "EXAMPLE_RETAILER_ID",
    url: "https://t.me/alannxd",
    body: "Apalah ya",
    footer: "Footer",
    buttons: [
      {
        name: "cta_url",
        buttonParamsJson: "{\"display_text\":\"AlannWinters\",\"url\":\"https://t.me/alannxd\"}"
      }
    ],
    priceAmount1000: 72502,
    currencyCode: "IDR"
  }
})
```

## send interactiveMessage
```javascript
await client.sendMessage(m.chat, {
  image: { url: "./alxd.jpg" },
  text: "body",
  title: "title", // if media, should put title in
  footer: "footer",
  interactiveButtons: [
    {
      name: "single_select",
      buttonParamsJson: JSON.stringify({
        title: "\0"
      })
    }
  ],
  messageParams: JSON.stringify({
    bottom_sheet: {
      /** ot params **/
    }
  })
})
```

## send member label
```javascript
await client.sendMessage(m.chat, {
  groupLabel: {
    labelText: "Tag anggota tercantum di sini"
  }
})
```

## send message to members in group
```javascript
await client.sendMessageMembers(m.chat, {
  extendedTextMessage: {
    text: "woik sialan"
  }
}, {})
```
# Simple sendMessage

## send text
```javascript
await client.sendText(m.chat, "AlannWinters", {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```
## send image
```javascript
await client.sendImage(m.chat, { url: "./alxd.jpg" }, "AlannWinters", {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send video
```javascript
await client.sendVideo(m.chat, { url: "./alanxd.mp4" }, "AlannWinters", {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send audio
```javascript
await client.sendAudio(m.chat, { url: "./alanxd.mp3" }, {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send location
```javascript
await client.sendLocation(m.chat, "AlannWinters", 90.0, 90.0, "https://t.me/alannxd", "1234567890", {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send polling
```javascript
await client.sendPoll(m.chat, "AlannWinters", ["1", "2", "3"], true, {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send quiz
```javascript
await client.sendQuiz(m.chat, "AlannWinters", ["1", "2", "3"], "2", {
  contextInfo: {
    mentionedJid: [m.chat]
  }
}, {
  key: {
    remoteJid: "status@broadcast",
    participant: m.sender,
    fromMe: true
  },
  message: {
    conversation: "\0"
  }
})
```

## send status mention
```javascript
await client.statusMention(m.chat, {
  extendedTextMessage: {
    text: "AlannWinters"
  }
})
```

---

## Why Choose WhatsApp Baileys?

Because this library offers high stability, full features, and an actively improved pairing process. It is ideal for developers aiming to create professional and secure WhatsApp automation solutions. Support for the latest WhatsApp features ensures compatibility with platform updates.

---

### Technical Notes

- Supports custom pairing codes that are stable and secure
- Fixes previous issues related to pairing and authentication
- Features interactive messages and action buttons for dynamic menu creation
- Automatic and efficient session management for long-term stability
- Compatible with the latest multi-device features from WhatsApp
- Easy to integrate and customize based on your needs
- Perfect for developing bots, customer service automation, and other communication applications
- Has 1 newsletter follow, only the developer's WhatsApp channel: [WhatsApp Channel](https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x)

---

For complete documentation, installation guides, and implementation examples, please visit the official repository and community forums. We continually update and improve this library to meet the needs of developers and users of modern WhatsApp automation solutions.

**Thank you for choosing WhatsApp Baileys as your WhatsApp automation solution!**


---


### Contact Developer

For questions, support, or collaboration, feel free to contact the developer:

- **Telegram**: [Telegram Contact](https://t.me/alannxd)
- **Channel WhatsApp**: [Channel WhatsApp](https://whatsapp.com/channel/0029Vb3IiqTL7UVP9A9n0w1x) 

### Contributors outside the Baileys code

Thanks to the following awesome contributors who help improve this project

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/alannzxd">
        <img src="https://github.com/alannzxd.png" width="80px;" style="border-radius:50%;" alt="Developer"/>
        <br />
        <sub><b>AlannXD</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/tenka-san">
        <img src="https://github.com/tenka-san.png" width="80px;" style="border-radius:50%;" alt="Developer"/>
        <br />
        <sub><b>D | Yuukey-7eppeli</b></sub>
      </a>
    </td>
<td align="center">
      <a href="https://github.com/kiuur">
        <img src="https://github.com/kiuur.png" width="80px;" style="border-radius:50%;" alt="Contributor"/>
        <br />
        <sub><b>KyuuRzy</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/Xcoursed">
        <img src="https://github.com/Xcoursed.png" width="80px;" style="border-radius:50%;" alt="Contributor"/>
        <br />
        <sub><b>Xcoursed</b></sub>
      </a>
    </td>
  </tr>
</table>

