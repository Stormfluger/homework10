
'use strinct';

const socketConnect = new WebSocket('wss://neto-api.herokuapp.com/mouse');

socketConnect.addEventListener('open', (event) => {
  showBubbles(event.target);
});

document.addEventListener('click', (event) => {
  socketConnect.send(JSON.stringify({
    x: event.clientX,
    y: event.clientY
  }));
});
