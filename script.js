const messages = document.getElementById("messages");
const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");


function addMessage(text, type) {

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.remove();
    }

    const messageRow = document.createElement("div");

    messageRow.classList.add(
        "message-row",
        type
    );


    const bubble = document.createElement("div");

    bubble.classList.add("message-bubble");

    bubble.textContent = text;


    messageRow.appendChild(bubble);

    messages.appendChild(messageRow);


    messages.scrollTop =
        messages.scrollHeight;
}


function sendMessage() {

    const text =
        messageInput.value.trim();


    if (text === "") {
        return;
    }


    addMessage(
        text,
        "user"
    );


    messageInput.value = "";

    messageInput.style.height = "auto";


    setTimeout(function () {

        addMessage(
            "Dit is voorlopig een testantwoord van je AI-interface.",
            "assistant"
        );

    }, 700);
}


sendButton.addEventListener(
    "click",
    sendMessage
);


messageInput.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !event.shiftKey
        ) {

            event.preventDefault();

            sendMessage();
        }

    }
);


messageInput.addEventListener(
    "input",
    function () {

        this.style.height = "auto";

        this.style.height =
            Math.min(
                this.scrollHeight,
                160
            ) + "px";

    }
);
