document.addEventListener('DOMContentLoaded', () => {
    // Page Elements
    const getStartedBtn = document.getElementById('get-started-btn');
    const landingPage = document.getElementById('landing-page');
    const aiDashboard = document.getElementById('ai-dashboard');
    
    // Chat Elements
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

    // 1. Navigation: Click "GET STARTED" to switch views
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            aiDashboard.classList.remove('hidden');
            // Change body background color to match chat theme
            document.body.style.backgroundColor = '#343541';
        });
    }

    // 2. Chat logic handler
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

        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    function handleSend() {
        const text = userInput.value.trim();
        if (text === '') return;

        addMessage(text, 'user');
        userInput.value = '';

        // Vibe placeholder simulation for now
        setTimeout(() => {
            addMessage("Vibe checked! Front end pipeline works perfectly. Next step: building our AI backend.", 'ai');
        }, 1000);
    }

    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', handleSend);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
});
}
