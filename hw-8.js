const generatorBtn = document.getElementById('Generator');

const miniGamesEl = document.querySelector('.mini-games');
const aboutGamesEl = document.querySelector('.about-games');
const topEl = document.querySelector('.top');

if (generatorBtn) {
    generatorBtn.addEventListener('click', function(event) {
        event.preventDefault();

        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

        if (miniGamesEl) {
            miniGamesEl.style.backgroundColor = hexColor;
        }

        if (aboutGamesEl) {
            aboutGamesEl.style.backgroundColor = hexColor;
        }

        if (topEl) {
            topEl.style.backgroundColor = hexColor;
        }
    });
}