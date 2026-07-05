/* --- UI Transitions and Dashboard Utilities --- */
.hidden {
    display: none !important;
}

/* AI Dashboard Container (Overrides full screen) */
.app-container {
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #343541;
    color: #ECECF1;
    font-family: 'Inter', sans-serif;
}

/* Sidebar Styling */
.sidebar {
    width: 260px;
    background-color: #202123;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border-right: 1px solid #4D4D4F;
}

.sidebar-header h2 {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    color: #fff;
}

.new-chat-btn {
    background-color: transparent;
    border: 1px solid #565869;
    color: #fff;
    padding: 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.2s;
    text-align: left;
    margin-bottom: 1.5rem;
}

.new-chat-btn:hover {
    background-color: #2A2B32;
}

.history p {
    font-size: 0.9rem;
    color: #C5C5D2;
    padding: 10px;
    cursor: pointer;
    border-radius: 6px;
}

.history p:hover {
    background-color: #2A2B32;
}

/* Main Chat Content Styling */
.main-content {
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #343541;
}

.top-bar {
    padding: 1rem 2rem;
    background-color: #343541;
    border-bottom: 1px solid #4D4D4F;
    text-align: center;
}

.chat-display {
    flex: 1;
    overflow-y: auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.message {
    display: flex;
    gap: 1rem;
    max-width: 800px;
    margin: 0 auto;
    width: 100%;
}

.avatar {
    width: 30px;
    height: 30px;
    background-color: #10A37F;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: bold;
    color: white;
}

.user-message .avatar {
    background-color: #5436DA;
}

.text {
    line-height: 1.6;
    font-size: 1rem;
    color: #ECECF1;
    text-align: left;
}

/* Input Box Styling */
.input-area {
    padding: 2rem;
    background: linear-gradient(180deg, rgba(53,55,64,0) 0%, #353740 50%);
}

.input-box {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    background-color: #40414F;
    border-radius: 8px;
    padding: 10px 15px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
}

.input-box input {
    flex: 1;
    background: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
    outline: none;
}

.input-box button {
    background: transparent;
    border: none;
    color: #8E8EA0;
    cursor: pointer;
    padding: 5px;
    transition: color 0.2s;
}

.input-box button:hover {
    color: #10A37F;
}
