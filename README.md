# Zen Bridge

Zen Bridge is a CLI iMessage client for macOS.

## Installation

Use the package manager [npm](https://npmjs.com) to install Zen Bridge's dependencies.
```bash
git clone https://github.com/AmnesiaLabs/zen-bridge
cd zen-bridge
npm i
```

## Usage

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

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GNU General Public License v3.0](https://github.com/AmnesiaLabs/zen-bridge/blob/master/LICENSE.md)
