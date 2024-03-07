document.addEventListener("DOMContentLoaded", function () {
    const showFormBtn = document.getElementById("showFormBtn");
    const formContainer = document.querySelector(".filtradoPC");

    function toggleFormVisibility() {
        if (window.innerWidth >= 1100) {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "none";
        }
    }

    // Función para cerrar el formulario si se hace clic fuera de él
    function closeFormOnClickOutside(event) {
        if (!formContainer.contains(event.target) && event.target !== showFormBtn) {
            formContainer.style.display = "none"; // Oculta el formulario si se hace clic fuera de él
        }
    }

    // Ejecutar la función al cargar la página
    toggleFormVisibility();

    // Agregar un event listener al botón
    showFormBtn.addEventListener("click", function () {
        formContainer.style.display = formContainer.style.display === "none" ? "block" : "none";
    });

    // Agregar un event listener para ajustar la visibilidad del formulario cuando cambie el tamaño de la ventana
    window.addEventListener("resize", toggleFormVisibility);

    // Agregar un event listener al documento para cerrar el formulario si se hace clic fuera de él
    document.addEventListener("click", closeFormOnClickOutside);
});
