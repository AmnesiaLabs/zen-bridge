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
  socket.emit("raw", { type: "notif", data: s });
}

function joinRoom() {
  console.log(process.argv[2], process.argv[3]);
  socket.emit(
    "client:authenticate",
    {
      relay: process.argv[2],
      uuid: process.argv[3],
    },
    (ack, err) => {
      if (ack) {
        socket.emit("client:setName", process.argv[3], (ack, err) => {
          if (ack) {
            console.log("Successfully connected into UUID room.");
            return;
          } else {
            console.error("Could not connect to relay and/or UUID. Exiting...");
            process.exit();
          }
        });
      } else {
        console.error("Could not connect to relay and/or UUID. Exiting...");
        process.exit();
      }
    }
  );
}

function checkForParams() {
  if (process.argv[3] && process.argv[2]) return;
  console.error("Missing parameters! Exiting...");
  process.exit();
}

checkForParams();

let socket = require("socket.io-client")(process.argv[2]);

async function auth() {
  notifRelay(process.argv[3].substring(0, 8));
  joinRoom();
  return true;
}

auth().then(() => {
  console.info("Connected to relay with secret UUID: " + process.argv[3]);
  let self = this;

  socket.on("raw", (req) => {
    console.log(req);

    if (req.type === "getAttachmentsFromId") {
      let ret = iMessage.getAttachmentsFromId(id).then((c) => {
        c.forEach((attachment) => {
          fs.readFile(
            attachment.filename.replace("~", getUserHome()),
            function (err, buf) {
              stats.fileSent++;
              socket.emit("raw", {
                type: "fileTranser",
                details: attachment,
                handle: handle_id,
                buffer: buf.toString("base64"),
              });
            }
          );
        });
      });
    }

    if (req.type === "recentContacts") {
      iMessage.getRecentChats(50).then((c) => {
        socket.emit("raw", { type: "recentContacts", data: c });
      });
    }

    if (req.type === "send") {
      iMessage.send(h, m, t);
    }

    if (req.type === "join") {
      notifRelay(req.id);
    }

    if (req.type === "ping") {
      notifRelay(process.argv[3]);
    }

    if (req.type === "recentChats") {
      iMessage.getRecentChatsFromId(req.id).then((c) => {
        socket.emit("raw", { type: "recentChats", id: req.id, data: c });
      });
    }
  });

  socket.on("join", (s) => {
    notifRelay(s);
  });
});

iMessage.listen().on("message", (msg) => {
  if (msg.fromMe) return;
  wsRelay(msg);
});
