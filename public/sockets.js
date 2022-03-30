const socket = io()

const saveMessage = (name, email, message, surname, edad, alias) => {
    socket.emit('client:newmessage', {
        email,
        name,
        message,
        surname,
        edad,
        alias
    })
}

socket.on('server:newmessage', addMessage)

socket.on('server:loadmessages', loadMessage)