// script.js

document.addEventListener('DOMContentLoaded', function() {
    var hamburgerMenu = document.getElementById('hamburger-menu');
    var hamburgerMenuContent = document.getElementById('hamburger-menu-content');

    hamburgerMenu.addEventListener('click', function() {
        // ナビゲーションメニューの表示/非表示を切り替え
        if (hamburgerMenuContent.style.display === 'block') {
            hamburgerMenuContent.style.display = 'none';
        } else {
            hamburgerMenuContent.style.display = 'block';
        }
    });
});