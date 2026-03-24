// SCRIPT SEDERHANA UNTUK TOMBOL MENU MOBILE

document.addEventListener('DOMContentLoaded', function() {
    var mobileBtn = document.getElementById('mobileBtn');
    var mobileNav = document.getElementById('mobileNav');
    var mobileLinks = mobileNav.querySelectorAll('a');

    // Fungsi klik tombol menu
    if (mobileBtn && mobileNav) {
        mobileBtn.addEventListener('click', function() {
            var isOpen = mobileNav.classList.contains('open');
            if (isOpen) {
                mobileNav.classList.remove('open');
                mobileBtn.textContent = 'Menu ☰';
            } else {
                mobileNav.classList.add('open');
                mobileBtn.textContent = 'Tutup ✖';
            }
        });

        // Tutup menu otomatis jika link diklik
        mobileLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                mobileNav.classList.remove('open');
                mobileBtn.textContent = 'Menu ☰';
            });
        });
    }
});
