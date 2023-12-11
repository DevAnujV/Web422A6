let products = function () {
  var prods = [];
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      prods = data;
    });
  return prods;
};

module.exports.getAllProducts = function () {
  return new Promise(function (resolve, reject) {
    var productsAll = products();
    resolve(productsAll);
  });
};
