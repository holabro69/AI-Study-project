// Adding a console log so you can verify the script loaded properly in DevTools
console.log("Nexus AI Script Initialized");

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Logic
    const getStartedBtn = document.getElementById('get-started-btn');
    const landingPage = document.getElementById('landing-page');
    const aiDashboard = document.getElementById('ai-dashboard');
    const mainBody = document.getElementById('main-body');
    
    if (getStartedBtn && landingPage && aiDashboard) {
        getStartedBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            aiDashboard.classList.remove('hidden');
            mainBody.style.backgroundColor = '#343541'; 
        });
    } else {
        console.error("Navigation elements not found! Check your HTML IDs.");
    }

    // 2. AI Chat Logic
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

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
        
        if (chatDisplay) {
            chatDisplay.appendChild(messageDiv);
            chatDisplay.scrollTop = chatDisplay.scrollHeight;
        }
    }

    function handleSend() {
        if (!userInput) return;
        const text = userInput.value.trim();
        if (text === '') return;

        addMessage(text, 'user');
        userInput.value = '';

        setTimeout(() => {
            addMessage("Backend not connected yet! Once we build the AI model, I will process: '" + text + "'", 'ai');
        }, 1000);
    }

    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', handleSend);
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault(); // Prevents accidental page reloads on mobile
                handleSend();
            }
        });
    }
});
