const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
  let products = [];
  for (let i = 0; i < stockProducts.length; i++) {
    const stockProduct = stockProducts[i];
    let formattedProduct = {
      description: stockProduct.description,
      formattedPrice: 'R$ ' + stockProduct.price,
    };
    if (stockProduct.allergyOrIntolerance != undefined) {
      let allergyOrIntoleranceText = 'Pode conter: ';

      for (let j = 0; j < stockProduct.allergyOrIntolerance.length; j++) {
        allergyOrIntoleranceText =
          allergyOrIntoleranceText + stockProduct.allergyOrIntolerance[j];
      }

      formattedProduct.allergyOrIntolerance = allergyOrIntoleranceText;
    }
    products.push(formattedProduct);
  }

  return products;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
