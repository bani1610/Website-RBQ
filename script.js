// =============================================
//  RBQ - Rumah Bimbingan Quran | Script
// =============================================

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    // Restore scrolling
    document.body.style.overflow = 'auto';
}

// Menutup modal jika area abu-abu (backdrop) diklik
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    if(modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
});
