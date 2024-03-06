// JavaScript para el primer conjunto de filtros
document.addEventListener('DOMContentLoaded', function () {
    const marcas = ['Audi', 'BMW', 'Chevrolet', 'Dodge', 'Ford', 'Honda', 'Toyota']; // Lista de marcas
    const modelosPorMarca = {
        'Audi': ['A1'],
        'BMW': ['118i', '320i'],
        'Chevrolet': ['Camaro', 'Cruze', 'S10'],
        'Dodge': ['Ram 1500'],
        'Ford': ['F150', 'Fiesta', 'Focus', 'Mondeo', 'Mustang', 'Ranger'],
        'Honda': ['Accord', 'Civic', 'CR-V', 'HR-V'],
        'Toyota': ['86', 'Corolla', 'Camry', 'Hilux', 'RAV4', 'SW4'],
        // Puedes agregar más modelos según la marca
    };

    const marcaSelect = document.querySelector('.marca-select'); // Modificado
    const modeloSelect = document.querySelector('.modelo-select'); // Modificado

    // Llenar opciones de marca
    marcas.forEach(marca => {
        const option = document.createElement('option');
        option.value = marca;
        option.textContent = marca;
        marcaSelect.appendChild(option);
    });

    // Actualizar opciones de modelo al seleccionar una marca
    marcaSelect.addEventListener('change', function () {
        const selectedMarca = this.value;
        modeloSelect.innerHTML = ''; // Limpiar opciones anteriores

        if (selectedMarca === 'todos') {
            modeloSelect.innerHTML = '<option value="todos">Todos</option>'; // Mostrar 'Todos' si se selecciona la opción 'Todos'
        } else {
            modelosPorMarca[selectedMarca].forEach(modelo => {
                const option = document.createElement('option');
                option.value = modelo;
                option.textContent = modelo;
                modeloSelect.appendChild(option);
            });
        }

        // Filtrar autos al cambiar la marca y el modelo
        filtrarAutos();
    });

    // Filtrar autos al cambiar el modelo
    modeloSelect.addEventListener('change', function () {
        // Filtrar autos al cambiar el modelo
        filtrarAutos();
    });

    // Función para filtrar autos según marca y modelo seleccionados
    function filtrarAutos() {
        const selectedMarca = marcaSelect.value;
        const selectedModelo = modeloSelect.value;
        const carList = document.querySelector('.carList');
        const autos = obtenerAutosFiltrados(selectedMarca, selectedModelo); // Implementa esta función según tus datos

        // Mostrar autos filtrados en la página
        carList.innerHTML = '';

        if (autos.length === 0) {
            const noResultsMessage = document.createElement('div');
            noResultsMessage.textContent = 'En estos momentos no contamos con este modelo en stock';
            noResultsMessage.classList.add('no-results-message');
            carList.appendChild(noResultsMessage);
        } else {
            autos.forEach(auto => {
                const carCard = document.createElement('div');
                carCard.classList.add('car-card');

                const carImage = document.createElement('img');
                carImage.classList.add('car-image');
                carImage.src = auto.imagen; // Ajusta la ruta de la imagen según tus datos
                carImage.alt = `${auto.marca} ${auto.modelo}`;

                const carDetails = document.createElement('div');
                carDetails.classList.add('car-details');
                carDetails.innerHTML = `
                    <strong>${auto.marca} ${auto.modelo}</strong><br>
                    <span>Año: ${auto.año}</span><br>
                    <span>Kilometros: ${auto.kilometros}</span><br>
                `;

                const carPrice = document.createElement('div');
                carPrice.classList.add('car-price');
                carPrice.textContent = `${auto.precio}`;

                // Agregar elementos a la tarjeta de automóvil
                carCard.appendChild(carImage);

                const detailsAndPriceContainer = document.createElement('div');
                detailsAndPriceContainer.classList.add('details-and-price-container');
                detailsAndPriceContainer.appendChild(carDetails);
                detailsAndPriceContainer.appendChild(carPrice);

                carCard.appendChild(detailsAndPriceContainer);

                // Agregar la tarjeta de automóvil al contenedor principal
                carList.appendChild(carCard);
            });
        }
    }

    // Función de ejemplo para obtener autos filtrados (puedes reemplazarla con tu lógica)
    function obtenerAutosFiltrados(marca, modelo) {
        // Lógica para filtrar autos según la marca y el modelo seleccionados
        // Ejemplo de datos de autos (puedes ajustar según tus datos)
        const autos = [
            { marca: 'Audi', modelo: 'A1', año: 2022, kilometros: '3.000', precio: 'us$32.000', imagen: '../image/audi a1.png' },
            { marca: 'BMW', modelo: '320i', año: 2014, kilometros: '40.000', precio: 'us$25.000', imagen: '../image/liftcar.png' },
            { marca: 'Chevrolet', modelo: 'Camaro', año: 2022, kilometros: '1.000', precio: 'us$94.000', imagen: '../image/camaro.png' },
            { marca: 'Dodge', modelo: 'Ram 1500', año: 2015, kilometros: '70.000', precio: 'us$29.000', imagen: '../image/ram.png' },
        ];

        if (marca === 'todos' && modelo === 'todos') {
            return autos; // Mostrar todos los autos si no se selecciona ninguna marca ni modelo específico
        } else if (marca === 'todos') {
            return autos.filter(auto => auto.modelo === modelo);
        } else if (modelo === 'todos') {
            return autos.filter(auto => auto.marca === marca);
        } else {
            return autos.filter(auto => auto.marca === marca && auto.modelo === modelo);
        }
    }

    // Mostrar todos los autos al cargar la página
    filtrarAutos();
});

// JavaScript para el segundo conjunto de filtros
document.addEventListener('DOMContentLoaded', function () {
    // Aquí coloca el código JavaScript para el segundo conjunto de filtros
});
