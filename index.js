const iMessage = require("./osa");
const fs = require("fs");
const yargs = require("yargs");

function getUserHome() {
  let envlet = process.platform == "win32" ? "USERPROFILE" : "HOME";
  return process.env[envlet];
}

function wsRelay(msg) {
  socket.emit("message", msg);
  return;
}

function notifRelay(s) {
  socket.emit("notif", s.substring(0, 5));
  return;
}

function checkForParams() {
  if (process.argv[3] && process.argv[2]) return;
  console.error("Missing parameters! Exiting...");
  process.exit();
}

checkForParams();

let socket = require("socket.io-client")(process.argv[2]);

async function auth() {
  socket.emit("handshake", process.argv[3]);
  notifRelay(process.argv[3].substring(0, 8));
  return true;
}

auth().then(() => {
  console.info("Connected to relay with secret UUID: " + process.argv[3]);
  let self = this;
  socket.on("getAttachmentsFromId", (id, handle_id) => {
    let ret = iMessage.getAttachmentsFromId(id).then((c) => {
      c.forEach((attachment) => {
        fs.readFile(attachment.filename.replace("~", getUserHome()), function (
          err,
          buf
        ) {
          stats.fileSent++;
          socket.emit("fileTransfer", {
            details: attachment,
            handle: handle_id,
            buffer: buf.toString("base64"),
          });
        });
      });
      return;
    });
  });

  socket.on("recentContacts", (id) => {
    let ret = iMessage.getRecentChats(50).then((c) => {
      socket.emit("recentContacts", c);
      stats.fileSent++;
    });
    return;
  });

  socket.on("recentChats", (id) => {
    let ret = iMessage.getRecentChatsFromId(id).then((c) => {
      socket.emit("recentChats", c);
      stats.fileSent++;
    });
  });

  socket.on("send", (h, m, t) => {
    iMessage.send(h, m, t);
    stats.msgSent++;
  });

  socket.on("join", (s) => {
    notifRelay(s);
  });
});

iMessage.listen().on("message", (msg) => {
  if (msg.fromMe) return;
  wsRelay(msg);
});
