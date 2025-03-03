// Intro to Main Transition
document.querySelector('.pulsate').addEventListener('click', () => {
    const intro = document.getElementById('intro');
    const main = document.getElementById('main');
    intro.style.opacity = '0';
    setTimeout(() => {
        intro.classList.add('hidden');
        main.classList.remove('hidden');
        main.style.opacity = '1';
    }, 500); // Smooth fade
});

// Chatbot Toggle
const chatbotOrb = document.querySelector('.chatbot-orb');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotClose = document.getElementById('chatbot-close');
const chatbotText = document.getElementById('chatbot-text');

chatbotOrb.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
});

chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.add('hidden');
});

// Search or Generate Logic (Simulated)
document.getElementById('search-generate').addEventListener('click', () => {
    chatbotBox.classList.remove('hidden');
    const userInput = prompt('Search (e.g., "sci-fi") or Generate (type a summary):');
    if (userInput) {
        if (userInput.toLowerCase().includes('search')) {
            chatbotText.textContent = `Searching... Here’s a sci-fi short: "The Last Orbit" (pretend I found it!). Want to play it?`;
        } else {
            chatbotText.textContent = `Generating from: "${userInput}". Script: "INT. SPACESHIP - NIGHT. A lone astronaut stares at a dying star." Want visuals next?`;
        }
    }
});
