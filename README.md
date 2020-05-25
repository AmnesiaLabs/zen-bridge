# Zen Bridge 

📣💬 A lightweight, performant CLI iMessage client for macOS:

<img align="right" src="https://i.imgur.com/iRVaeY5.gif" height="320">

- Open source and ridiculously simple Node-based API, based upon the pioneering [code of its predecessor](https://github.com/wtfaremyinitials/osa-imessage).
- Automatically shares new messages with Zen peers (eg. [Zen Client](https://github.com/AmnesiaLabs/zen-client)), and even other Bridges 🤷‍♂️
- Runs on outdated macOS hardware (OS X/macOS 10.10 and up, wipe dust off your old Mac mini)!
- Supports raw file transfers.
- A GUI wrapper for Zen Bridge [is in the works](https://github.com/AmnesiaLabs/zen-bridge-ui)!

[![package version](https://img.shields.io/github/package-json/v/AmnesiaLabs/zen-bridge?color=g&label=version)](https://github.com/AmnesiaLabs/zen-bridge)
[![package issues](https://img.shields.io/github/issues-raw/AmnesiaLabs/zen-bridge)](https://github.com/AmnesiaLabs/zen-bridge)
[![package issues](https://img.shields.io/github/issues-closed/AmnesiaLabs/zen-bridge)](https://github.com/AmnesiaLabs/zen-bridge)


## Links

- See [releases](https://github.com/AmnesiaLabs/zen-bridge/releases) for a detailed version history.
- Please [open an issue](https://github.com/AmnesiaLabs/zen-bridge/issues/new) if anything is missing or unclear in this
  documentation.

<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


<!-- tocstop -->

</details>

# Installation

Use the package manager [npm](https://npmjs.com) to install Zen Bridge's dependencies.
```bash
git clone https://github.com/AmnesiaLabs/zen-bridge
cd zen-bridge
npm i
```

# Usage

```bash
node index.js <relay> <secret pairing uuid>
```

A common launch command may look like:

```bash
$ node index.js https://relay.amnesia.software 84ee59a9-8765-47fd-b161-3bc19f3a846c
https://relay.amnesia.software 84ee59a9-8765-47fd-b161-3bc19f3a846c
Actively listening for activity... Press Control + C to quit.
Connected to relay with secret UUID: 84ee59a9-8765-47fd-b161-3bc19f3a846c
iMessage database successfully mounted to service!
Successfully connected into UUID room.
```

# Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# License
[GNU General Public License v3.0](https://github.com/AmnesiaLabs/zen-bridge/blob/master/LICENSE.md)
