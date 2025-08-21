// =============================
// Mavi Amiral — script.js
// =============================

// 1️⃣ Neon gökkuşağı animasyonu hero ve section başlıkları için
const rainbowTexts = document.querySelectorAll('.rainbow-text, .section-title');

rainbowTexts.forEach(text => {
  let hue = 0;
  setInterval(() => {
    hue += 1;
    text.style.background = `linear-gradient(90deg, 
      hsl(${(hue)%360},100%,50%), 
      hsl(${(hue+60)%360},100%,50%), 
      hsl(${(hue+120)%360},100%,50%), 
      hsl(${(hue+180)%360},100%,50%), 
      hsl(${(hue+240)%360},100%,50%), 
      hsl(${(hue+300)%360},100%,50%) )`;
    text.style.webkitBackgroundClip = "text";
    text.style.webkitTextFillColor = "transparent";
  }, 100);
});

// 2️⃣ Kart hover efektine neon parıltı ekleme
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.boxShadow = "0 0 30px rgba(122,162,255,0.8), 0 0 60px rgba(255,110,199,0.6)";
    card.style.transform = "translateY(-10px)";
  });
  card.addEventListener('mouseleave', () => {
    card.style.boxShadow = "0 0 20px rgba(0,0,0,0.6)";
    card.style.transform = "translateY(0)";
  });
});

// 3️⃣ Buton hover animasyonu
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.style.boxShadow = "0 0 25px rgba(122,162,255,0.9), 0 0 50px rgba(255,110,199,0.7)";
  });
  btn.addEventListener('mouseleave', () => {
    btn.style.boxShadow = "0 0 15px var(--accent), 0 0 30px var(--highlight)";
  });
});

// 4️⃣ Scroll ile section fade-in efekti
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(scrollY + window.innerHeight > sectionTop + 100){
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
      section.style.transition = "all 1s ease-out";
    } else {
      section.style.opacity = 0;
      section.style.transform = "translateY(50px)";
    }
  });
});

// 5️⃣ Contact form — kullanıcı dostu teşekkür mesajı
const contactForm = document.getElementById('contactForm');
const thankMessage = document.getElementById('thankMessage');

if(contactForm && thankMessage){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault(); // sayfa yenilenmesini engelle
    contactForm.style.display = 'none'; // formu gizle
    thankMessage.style.display = 'block'; // teşekkür mesajını göster
  });
}
