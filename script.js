document.addEventListener('DOMContentLoaded', function() {
    // Logo kontrolü
    const logo = document.getElementById('site-logo');
    logo.onerror = function() {
        const container = document.querySelector('.maintenance-container');
        const errorText = document.createElement('h2');
        errorText.textContent = 'Can eli Barzani PUBG UC';
        errorText.style.color = '#ff5500';
        container.insertBefore(errorText, container.firstChild);
        logo.style.display = 'none';
    };

    // Geri sayım
    const countdownElement = document.getElementById('countdown-timer');
    let timeLeft = 3 * 60 * 60; // 3 saat
    
    const timer = setInterval(() => {
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;
        
        countdownElement.textContent = 
            `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timer);
            countdownElement.textContent = "SİTEMİZ AÇILDI!";
            countdownElement.style.color = "#25D366";
        }
    }, 1000);
});
