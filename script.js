fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')
  .then(response => response.json())
  .then(data => {
    const sortedProducts = Object.entries(data.products)
      .map(([key, product]) => product)
      .sort((a, b) => b.popularity - a.popularity);

    const dataDiv = document.getElementById('data');
    sortedProducts.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const subcategory = document.createElement('p');
      subcategory.textContent = `Subcategory: ${product.subcategory}`;

      const title = document.createElement('p');
      title.textContent = `Title: ${product.title}`;

      const price = document.createElement('p');
      price.textContent = `Price: ${product.price}`;

      const popularity = document.createElement('p');
      popularity.textContent = `Popularity: ${product.popularity}`;


      productDiv.appendChild(title);
      productDiv.appendChild(price);


      dataDiv.appendChild(productDiv);
    });
  })
  .catch(error => console.error(error));
