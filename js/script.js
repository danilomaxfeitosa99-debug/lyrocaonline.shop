document.addEventListener('DOMContentLoaded', () => {
    // Redirecionar todos os links e botões para o Google
    const allLinks = document.querySelectorAll('a, button, .clickable');
    
    allLinks.forEach(element => {
        element.addEventListener('click', (e) => {
            // Se for um link para as páginas legais, permite a navegação normal
            const href = element.getAttribute('href');
            if (href && (href.includes('privacy.html') || href.includes('terms.html') || href.includes('index.html'))) {
                return;
            }
            
            // Caso contrário, redireciona para o Google
            e.preventDefault();
            window.location.href = 'https://google.com';
        });
    });

    // Smooth scroll para âncoras internas (se houver)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
