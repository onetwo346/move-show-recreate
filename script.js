// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.getElementById('start-btn');
    const introPage = document.getElementById('intro-page');
    const mainPage = document.getElementById('main-page');
    const chatBtn = document.getElementById('chat-btn');
    const chatbotModal = document.getElementById('chatbot-modal');
    const closeChatBtn = document.getElementById('close-chat-btn');
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Show main page after tapping start
    startBtn.addEventListener('click', () => {
        introPage.classList.add('hidden');
        mainPage.classList.remove('hidden');
    });

    // Show chatbot modal
    chatBtn.addEventListener('click', () => {
        chatbotModal.classList.remove('hidden');
    });

    // Close chatbot modal
    closeChatBtn.addEventListener('click', () => {
        chatbotModal.classList.add('hidden');
    });

    // Handle sending message to chatbot
    sendBtn.addEventListener('click', () => {
        const userText = userInput.value.trim();
        if (userText) {
            // Display user input in the chat
            const userMessage = document.createElement('p');
            userMessage.textContent = `You: ${userText}`;
            chatbotMessages.appendChild(userMessage);

            // Display bot response (mock response for now)
            const botMessage = document.createElement('p');
            botMessage.textContent = `AI: I'm here to help you with Move Show Recreate! Ask me anything.`;
            chatbotMessages.appendChild(botMessage);

            // Clear the input field
            userInput.value = '';
            chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        }
    });
});
