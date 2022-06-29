(function(){

    const products = [
        {
            id: 1,
            name: 'Baby Yoda',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati,',
            image: 'img/baby-yoda.svg',
            price: 10.99
        },
        {
            id: 2,
            name: 'Banana',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati,',
            image: 'img/banana.svg',
            price: 9.99
        },
        {
            id: 3,
            name: 'Girl',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati,',
            image: 'img/girl.svg',
            price: 12.99
        },
        {
            id: 4,
            name: 'Viking',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro fuga autem possimus eveniet facere, non minus magnam obcaecati,',
            image: 'img/viking.svg',
            price: 15.99
        }
    ];


    function renderProducts(products) {
        const productsContainer = document.querySelector('.main-products__list');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <article class="product-card">
              <img
                class="product-card__image"
                src="${product.image}"
                alt="${product.name}"
              />
              <h3 class="product-card__h3">${product.name}</h3>
              <p class="product-card__description">${product.description}</p>
              <div class="product-card__buttons">
                <button class="product-card__buttons-info button button-card">
                  Info
                </button>
                <button class="product-card__buttons-buy button button-card">
                ${product.price} - Buy
                </button>
              </div>
            </article>`;
        }
    }

    renderProducts(products);

})();