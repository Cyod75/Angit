document.addEventListener('DOMContentLoaded', function() {
    // Simular carga
    setTimeout(function() {
        document.getElementById('loader').style.display = 'none';
        document.querySelector('.container').classList.remove('hidden');
    }, 1500);

    // Modales
    const modals = [
        { btnClass: 'moreInfoBtn', modalId: 'modal1' },
        { btnClass: 'moreInfoBtn', modalId: 'modal2' }
    ];

    modals.forEach((modal, index) => {
        const btns = document.getElementsByClassName(modal.btnClass);
        const modalElement = document.getElementById(modal.modalId);
        const span = modalElement.getElementsByClassName('close')[0];

        btns[index].onclick = function() {
            modalElement.classList.remove('hidden');
        }

        span.onclick = function() {
            modalElement.classList.add('hidden');
        }

        window.onclick = function(event) {
            if (event.target == modalElement) {
                modalElement.classList.add('hidden');
            }
        }
    });
});