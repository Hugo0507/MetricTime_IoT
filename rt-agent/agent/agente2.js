const RtAgent = require("../");

const agent = new RtAgent({
  name: "Prueba cohete espacial",
  username: "darcdev",
  interval: 2000,
  token: "5yQZwZsLCaW9W3kmKxx7Ac",
});

agent.addMetric("Temperatura", function getRss() {
  return Promise.resolve(Math.random() * 4);
});

agent.addMetric("Velocidad", function getRandomPromise() {
  return Promise.resolve(Math.random() * 2);
});

agent.addMetric("Altura", function getRandomCallbakc(callback) {
  setTimeout(() => {
    callback(null, Math.random() * 3);
  }, 1000);
});

agent.connect();

const handler = (payload) => {
  console.log(payload);
};

// agent.on("connected", handler);
// agent.on("disconnected", handler);
// agent.on("message", handler);

// agent.on("agent/connected", handler);
// agent.on("agent/disconnected", handler);
// agent.on("agent/message", (payload) => {
//   console.log(payload);
// });

// // setTimeout(() => agent.disconnect(), 10000);
