// Hiệu ứng gõ chữ (Typing Effect)
const textElement = document.querySelector('.typing-text');
const texts = ['an IT Student', 'a Web Developer in future'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];

    if (index < currentText.length) {
        letter = currentText.slice(0, ++index);
        setTimeout(type, Math.random() * 100 + 50); 
    } else {
        setTimeout(() => {
            count++;
            index = 0;
            type();
        }, 2000);
    }
    textElement.textContent = letter;
})();

// Hiệu ứng đổi màu Navbar khi cuộn chuột
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        navbar.style.borderBottom = '1px solid var(--accent-color)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.9)';
        navbar.style.borderBottom = '1px solid #333';
    }
});