document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

    // Function to add a message to the chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');

        const avatarDiv = document.createElement('div');
        avatarDiv.classList.add('avatar');
        avatarDiv.textContent = sender === 'user' ? 'U' : 'AI';

        const textDiv = document.createElement('div');
        textDiv.classList.add('text');
        textDiv.textContent = text;

        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(textDiv);
        chatDisplay.appendChild(messageDiv);

        // Auto-scroll to bottom
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    // Handle sending message
    function handleSend() {
        const text = userInput.value.trim();
        if (text === '') return;

        // 1. Show user message
        addMessage(text, 'user');
        userInput.value = '';

        // 2. Simulate AI response (We will replace this with your actual AI backend later)
        setTimeout(() => {
            addMessage("I am a static interface right now. Once we build the backend, I will process: '" + text + "'", 'ai');
        }, 1000);
    }

    // Listen for click
    sendBtn.addEventListener('click', handleSend);

    // Listen for Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
});
