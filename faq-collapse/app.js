const toggleFaq = document.querySelectorAll('.faq-toggle');

const faq = document.querySelectorAll('.faq')

toggleFaq.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.parentNode.classList.toggle('active');

        if (!btn.parentNode) {
            btn.parentNode.classList.remove('active');
        }
        
    })
})