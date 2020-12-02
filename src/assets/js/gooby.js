
window.addEventListener('DOMContentLoaded', function () {
    
    var themes = [{ theme: 'theme-light' }, { theme: 'theme-dark' }];
    console.log(+!true)
    var themeToggle = document.querySelector('#checkbox');
    themeToggle.checked = false;

    themeToggle.addEventListener('change', function () {
        var root = document.querySelector('#app-root');
        root.classList.remove(themes[+!this.checked].theme);
        root.classList.add(themes[+this.checked].theme);

        document.querySelector('h1.title').classList.toggle('change');
    })

    var count = 0;

    function toggleTheme() {
        if (count++ == 10) return;
        themeToggle.click();
        setTimeout(toggleTheme, 500);
    }

    setTimeout(function () {
        toggleTheme();
    }, 1000);
}, false);