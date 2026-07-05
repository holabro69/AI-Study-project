document.addEventListener('DOMContentLoaded', () => {
    // ---------------------------------------------------------
    // 1. PAGE NAVIGATION LOGIC
    // ---------------------------------------------------------
    const getStartedBtn = document.getElementById('get-started-btn');
    const landingPage = document.getElementById('landing-page');
    const aiDashboard = document.getElementById('ai-dashboard');
    const mainBody = document.getElementById('main-body');
    
    // When "GET STARTED" is clicked, hide landing page and show dashboard
    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', () => {
            landingPage.classList.add('hidden');
            aiDashboard.classList.remove('hidden');
            // Change body color to match the dark dashboard
            mainBody.style.backgroundColor = '#343541'; 
        });
    }

    // ---------------------------------------------------------
    // 2. AI CHAT LOGIC (READY FOR BACKEND INTEGRATION)
    // ---------------------------------------------------------
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatDisplay = document.getElementById('chat-display');

    // Helper function to draw message bubbles on the screen
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

        // Auto-scroll to the newest message
        chatDisplay.scrollTop = chatDisplay.scrollHeight;
    }

    // Handles what happens when you press Send or hit Enter
    function handleSend() {
        const text = userInput.value.trim();
        if (text === '') return;

        // 1. Display the User's message
        addMessage(text, 'user');
        userInput.value = ''; // Clear the input box

        // ---------------------------------------------------------
        // 🚨 EDIT HERE: FUTURE AI BACKEND INTEGRATION 🚨
        // Right now, this just simulates an AI replying after 1 second.
        // Later, we will delete this setTimeout and replace it with:
        // await fetch('your-backend-api-url', { method: 'POST', body: text })
        // ---------------------------------------------------------
        setTimeout(() => {
            addMessage("Backend not connected yet! Once we build the AI model, I will process: '" + text + "'", 'ai');
        }, 1000);
    }

    // Listen for mouse click on Send button
    if (sendBtn && userInput) {
        sendBtn.addEventListener('click', handleSend);
        
        // Listen for Enter key on keyboard
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSend();
        });
    }
});
