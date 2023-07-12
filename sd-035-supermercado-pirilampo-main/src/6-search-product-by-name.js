const stockProducts = require('./data.json');

const searchProductByName = (productName) => {
  let product = null;
  for (let i = 0; i < stockProducts.length; i++) {
    const stockProduct = stockProducts[i];
    if (productName == stockProduct.productName) {
      product = {
        description: stockProduct.description,
        formattedPrice: 'R$ ' + stockProduct.price,
      };
    }
  }

  return product;
};

module.exports = { searchProductByName };
