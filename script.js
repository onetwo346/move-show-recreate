// Entry to Main Transition
document.querySelector('.pulsate').addEventListener('click', () => {
    const entry = document.getElementById('entry');
    const main = document.getElementById('main');
    entry.style.transition = 'opacity 0.5s';
    entry.style.opacity = '0';
    setTimeout(() => {
        entry.classList.add('hidden');
        main.classList.remove('hidden');
        main.style.opacity = '1';
    }, 500);
});

// Chatbot Logic
const chatbotOrb = document.querySelector('.chatbot-orb');
const chatbotBox = document.getElementById('chatbot-box');
const chatbotText = document.getElementById('chatbot-text');
const chatbotClose = document.getElementById('chatbot-close');
const summaryInput = document.getElementById('summary-input');
const generateBtn = document.getElementById('generate-btn');
const searchBtn = document.getElementById('search-btn');
const output = document.getElementById('output');
const scriptOutput = document.getElementById('script-output');
const characterOutput = document.getElementById('character-output');
const animationOutput = document.getElementById('animation-output');
const soundOutput = document.getElementById('sound-output');
const exportBtn = document.getElementById('export-btn');

chatbotOrb.addEventListener('click', () => {
    chatbotBox.classList.toggle('hidden');
});

chatbotClose.addEventListener('click', () => {
    chatbotBox.classList.add('hidden');
});

// Simulated Generation (Client-Side)
generateBtn.addEventListener('click', () => {
    const summary = summaryInput.value.trim();
    if (!summary) {
        chatbotText.textContent = 'Please enter a summary first!';
        return;
    }

    chatbotText.textContent = `Generating from: "${summary}"...`;
    output.classList.remove('hidden');

    // Fake Script Generation
    scriptOutput.innerHTML = `<p><strong>Script:</strong> INT. DARK ROOM - NIGHT. A figure whispers, "${summary.split('.')[0]}."</p>`;

    // Fake Character Design
    characterOutput.innerHTML = `<p><strong>Characters:</strong> Hero - Tall, mysterious, glowing eyes.</p>`;

    // Fake Animation
    animationOutput.innerHTML = `<p><strong>Animation:</strong> 2D scene - Hero walks through neon-lit streets.</p>`;

    // Fake Sound
    soundOutput.innerHTML = `<p><strong>Sound:</strong> Eerie synth music, footsteps echo.</p>`;
});

// Simulated Search
searchBtn.addEventListener('click', () => {
    const summary = summaryInput.value.trim();
    chatbotText.textContent = summary
        ? `Searching for "${summary}"... Found: "Cosmic Escape" (pretend movie).`
        : 'Searching... Here’s a default: "Starbound Journey."';
    output.classList.remove('hidden');
    scriptOutput.innerHTML = `<p><strong>Script:</strong> EXT. SPACE - DAY. A ship drifts silently.</p>`;
    characterOutput.innerHTML = `<p><strong>Characters:</strong> Pilot - Brave, scarred.</p>`;
    animationOutput.innerHTML = `<p><strong>Animation:</strong> 3D ship zooms past stars.</p>`;
    soundOutput.innerHTML = `<p><strong>Sound:</strong> Engine hum, distant explosions.</p>`;
});

// Export (Simulated)
exportBtn.addEventListener('click', () => {
    chatbotText.textContent = 'Exporting your movie! (Pretend MP4 downloaded.) Fuel our adventure?';
});
