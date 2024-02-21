document.addEventListener('DOMContentLoaded', function () {
    const marcas = ['Toyota', 'Honda', 'Ford', 'BMW']; // Lista de marcas
    const modelosPorMarca = {
        'Toyota': ['Corolla', 'Camry', 'RAV4', '86', 'Hylux', 'SW4'],
        'Honda': ['Civic', 'Accord', 'CR-V', 'HR-V'],
        'Ford': ['Focus', 'Fiesta', 'Mustang', 'Mondeo', 'F150', 'Ranger'],
        'BMW': ['320i', '118i']
        // Puedes agregar más modelos según la marca
    };

    const marcaSelect = document.getElementById('marca');
    const modeloSelect = document.getElementById('modelo');

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

        // Filtrar autos al cambiar la marca
        filtrarAutos();
    });

    // Filtrar autos al cambiar el modelo
    modeloSelect.addEventListener('change', filtrarAutos);

    // Función para filtrar autos según marca y modelo seleccionados
    function filtrarAutos() {
        const selectedMarca = marcaSelect.value;
        const selectedModelo = modeloSelect.value;
        const carList = document.getElementById('carList');
        const autos = obtenerAutosFiltrados(selectedMarca, selectedModelo); // Implementa esta función según tus datos

        // Mostrar autos filtrados en la página
        carList.innerHTML = '';

        if (autos.length === 0) {
            const noResultsMessage = document.createElement('div');
            noResultsMessage.textContent = 'No se encontraron resultados.';
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
            { marca: 'Toyota', modelo: 'Corolla', año: 2022, precio: '$25.000', imagen: 'toyota-corolla.jpg' },
            { marca: 'BMW', modelo: '320i', año: 2014, kilometros:'40.000', precio: 'us$25.000', imagen: '../image/liftcar.png' },
            { marca: 'Toyota', modelo: 'Camry', año: 2021, precio: '$30.000', imagen: 'toyota-camry.jpg' },
            { marca: 'Honda', modelo: 'Civic', año: 2020, precio: '$22.000', imagen: 'honda-civic.jpg' },
            { marca: 'Honda', modelo: 'CR-V', año: 2023, precio: '$35.000', imagen: 'honda-crv.jpg' },
            { marca: 'Ford', modelo: 'Focus', año: 2022, precio: '$20.000', imagen: 'ford-focus.jpg' },
            { marca: 'Ford', modelo: 'Fiesta', año: 2021, precio: '$18.000', imagen: 'ford-fiesta.jpg' }
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
