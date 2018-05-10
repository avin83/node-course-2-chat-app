var socket = io();

socket.on('connect', function () {
  console.log('Connect to server');

  socket.emit('createMessage', {
    from: 'avin83',
    text: 'hey this is avin83'
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('New message from server', message);
});
