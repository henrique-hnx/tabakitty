const products = [
    {
        id: 'cigar',
        name: 'Cigarro Premium',
        description: 'Descrição do produto. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: 10.00,
    },
];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const cart = document.getElementById('cart');
        const totalElement = document.getElementById('total');

        const item = document.createElement('li');
        item.textContent = `${product.name} - R$${product.price.toFixed(2)}`;
        cart.appendChild(item);

        let total = parseFloat(totalElement.textContent);
        total += product.price;
        totalElement.textContent = total.toFixed(2);
    }
}


const main = document.querySelector('main');
products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'Cigarro';
    productElement.innerHTML = `
        <img src="cigar.jpg" alt="${product.name}">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Preço: R$${product.price.toFixed(2)}</p>
        <button onclick="addToCart('${product.id}')">Adicionar ao Carrinho</button>
    `;
    main.appendChild(productElement);
});