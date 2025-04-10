document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const container = document.querySelector('.container');
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const moreInfoBtn = document.getElementById('moreInfoBtn');

    // Pantalla de carga
    setTimeout(() => {
        loader.style.display = 'none';
        container.classList.remove('hidden');
    }, 1500);

    // Mostrar modal
    moreInfoBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
    });

    // Cerrar modal
    closeBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Cerrar modal con clic fuera
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
