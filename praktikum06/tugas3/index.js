function Send(){
    let square = document.getElementById('chatbox')
    let message = document.getElementById('text')

    if (!message == ' ') {
        square.innerHTML += `<p>${message.value}</p>`
    }

    return false;
}