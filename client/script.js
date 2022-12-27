const socket = io('ws://localhost:3004/qu')
socket.on("connect", () => { console.log('[Client] Connected') });

socket.emit('hello', { name: 'Sam' }, (response) => {
    console.log('[Client] got response')
    console.log(response);
})