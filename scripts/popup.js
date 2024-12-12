document.addEventListener('DOMContentLoaded', function () {
    const skillItems = document.querySelectorAll('.skill-item');
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupText = document.getElementById('popup-text');
    const closeButton = document.querySelector('.close-button');

    // Datos del popup para cada skill
    const skillTexts = {
        "Bancas y Finanzas": "- Estudiando para seguridad de tú dinero. \n- Numerarios y SinpeMóvil.\n - Ciclos contables.",
        "Estudiante": " - También soy Estudiante de ciberseguridad en Python /hacking ético.\n - Y Estudiante de programación con Python, Bash o Java.\n - Estudiante de otras áreas de Bancas y Finanzas.",
        "Programación": " - Desarrollo de web.\n  - Conocimiento en lenguajes como Python.",
        "Intermediacion Financiera": " - Mercados Financieros.\n - Inversiones.\n - Comportamiento del consumidor."
    };
    
    

    skillItems.forEach(function (item) {
        item.addEventListener('click', function () {
            const skillTitle = this.getAttribute('data-skill');
            popupTitle.textContent = skillTitle;
            popupText.textContent = skillTexts[skillTitle]; || "No hay información adicional disponible.";
            popup.style.display = 'flex';
        });
    });

    closeButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});
