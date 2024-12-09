// Funcionalidad de búsqueda
const searchInput = document.querySelector('.search-bar input');
const products = document.querySelectorAll('.product');

searchInput.addEventListener('input', () => {
    const searchValue = searchInput.value.toLowerCase();
    products.forEach(product => {
        const productName = product.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchValue)) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
});

// Funcionalidad del carrito
let cart = [];
const cartButtons = document.querySelectorAll('.product .btn');

cartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.closest('.product');
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('p').textContent;

        cart.push({ name: productName, price: productPrice });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`Añadido al carrito: ${productName}`);

    });
});

// Mostrar carrito al cargar la página (opcional)
document.addEventListener('DOMContentLoaded', () => {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
});