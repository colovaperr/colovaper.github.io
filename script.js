const productForm = document.getElementById('product-form');
const categories = {
    kits: document.querySelector('#kits .product-list'),
    pods: document.querySelector('#pods .product-list'),
    baterias: document.querySelector('#baterias .product-list'),
    cargadores: document.querySelector('#cargadores .product-list'),
    mods: document.querySelector('#mods .product-list'),
    accesorios: document.querySelector('#accesorios .product-list'),
};

// Manejar el envío del formulario
productForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const stock = document.getElementById('product-stock').value;
    const category = document.getElementById('product-category').value;
    const imageFile = document.getElementById('product-image').files[0];

    if (categories[category]) {
        const reader = new FileReader();
        reader.onload = () => {
            const product = document.createElement('div');
            product.classList.add('product');
            product.innerHTML = `
                <img src="${reader.result}" alt="${name}">
                <h4>${name}</h4>
                <p>Precio: $${price}</p>
                <p>Stock: ${stock}</p>
                <button class="delete-btn">Eliminar</button>
            `;

            product.querySelector('.delete-btn').addEventListener('click', () => {
                product.remove();
            });

            categories[category].appendChild(product);
        };
        reader.readAsDataURL(imageFile);

        productForm.reset();
    } else {
        alert('Categoría inválida.');
    }
});

