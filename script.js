function changeFontStyle() {
    const message = document.getElementById('birthday-message');
    message.style.fontFamily = message.style.fontFamily === 'Arial, sans-serif' ? 'Courier New, monospace' : 'Arial, sans-serif';
}

function generateQuote() {
    const quotes = [
        "The mind is everything. What you think you become.",
        "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
        "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "You, yourself, as much as anybody in the entire universe, deserve your love and affection."
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('buddha-quote').innerText = quotes[randomIndex];
}

function toggleTheme() {
    document.body.classList.toggle('night-mode');
}

function countdown() {
    const eventDate = new Date('May 20, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-timer').innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(timerInterval);
        document.getElementById('countdown-timer').innerText = "Happy Birthday!";
    }
}

const timerInterval = setInterval(countdown, 1000);
countdown();
