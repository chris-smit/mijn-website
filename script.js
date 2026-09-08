const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");

sendButton.addEventListener("click", function () {

    const message = messageInput.value;

    if (message.trim() === "") {
        return;
    }

    console.log(message);

    messageInput.value = "";

});
