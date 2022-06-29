(async function(){

    let currencies;
    const response = await fetch('products.json');
    const products = await response.json();
    renderProducts(products, 1);

    document.querySelector('.convert').addEventListener('click', convertCurrency);
    async function convertCurrency() {
      if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
      }
      const currencyName = document.querySelector('.currency').value;
      const rate = currencies.rates[currencyName];
      renderProducts(products, rate);
    }

    // fetch('products.json')
    //   .then( response => response.json() )
    //   .then( products => renderProducts(products) );

    // AJAX
    // const xhr = new XMLHttpRequest();
    // xhr.onreadystatechange = function() {
    //   if (xhr.readyState === 4 && xhr.status === 200) {
    //     const products = JSON.parse(xhr.responseText);
    //     renderProducts(products);
    //   }
    // }
    // xhr.open('GET', 'products.json', true);
    // xhr.send();
    

    function renderProducts(products, rate) {
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
                ${(product.price * rate).toFixed(2)} - Buy
                </button>
              </div>
            </article>`;
        }
    }

})();