const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let products = [];
  for (let i = 0; i < stockProducts.length; i++) {
    const stockProduct = stockProducts[i];
    if (true == stockProduct.onSale) {
      products.push({
        description: stockProduct.description,
        formattedPrice: 'R$ ' + stockProduct.price,
        onSale: stockProduct.onSale,
      });
    }
  }

  return products;
};

module.exports = { getProductsOnSale };
