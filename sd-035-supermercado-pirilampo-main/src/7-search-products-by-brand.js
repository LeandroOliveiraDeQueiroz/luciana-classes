const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  let products = [];
  for (let i = 0; i < stockProducts.length; i++) {
    const stockProduct = stockProducts[i];
    if (brand == stockProduct.brand) {
      products.push({
        description: stockProduct.description,
        formattedPrice: 'R$ ' + stockProduct.price,
      });
    }
  }

  return products;
};

module.exports = { searchProductsByBrand };
