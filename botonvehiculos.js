document.addEventListener("DOMContentLoaded", function () {
    const showFormBtn = document.getElementById("showFormBtn");
    const formContainer = document.querySelector(".filtradoPC");

    function toggleFormVisibility() {
        if (window.innerWidth >= 1100) {
            formContainer.style.display = "block";
            // Si la ventana es mayor o igual a 1100px, mostramos el contenedor
            document.removeEventListener("click", closeFormOnClickOutside); // Eliminamos el listener de clic para cerrar fuera del contenedor
        } else {
            formContainer.style.display = "none";
            // Si la ventana es menor que 1100px, ocultamos el contenedor
            document.addEventListener("click", closeFormOnClickOutside); // Agregamos el listener de clic para cerrar fuera del contenedor
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
});
