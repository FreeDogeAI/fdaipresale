// UC Paket Verileri
const ucPackages = [
    {
        id: 1,
        amount: 60,
        normalPrice: 10,
        discountedPrice: 9,
        popular: false
    },
    {
        id: 2,
        amount: 325,
        normalPrice: 52,
        discountedPrice: 45,
        popular: true
    },
    {
        id: 3,
        amount: 660,
        normalPrice: 105,
        discountedPrice: 89,
        popular: true
    },
    {
        id: 4,
        amount: 1800,
        normalPrice: 275,
        discountedPrice: 229,
        popular: true
    },
    {
        id: 5,
        amount: 3850,
        normalPrice: 500,
        discountedPrice: 450,
        popular: false
    }
];

// Paketleri DOM'a yükle
function loadPackages() {
    const container = document.getElementById('package-container');
    
    ucPackages.forEach(pkg => {
        const packageHTML = `
            <div class="package-card ${pkg.popular ? 'popular' : ''}">
                <div class="package-header">
                    ${pkg.amount} UC
                    ${pkg.popular ? '<span class="popular-badge">POPÜLER</span>' : ''}
                </div>
                <div class="package-price">
                    <div class="normal-price">${pkg.normalPrice} TL</div>
                    <div class="discounted-price">${pkg.discountedPrice} TL</div>
                    <div class="saving">%${Math.round((1 - pkg.discountedPrice/pkg.normalPrice)*100)} tasarruf</div>
                </div>
                <button class="package-button" onclick="addToCart(${pkg.id})">
                    Hemen Al
                </button>
            </div>
        `;
        container.innerHTML += packageHTML;
    });
}

// Sepet işlevleri
let cart = [];

function addToCart(packageId) {
    const selectedPackage = ucPackages.find(pkg => pkg.id === packageId);
    cart.push(selectedPackage);
    updateCartCount();
    
    // Bildirim göster
    alert(`${selectedPackage.amount} UC sepete eklendi!`);
}

function updateCartCount() {
    const cartBtn = document.querySelector('.cart-btn');
    cartBtn.textContent = `Sepetim (${cart.length})`;
}

// Geri sayım zamanlayıcısı
function startCountdown() {
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
            countdownElement.textContent = "KAMPANYA BİTTİ!";
        }
    }, 1000);
}

// Sayfa yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', () => {
    loadPackages();
    startCountdown();
});
