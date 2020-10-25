const logoGlow = document.getElementById('logo-glow');

window.setInterval(() => {
    logoGlow.style.background = 'url("../images/di-logo-4-glow.svg")'

    window.setTimeout(() => {
        logoGlow.style.background = 'url("../images/di-logo-4.svg")';
    }, 2500)

}, 5000);