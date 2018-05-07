'use strict';

const socket = new WebSocket('wss://neto-api.herokuapp.com/counter'),
      connections = document.querySelector('.counter'),
      errors = document.querySelector('output.errors');

window.addEventListener('beforeunload', () => {
  socket.close(1000, 'Соединение закрыто');
});

socket.addEventListener('message', (event) => {
  const data = JSON.parse(event.data);
  connections.textContent = data.connections;
  errors.textContent = data.errors;
});